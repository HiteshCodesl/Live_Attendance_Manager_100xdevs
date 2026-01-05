import jwt, {} from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export async function teacherOnly(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(400).json({
            "success": false,
            "data": "token is not valid"
        });
    }
    try {
        const checkRole = jwt.verify(token, process.env.JWT_SECRET);
        const role = checkRole.role;
        if (role === 'teacher') {
            req.id = checkRole.id;
            next();
        }
        else {
            return res.status(400).json({
                "success": false,
                "data": "you have not a permission to create a class"
            });
        }
    }
    catch (e) {
        res.status(401).json({
            "success": false,
            "error": "UnAuthorized, token is missing"
        });
    }
}
//# sourceMappingURL=teacherOnly.js.map