import express from "express";
import { handleSignup } from "./user.controller";
const userRouter = express.Router();

userRouter.post('/signup', handleSignup);

export default userRouter;
