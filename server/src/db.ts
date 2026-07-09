import {model, Schema} from "mongoose";

const userScema = new Schema({
    username: {
        type: String,
        unique: true
    },
    password: String
})

export const userModel = model('User', userScema)