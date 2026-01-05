import mongoose from "mongoose";
const Schema = mongoose.Schema;
import dotenv from "dotenv";
dotenv.config();
export async function connectToDatabase() {
    await mongoose.connect(process.env.MONGO_URL);
}
const UserSchema = new Schema({
    name: String,
    email: { type: String, unique: true, required: true },
    password: String,
    role: {
        type: String,
        enum: ['student', 'teacher', 'admin'],
        default: 'student'
    }
});
const ClassSchema = new Schema({
    className: { type: String, required: true },
    teacherId: { type: Schema.Types.ObjectId, ref: "user" },
    studentIds: [
        { type: Schema.Types.ObjectId, ref: "user" }
    ]
});
const AttendanceSchema = new Schema({
    classId: { type: Schema.Types.ObjectId, ref: "class", required: true },
    studentId: { type: Schema.Types.ObjectId, ref: "user", required: true },
    status: {
        type: String,
        enum: ['present', 'absent']
    }
});
export const userModel = mongoose.model("user", UserSchema);
export const classModel = mongoose.model("class", ClassSchema);
export const AttendanceModel = mongoose.model('attendance', AttendanceSchema);
//# sourceMappingURL=db.js.map