import type { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers["authorization"]
    const decoded = jwt.verify(token as string, process.env.JWT_SECRET!)

    if(decoded){
        //@ts-ignore
        req.userId = decoded.id
        next()

    } else {
        res.status(403).json({
            msg: "You are not logged in"
        })
    }

}