import jwt, { type JwtPayload } from "jsonwebtoken"
import dotenv from "dotenv"
import type { NextFunction, Request, Response } from "express"

dotenv.config();

export async function teacherOnly(req: Request, res: Response, next: NextFunction){
    const token = req.headers['authorization'];

     if(!token){
        return res.status(400).json({
            "success": false,
            "data": "token is not valid"
        })
     }

     try{
        const checkRole = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
        const role = checkRole.role;
         
        if(role === 'teacher'){
            req.id = checkRole.id;
            next();
        }else{
            return res.status(400).json({
                "success": false,
                "data": "you have not a permission to create a class"
            })
        }
     }catch(e){   
      res.status(401).json({
        "success": false,
        "error": "UnAuthorized, token is missing"
      })
    }
}