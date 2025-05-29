import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import authRoutes from "./Routes/authRoutes.js";

const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}));
app.use(cookieParser());
app.use(express.json());

//connect to database
connectDB();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "welcome to the backend server",
  });
});

app.use("/api/auth", authRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log("server is runing on port", process.env.PORT || 3000);
});
