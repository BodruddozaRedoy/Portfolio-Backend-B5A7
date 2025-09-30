import { Request, Response } from "express";
import { UserService } from "./user.service";

const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserService.getAllUsers();
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await UserService.createUser({ name, email, password });
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const UserController = { getUsers, createUser };
