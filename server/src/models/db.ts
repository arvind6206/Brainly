import mongoose, {model, Schema} from "mongoose";

const userScema = new Schema({
    username: {
        type: String,
        unique: true
    },
    password: String
})


const contentSchema = new Schema({
    title: String,
    link: String,
    tags: [{type: mongoose.Types.ObjectId, ref: "Tag"}],
    type: String,
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    }
})


const linkSchema = new Schema({
    hash: String,
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        unique: true
    }
})

export const userModel = model('User', userScema)
export const contentModel = model('Content', contentSchema)
export const linkModel = model('Link', linkSchema)

