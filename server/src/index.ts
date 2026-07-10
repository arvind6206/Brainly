import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes.js";
import contentRouter from "./routes/content.routes.js";
import { authMiddleware } from "./middlewares/authMiddleware.js";
import { contentModel, linkModel, userModel } from "./models/db.js";
import { random } from "./utils.js";

const app = express();
dotenv.config();

app.use(express.json());

const PORT = process.env.PORT!

app.use("/api/v1/user", userRouter) 
app.use("/api/v1/user/create", contentRouter) 

app.post("/api/v1/brain/share", async(req, res) => {
    const {share} = req.body;

    if(share){
        await linkModel.create({
            //@ts-ignore
            userId: req.userId,
            hash: random(10)
        })
    } else {
        await linkModel.deleteOne({
            //@ts-ignore
            userId: req.userId,
        })
    }
    res.json({
        msg: "Updated sharable link"
    })

});

app.get("/api/v1/brain/:shareLink", authMiddleware, async(req, res) => {
    const hash = req.params.shareLink
    //@ts-ignore
    const link = await linkModel.findOne({
        hash
    })
    if(!link){
        return res.status(411).json({
            mag: "sorry incorrect input"
        })
    }

    const content = await contentModel.find({
        userId: link.userId
    })

    const user = await userModel.findOne({
        userId: link.userId
    })

    res.json({
        username: user?.username,
        content: content
    })
});

async function main(){
    if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is not defined");
}
await mongoose.connect(process.env.MONGO_URI);
console.log("DB connected")

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
});
}
main()


