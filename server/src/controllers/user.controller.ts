import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import type { Request, Response } from "express";
import { contentModel, userModel } from "../models/db.js";
import { signupSchema } from "../validator/user.js";

export const signup = async (req: Request, res: Response) => {
  try {
    const result = signupSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        errors: result.error,
      });
    }

    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(403).json({
        msg: "username and password are required",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 5);

    await userModel.create({
      username,
      password: hashedPassword,
    });

    res.status(200).json({
      msg: "User Signed up successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Internal Server Error",
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    const existingUser = await userModel.findOne({
      username,
    });
    if (!existingUser) {
      return res.status(411).json({
        msg: "User not found",
      });
    }

    const matched = await bcrypt.compare(password, existingUser.password!);
    if (!matched) {
      return res.status(411).json({
        msg: "Incorrect Password",
      });
    }

    if (existingUser) {
      const token = jwt.sign(
        {
          id: existingUser._id,
        },
        process.env.JWT_SECRET!,
      );
      res.json({
        token: token,
      });
    } else {
      res.status(411).json({
        msg: "Incorrect credentials",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Internal Server Error",
    });
  }
};


