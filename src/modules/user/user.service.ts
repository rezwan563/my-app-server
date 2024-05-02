import prisma from "../../prisma";

export const createUserService = async (email: string, password: string) => {
  try {
    const user = await prisma.user.create({
      data: {
        email,
        password,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

export const loginUserService = async (
  email: string,
  passwordInput: string
) => {
  try {
    console.log("db te user khujetesi...");
    const user = await prisma.user.findUnique({
      where:{
        email: email
      }
    });
    console.log(user)
  } catch (error) {
    console.error(error);
  }
};
