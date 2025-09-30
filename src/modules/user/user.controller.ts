import { Request, Response } from "express";
import { UserService } from "./user.service";

const getUsers = async (req: Request, res: Response) => {
  const users = await UserService.getAllUsers();
  res.json(users);
};

const createUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const newUser = await UserService.createUser({ name, email, password });
  res.status(201).json(newUser);
};


export const UserController = {getUsers, createUser}