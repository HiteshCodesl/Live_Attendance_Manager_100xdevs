import "express-ws";
import jwt, {} from "jsonwebtoken";
import { activeSession } from "../routes/classRoute.js";
import { AttendanceModel, classModel } from "../db/db.js";
let allWebSocketConnections = [];
export function webSocketServer(wsserver) {
    wsserver.ws('/ws', (ws, req) => {
        const socket = ws;
        const token = req.query.token;
        if (!token) {
            ws.close();
            return;
        }
        const { id, role } = jwt.verify(token, process.env.JWT_SECRET);
        socket.user = { userId: id, role };
        allWebSocketConnections.push({ ws, userId: id, role });
        ws.on('message', async (data) => {
            const parsedData = JSON.parse(data.toString());
            switch (parsedData.event) {
                case "ATTENDANCE_MARKED":
                    if (socket.user?.role !== 'teacher' || !activeSession) {
                        ws.send(JSON.stringify({
                            "event": "ERROR",
                            "data": {
                                "message": "Unauthorized or invalid token"
                            }
                        }));
                        return;
                    }
                    else {
                        activeSession.attendance[parsedData.data.studentId] = parsedData.data.status;
                        allWebSocketConnections.forEach((student) => {
                            student.ws.send(JSON.stringify({
                                "event": "ATTENDANCE_MARKED",
                                "data": {
                                    "studentId": parsedData.data.studentId,
                                    "status": parsedData.data.status
                                }
                            }));
                        });
                        break;
                    }
                case "TODAY_SUMMARY":
                    if (socket.user?.role !== 'teacher' || socket.user.userId != activeSession.teacherId) {
                        ws.send(JSON.stringify({
                            "event": "ERROR",
                            "data": {
                                "message": "Unauthorized or invalid token"
                            }
                        }));
                        return;
                    }
                    else {
                        const students = await classModel.find({
                            _id: activeSession.classId
                        });
                        const total = students.length;
                        const present = Object.values(activeSession.attendance).filter(status => status === "present").length;
                        const absent = total - present;
                        ws.send(JSON.stringify({
                            "event": "TODAY_SUMMARY",
                            "data": {
                                "present": present,
                                "absent": absent,
                                "total": total
                            }
                        }));
                        break;
                    }
                case "MY_ATTENDANCE":
                    if (socket.user?.role === "student") {
                        const status = activeSession.attendance[socket.user.userId];
                        if (status) {
                            ws.send(JSON.stringify({
                                "event": "MY_ATTENDANCE",
                                "data": {
                                    "status": status
                                }
                            }));
                        }
                        else {
                            ws.send(JSON.stringify({
                                "event": "MY_ATTENDANCE",
                                "data": {
                                    "status": "not yet updated"
                                }
                            }));
                        }
                    }
                    else {
                        ws.send(JSON.stringify({
                            "event": "ERROR",
                            "data": {
                                "message": "Forbidden, student event only"
                            }
                        }));
                        break;
                    }
                case "DONE":
                    if (socket.user?.role === "teacher" && socket.user.userId === activeSession.teacherId) {
                        const students = await AttendanceModel.find({
                            classId: activeSession.classId
                        });
                        const absentStudent = students.find(s => s.status === "absent");
                        activeSession.attendance[JSON.stringify(absentStudent?.studentId)] = "absent";
                        const absentStudentIds = Object.values(activeSession.attendance).filter(([_, status]) => status === "absent").map(([studentId]) => studentId);
                        await AttendanceModel.updateMany({
                            classId: activeSession.classId,
                            studentId: absentStudentIds
                        }, {
                            $set: { status: "absent" }
                        });
                        const total = students.length;
                        const present = total - absentStudentIds.length;
                        const absent = absentStudentIds.length;
                        ws.send(JSON.stringify({
                            "event": "DONE",
                            "data": {
                                "message": "Attendance persisted",
                                "present": present,
                                "absent": absent,
                                "total": total
                            }
                        }));
                    }
                    else {
                        ws.send(JSON.stringify({
                            "event": "ERROR",
                            "data": {
                                "message": "No active attendance session"
                            }
                        }));
                    }
            }
        });
        ws.on('close', () => {
            allWebSocketConnections = allWebSocketConnections.filter(x => x.ws !== ws);
        });
    });
}
//# sourceMappingURL=ws.js.map