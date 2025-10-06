import { Request, Response } from "express";
import { UserService } from "./user.service";

// ✅ GET all users
const getUsers = async (_req: Request, res: Response): Promise<void> => {
  try {
    const users = await UserService.getAllUsers();
    res.json({ message: "Users fetched successfully", data: users });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Error fetching users", data: null, error });
  }
};

// ✅ CREATE user
const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, password } = req.body;
    const newUser = await UserService.createUser({ name, email, password });
    res.status(201).json({ message: "User created successfully", data: newUser });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Error creating user", data: null, error });
  }
};

export const UserController = {
  getUsers,
  createUser,
};
