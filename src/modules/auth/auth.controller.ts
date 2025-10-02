import { Request, Response } from "express";
import { AuthService } from "./auth.service";
const login = async (req: Request, res: Response) => {
  try {
    const result = await AuthService.login(req.body);
    res.status(200).json({ message: "Logged in successfully", data: result });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const AuthController = {
  login,
};
