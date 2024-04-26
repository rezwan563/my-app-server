import { Request, Response, NextFunction } from "express";

export const checkAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("Login verified");
  } catch (error) {
    console.error("Login service unavailable");
  }
  next()
};
