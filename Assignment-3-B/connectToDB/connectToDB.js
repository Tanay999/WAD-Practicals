import mongoose from "mongoose";

const URL = 'mongodb+srv://Tanay1:1234@cluster0.nq1mdcw.mongodb.net/'

export const connectToDB = () =>{
    mongoose.connect(URL)
    console.log("Connected to DB")
}