import mongoose from "mongoose";

export default async function connectDB(){
    try {
        mongoose.connect(process.env.DB_URI).then(()=>{
            console.log("Database connected successfully")
        }).catch((err)=>{
            console.error("Database connection error:", err);
        })
    } catch (error) {
        console.error("Database connection failed", error); 
    }
}