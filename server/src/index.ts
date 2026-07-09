import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { authMiddleware } from "./middlewares/authMiddleware.js";
import bcrypt from "bcryptjs";
import userRouter from "./routes/user.routes.js";
import { contentModel, userModel } from "./models/db.js";
import contentRouter from "./routes/content.routes.js";

const app = express();
dotenv.config();

app.use(express.json());

app.use("/api/v1/user", userRouter) 
app.use("/api/v1/user/content", contentRouter) 




app.get("/api/v1/content", async (req, res) => {
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
});

app.delete("/api/v1/content", async (req, res) => {
  const contentId = req.body.contentId;
  await contentModel.deleteOne({
    contentId,
    //@ts-ignore
    userId: res.userId,
  });
});

app.post("/api/v1/brain/share", (req, res) => {});

app.get("/api/v1/brain/:shareLink", (req, res) => {});

if (!process.env.MONGO_URI) {
  throw new Error("MONGO_URI is not defined");
}

await mongoose.connect(process.env.MONGO_URI);
app.listen(3000);
