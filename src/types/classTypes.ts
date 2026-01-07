import z from "zod"

export const classSchema = z.object({
    className: z.string().min(2)
})

export const addStudentSchema = z.object({
    studentId: z.string(),
})

export const attendanceStartSchema = z.object({
    classId: z.string()
})