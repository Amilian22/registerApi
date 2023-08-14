import mongoose from "mongoose";
import mongoURL from "./config.js"


const connectDB = async () => {
    try {
        await mongoose.connect(mongoURL);
        console.log("DB is connect");
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;