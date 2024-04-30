import { Request, Response } from "express";
import { createUserService } from "./user.service";
import bcrypt from "bcrypt";

export const handleSignup = async (req: Request, res: Response) => {
  try {
    console.log('sign up handler')
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hashSync(password, 10)
    const createUser = await createUserService(email, hashedPassword)
    const responseMessage = {
      status: 'success',
      message: 'user created',
    }
    res.send(responseMessage);
  } catch (error) {
    console.error(error);
  }
};
