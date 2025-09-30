import prisma from "../../prisma/client";

const getAllUsers = async () => {
  return prisma.user.findMany();
};

const createUser = async (data: { name: string; email: string; password: string }) => {
  return prisma.user.create({ data });
};


export const UserService = {getAllUsers, createUser}