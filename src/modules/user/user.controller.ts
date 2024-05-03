import { Request, Response } from "express";
import { createUserService, loginUserService } from "./user.service";

export const handleSignup = async (req: Request, res: Response) => {
  try {
    const createUser = await createUserService(req.body);
    if (createUser) {
      const responseMessage = {
        status: "Success",
        message: "User created",
      };
      res.status(200).json(responseMessage);
    }
    const responseMessage = {
      status: "Error",
      message: "Email already exists",
      
    };
    res.status(403).json(responseMessage);
  } catch (error) {
    const responseMessagge = {
      status: "Error",
      message: "Failded to create user",
    };
    res.status(400).json(responseMessagge);
  }
};

export const handleSignin = async (req: Request, res: Response) => {
  try {
     await loginUserService(req.body);

    const responseMessage = {
      status: "Success",
      message: "User logged in",
    };
    res.status(200).json(responseMessage);
  } catch (error) {
    const responseMessage = {
      status: "Error",
      message: "Failed to log in",
      error: error instanceof Error ? error.message : "Unexpected error",
    };

    res.status(401).json(responseMessage);
  }
};
