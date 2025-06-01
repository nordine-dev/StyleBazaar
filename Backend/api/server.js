import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "../config/db.js";
import authRoutes from "../Routes/authRoutes.js";
import dataRoutes from "../Routes/dataRoutes.js";
import ServerlessHttp from "serverless-http";

const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.static("uploads"));

//connect to database
connectDB();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "welcome to the backend server",
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/data", dataRoutes);

// app.listen(process.env.PORT || 3000, () => {
//   console.log("server is runing on port", process.env.PORT || 3000);
// });

export default ServerlessHttp(app);
