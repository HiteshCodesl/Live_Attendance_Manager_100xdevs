import "express-ws";
import type { Application } from "express-ws";
import jwt, { type JwtPayload } from "jsonwebtoken"
import type WebSocket from "ws";
import { activeSession } from "../routes/classRoute.js";
import { classModel, userModel } from "../db/db.js";

interface WebSocketInterface {
    ws: WebSocket,
    userId: string,
    role: string
}

let allWebSocketConnections: WebSocketInterface[] = [];

export function webSocketServer(wsserver: Application) {
    wsserver.ws('/ws', (ws, req) => {
        const socket = ws as WebSocket;
        const token = req.query.token as string;

        if (!token) {
            ws.close();
            return;
        }

        const { id, role } = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;

        socket.user = { userId: id, role }

        allWebSocketConnections.push({ ws, userId: id, role });

        ws.on('message', async(data) => {
            const parsedData = JSON.parse(data.toString());
            switch (parsedData.type) {
                case "ATTENDANCE_MARKED":
                    if (socket.user?.role !== 'teacher' && !activeSession) {
                        ws.send(JSON.stringify({
                            "event": "ERROR",
                            "data": {
                                "message": "Unauthorized or invalid token"
                            }
                        }))
                    } else {
                        activeSession.attendance[parsedData.data.studentId] = parsedData.data.status;

                        allWebSocketConnections.forEach((student) => {
                            student.ws.send(JSON.stringify({
                                "event": "ATTENDANCE_MARKED",
                                "data": {
                                    "studentId": parsedData.data.studentId,
                                    "status": parsedData.data.status
                                }

                            }))
                        })
                    }
                case "TODAY_SUMMARY":
                    if (socket.user?.role !== 'teacher' || socket.user.userId != activeSession.teacherId) {
                        ws.send(JSON.stringify({
                            "event": "ERROR",
                            "data": {
                                "message": "Unauthorized or invalid token"
                            }
                        }))
                    } else {
                      

                    }
            }
        })

        ws.on('close', () => {
            allWebSocketConnections = allWebSocketConnections.filter(x => x.ws !== ws);
        })
    })
}






