import { JwtPayload } from "jsonwebtoken";
import AppError from "../errorHelpers/AppError";
import { verifyToken } from "../utils/jwt";
import { NextFunction,Request,Response } from "express";

export const checkAuths = (...authRoles: string[]) => async (req: Request, res: Response, next: NextFunction) => {

    try {
        const accessToken = req.headers.authorization;

        if (!accessToken) {
            throw new AppError(403, "NO Token Received");
        }

        const verifiedToken = verifyToken(accessToken, "secrete") as JwtPayload;

        if (!authRoles.includes(verifiedToken.role as string)) {
            throw new AppError(403, "You are not permitted to view this route!!!")
        }

        next()

    } catch (error) {
        next(error);
    }

}