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
    teacherId: { type: mongoose.Types.ObjectId, ref: "user", required: true },
    studentId: { type: mongoose.Types.ObjectId, ref: "user", required: true }
});
const AttendanceSchema = new Schema({
    classId: { type: mongoose.Types.ObjectId, ref: "user", required: true },
    studentId: { type: mongoose.Types.ObjectId, ref: "user", required: true },
    status: {
        type: String,
        enum: ['present', 'absent']
    }
});
export const userModel = mongoose.model("user", UserSchema);
export const roomModel = mongoose.model("class", ClassSchema);
export const AttendanceModel = mongoose.model('attendance', AttendanceSchema);
//# sourceMappingURL=userModel.js.map