import { Request, Response } from "express";
import * as userService from "./user.service";

export const getUsers = async (req: Request, res: Response) => {
  const users = await userService.getAllUsers();
  res.json(users);
};

export const createUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const newUser = await userService.createUser({ name, email, password });
  res.status(201).json(newUser);
};
