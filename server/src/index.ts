import express from 'express'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import { contentModel, userModel } from './db.js'
import dotenv from 'dotenv'
import { authMiddleware } from './authMiddleware.js'

const app = express()
dotenv.config()

app.use(express.json())

app.post('/api/v1/signup', async(req, res) => {
    //zod validation
    const {username, password} = req.body
    await userModel.create({
        username, password
    })

    res.json({
        msg: "User Signed up successfully"
    })

})

app.post('/api/v1/signin', async(req, res) => {
    const {username, password} = req.body

    const existingUser = await  userModel.findOne({
        username, password
    })

    if(existingUser){
        const token = jwt.sign({
            id: existingUser._id
        }, process.env.JWT_SECRET!)
        res.json({
            token: token
        })
    } else {
        res.status(411).json({
            msg: "Incorrect credentials"
        })
    }
})

app.post('/api/v1/content', authMiddleware, async(req, res) => {
    const {title, link, tags} = req.body
    await contentModel.create({
        link,
        title,
        tags:[],
        //@ts-ignore
        userId: req.userId

    })
    return res.json({
        msg: "Content Added"
    })

})

app.get('/api/v1/content', async(req, res) => {
    //@ts-ignore
    const userId = req.userId
    const content = await contentModel.find({
        userId: userId
    }).populate("userId", "username")
    res.json({
        content
    })
})

app.delete('/api/v1/content', async(req, res) => {
    const contentId = req.body.contentId
    await contentModel.deleteOne({
        contentId,
        //@ts-ignore
        userId: res.userId
    })
})

app.post('/api/v1/brain/share', (req, res) => {
    
})

app.get('/api/v1/brain/:shareLink', (req, res) => {
    
})

if (!process.env.MONGO_URI) {
  throw new Error("MONGO_URI is not defined");
}

await mongoose.connect(process.env.MONGO_URI);
app.listen(3000)