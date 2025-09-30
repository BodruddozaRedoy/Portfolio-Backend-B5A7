import prisma from "../../prisma/client";

export const getAllUsers = async () => {
  return prisma.user.findMany();
};

export const createUser = async (data: { name: string; email: string; password: string }) => {
  return prisma.user.create({ data });
};
