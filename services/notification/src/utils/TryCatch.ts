import { Request, Response, NextFunction } from "express";

export interface CustomError extends Error {
  statusCode: number;
}

const TryCatch = (func: (req: any, res: Response, next: NextFunction) => Promise<any>) =>
  (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(func(req, res, next)).catch(next);
  };

export default TryCatch;
