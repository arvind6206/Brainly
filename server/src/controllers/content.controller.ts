import type { Request, Response } from "express";
import { contentModel } from "../models/db.js";

export const createContent = async (req: Request, res: Response) => {
  try {
    const { title, link, tags, type } = req.body;
    await contentModel.create({
      link,
      title,
      type,
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

export const getContent = async (req: Request, res: Response) => {
  try {
    //@ts-ignore
    const userId = req.userId;
    const content = await contentModel
      .find({
        userId: userId,
      })
      .populate("userId", "username");
    res.json({
      content,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Internal server Error",
    });
  }
};


export const deleteContent = async (req: Request, res: Response) => {
  try {
    const contentId = req.body.contentId;
   await contentModel.deleteOne({
    contentId,
    //@ts-ignore
    userId: res.userId,
  });
  } catch (error) {
    console.log(error)
    res.status(500).json({
        msg: "Internal Server Error"
    })
  }
};