import prisma from "../../prisma";

export const createUserService = async (
  email = "nomail@gmail.com",
  password = "123456"
) => {
  try {
    const user = await prisma.user.create({
      data: {
        email,
        password,
      }
    });
  } catch (error) {
    console.error(error);
  }
};
