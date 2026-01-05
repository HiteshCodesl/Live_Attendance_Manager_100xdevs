import { Router } from "express";
import { loginSchema, signupSchema } from "../types/userTypes.js";
import { userModel } from "../db/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { auth } from "../middleware/auth.js";
dotenv.config();
export const userRouter = Router();
userRouter.post('/signup', async function (req, res) {
    const { success, data } = signupSchema.safeParse(req.body);
    if (!success) {
        return res.status(400).json({
            success: false,
            error: "Invalid input data"
        });
    }
    const { email, name, password } = data;
    const isuser = await userModel.findOne({
        email: email
    });
    if (isuser) {
        return res.status(400).json({
            success: false,
            error: "Email already exists"
        });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userModel.create({
        email: email,
        password: hashedPassword,
        name: name,
        role: "student"
    });
    if (!user) {
        return res.status(400).json({
            success: false,
            error: "User cannot be created"
        });
    }
    return res.status(201).json({
        success: true,
        data: {
            id: user._id,
            name: user.name,
            role: user.role,
            email: user.email
        }
    });
});
userRouter.post('/login', async function (req, res) {
    const { success, data } = loginSchema.safeParse(req.body);
    if (!success) {
        return res.status(400).json({
            success: false,
            error: "Invalid input data"
        });
    }
    const { email, password } = data;
    const checkUser = await userModel.findOne({
        email: email
    });
    if (!checkUser || !checkUser.password) {
        return res.status(400).json({
            success: false,
            error: "email is not valid"
        });
    }
    const checkPassword = await bcrypt.compare(password, checkUser.password);
    if (!checkPassword) {
        return res.status(400).json({
            success: false,
            error: "password is not valid"
        });
    }
    const token = jwt.sign({
        id: checkUser._id,
        role: checkUser.role
    }, process.env.JWT_SECRET);
    if (!token) {
        return res.status(400).json({
            success: false,
            error: "token not created"
        });
    }
    return res.status(201).json({
        success: true,
        data: token
    });
});
userRouter.get('/me', auth, async function (req, res) {
    const userId = req.id;
    const user = await userModel.findOne({
        _id: userId
    });
    if (!user) {
        return res.status(400).json({
            "success": false,
            "error": "user is not found"
        });
    }
    return res.status(201).json({
        "success": true,
        "data": {
            name: user.name,
            role: user.role,
            email: user.email
        }
    });
});
//# sourceMappingURL=userRoute.js.map