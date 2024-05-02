import express from "express";
import { handleSignup, handleSignin } from "./user.controller";
const userRouter = express.Router();

userRouter.post("/signup", handleSignup);

userRouter.post("/signin", handleSignin);

export default userRouter;
