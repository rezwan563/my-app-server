import { response } from "express";
import prisma from "../../prisma";
import bcrypt from "bcrypt";
import createHttpError, { HttpError } from "http-errors";

interface UserCredential {
  email: string,
  password: string
}

export const createUserService = async (data: UserCredential) => {
  const { email, password } = data;
  try {
    const userExist = await prisma.user.findUnique({
      where:{
        email: email
      }
    })
    if(userExist){
      // throw createHttpError(400, 'User already exits')
      return;
    }
    const user = await prisma.user.create({
      data:{
        ...data,
        password: await bcrypt.hash(password, 12)
      }
    })
    return user
  } catch (error) {
    console.error(error);
  }
};

export const loginUserService = async (data: UserCredential) => {
  const { email, password } = data;
  const user = await prisma.user.findUnique({
    where:{
      email: email
    }
  })
  if(!user){
    throw createHttpError(401, 'Incorrect email')
    
  }
  const check = await bcrypt.compare(password, user.password)
  if(!check){
    throw createHttpError(401, 'Incorrect password')
  }
  return user
};
