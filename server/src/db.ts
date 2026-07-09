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
    uerId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    }
})

export const userModel = model('User', userScema)
export const contentModel = model('Content', contentSchema)
