import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        required: true,
        trim: true,
        type: String
    },
    email: {
        required: true,
        trim: true,
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

export default mongoose.model("User", userSchema)