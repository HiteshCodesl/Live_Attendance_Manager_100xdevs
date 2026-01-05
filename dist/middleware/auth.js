import jwt, {} from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export async function auth(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(400).json({
            "success": false,
            "data": "token is not valid"
        });
    }
    try {
        const checkToken = jwt.verify(token, process.env.JWT_SECRET);
        req.id = checkToken.id;
        req.role = checkToken.role;
        next();
    }
    catch (e) {
        res.status(401).json({
            "success": false,
            "error": "UnAuthorized, token is missing"
        });
    }
}
//# sourceMappingURL=auth.js.map