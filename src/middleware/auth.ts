import type { NextFunction, Request, Response } from "express";
import jwt, { type JwtPayload } from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config();

export async function auth(req: Request, res: Response, next: NextFunction){
     const token = req.headers['authorization'];

    if(!token){
        return res.status(400).json({
            "success": false,
            "data": "token is not valid"
        })
     }

    try{
     const checkToken = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
      req.id = checkToken.id;
      req.role = checkToken.role

      next();
    }
    catch(e){   
      res.status(401).json({
        "success": false,
        "error": "UnAuthorized, token is missing"
      })
    }
}