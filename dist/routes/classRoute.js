import express from "express";
import { teacherOnly } from "../middleware/teacherOnly.js";
import { addStudentSchema, attendanceStartSchema, classSchema } from "../utils/classTypes.js";
import { AttendanceModel, classModel, userModel } from "../db/db.js";
import mongoose from "mongoose";
import { auth } from "../middleware/auth.js";
export let activeSession = null;
export const classRouter = express.Router();
classRouter.post('/create', teacherOnly, async (req, res) => {
    const teacherId = req.id;
    const { success, data } = classSchema.safeParse(req.body);
    if (!success) {
        return res.status(400).json({
            success: false,
            error: "Invalid input data"
        });
    }
    const { className } = data;
    const createClass = await classModel.create({
        className: className,
        teacherId: teacherId
    });
    if (!createClass) {
        return res.status(401).json({
            "success": false,
            "error": "class is not created"
        });
    }
    return res.status(201).json({
        "success": true,
        "data": {
            classId: createClass._id,
            className: createClass.className,
            teacherId: createClass.teacherId,
            studentId: createClass.studentIds
        }
    });
});
classRouter.post('/:id/add-student', teacherOnly, async (req, res) => {
    const { success, data } = addStudentSchema.safeParse(req.body);
    if (!success) {
        return res.status(400).json({
            success: false,
            error: "Invalid data"
        });
    }
    const { studentId } = data;
    const findClass = await classModel.findById({
        _id: req.params.id
    });
    console.log(findClass);
    if (!findClass) {
        return res.status(401).json({
            "success": false,
            "error": "Class not found"
        });
    }
    const isStudentIsUser = await userModel.findOne({
        _id: studentId
    });
    if (!isStudentIsUser) {
        return res.status(401).json({
            "success": false,
            "error": "Student is not found"
        });
    }
    if (findClass.studentIds.some((id) => id.toString() === studentId)) {
        return res.status(400).json({
            success: false,
            error: "Student already added",
        });
    }
    findClass.studentIds.push(new mongoose.Types.ObjectId(studentId));
    await findClass.save();
    const saveAttendance = await AttendanceModel.create({
        status: "present",
        studentId: studentId,
        classId: findClass._id
    });
    if (!saveAttendance) {
        return res.status(400).json("attendance not saved");
    }
    return res.status(200).json({
        "success": true,
        "data": {
            "_id": findClass._id,
            "className": findClass.className,
            "teacherId": findClass.teacherId,
            "studentIds": findClass.studentIds
        }
    });
});
classRouter.get('/classRoom/:id', auth, async (req, res) => {
    const findClass = await classModel.findById(req.params.id).populate("studentIds", "name email").exec();
    if (!findClass) {
        return res.status(401).json({
            "success": false,
            "error": "Class not found"
        });
    }
    const checkIsStudent = findClass.studentIds.some((id) => id.toString() === req.id);
    const checkIdTeacher = findClass.teacherId?.toString() === req.id;
    if (checkIdTeacher || checkIsStudent) {
        return res.status(200).json({
            "success": true,
            "data": {
                "_id": findClass._id,
                "className": findClass.className,
                "teacherId": findClass.teacherId,
                "students": findClass.studentIds
            }
        });
    }
    else {
        return res.status(401).json({
            "success": false,
            "error": "you have not a class member"
        });
    }
});
classRouter.get('/students', teacherOnly, async (req, res) => {
    const students = await userModel.find({ role: "student" });
    return res.status(201).json({
        "success": true,
        "data": students.map(student => ({
            id: student._id,
            name: student.name,
            email: student.email
        }))
    });
});
classRouter.get('/:id/my-attendance', auth, async (req, res) => {
    if (req.role === "teacher") {
        return res.status(401).json("Cannot be accessed");
    }
    const studentId = req.id;
    if (!studentId) {
        return res.status(404).json("student not found");
    }
    const findClass = await AttendanceModel.find({
        classId: new mongoose.Types.ObjectId(req.params.id),
        studentId: studentId
    })
        .select("classId status");
    if (findClass.length < 1) {
        return res.status(404).json({
            "success": false,
            "data": "Student not found in the class"
        });
    }
    return res.status(201).json({
        "success": true,
        "data": findClass
    });
});
classRouter.post('/attendance/start', teacherOnly, async (req, res) => {
    const { data, success } = attendanceStartSchema.safeParse(req.body);
    if (!success) {
        return res.status(400).json({
            success: false,
            error: "Invalid data"
        });
    }
    const { classId } = data;
    const findClass = await classModel.findById({ _id: classId });
    if (!findClass || findClass.teacherId?.toString() !== req.id) {
        return res.status(401).json({
            "success": false,
            "error": "Cannot found a class"
        });
    }
    activeSession = {
        classId: findClass._id.toString(),
        startedAt: new Date(),
        attendance: {}
    };
    return res.status(201).json({
        "success": true,
        "data": {
            "classId": classId,
            "startedAt": activeSession.startedAt
        }
    });
});
//# sourceMappingURL=classRoute.js.map