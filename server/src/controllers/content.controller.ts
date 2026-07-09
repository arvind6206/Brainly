import type { Request, Response } from "express";
import { contentModel } from "../models/db.js";

export const createContent = async (req: Request, res: Response) => {
  try {
    const { title, link, tags } = req.body;
    await contentModel.create({
      link,
      title,
      tags: [],
      //@ts-ignore
      userId: req.userId,
    });
    return res.json({
      msg: "Content Added",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Internal Server Error",
    });
  }
};

