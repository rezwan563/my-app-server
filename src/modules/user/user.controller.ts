import { Request, Response } from "express";
import { createUserService } from "./user.service";

export const handleSignup = async (req: Request, res: Response) => {
  try {
    console.log('sign up handler')
    const { email, password } = req.body;
    const createUser = await createUserService(email, password)
    const responseMessage = {
      status: 'success',
      message: 'user created',
      result: createUser
    }
    res.send(responseMessage);
  } catch (error) {
    console.error(error);
  }
};
