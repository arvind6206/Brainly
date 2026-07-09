import express from 'express'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import { userModel } from './db.js'
import dotenv from 'dotenv'

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

app.post('/api/v1/signin', (req, res) => {
    const {username, password} = req.body
})

app.post('/api/v1/content', (req, res) => {
    
})

app.get('/api/v1/content', (req, res) => {
    
})

app.delete('/api/v1/content', (req, res) => {
    
})

app.post('/api/v1/brain/share', (req, res) => {
    
})

app.get('/api/v1/brain/:shareLink', (req, res) => {
    
})

if (!process.env.MONGO_URI) {
  throw new Error("MONGO_URI is not defined");
}

await mongoose.connect(process.env.MONGO_URI);