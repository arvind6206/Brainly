import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes.js";
import contentRouter from "./routes/content.routes.js";

const app = express();
dotenv.config();

app.use(express.json());

const PORT = process.env.PORT!

app.use("/api/v1/user", userRouter) 
app.use("/api/v1/user/create", contentRouter) 

app.post("/api/v1/brain/share", (req, res) => {});

app.get("/api/v1/brain/:shareLink", (req, res) => {});

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


