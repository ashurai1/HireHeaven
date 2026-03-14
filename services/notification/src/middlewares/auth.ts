import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import ErrorHandler from "../utils/errorHandler.js";
import { sql } from "../utils/db.js";

export interface AuthenticatedRequest extends Request {
  user?: any;
}

export const isAuthenticated = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return next(new ErrorHandler(401, "Please login to access this resource"));
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      return next(new ErrorHandler(401, "Please login to access this resource"));
    }

    const decodedData: any = jwt.verify(token, process.env.JWT_SEC as string);

    if (!decodedData) {
      return next(new ErrorHandler(401, "Invalid Token"));
    }

    const users = await sql`SELECT user_id, name, email, role FROM users WHERE user_id = ${decodedData.id}`;

    if (users.length === 0) {
      return next(new ErrorHandler(401, "User not found"));
    }

    req.user = users[0];

    next();
  } catch (error) {
    return next(new ErrorHandler(401, "Invalid Token"));
  }
};
