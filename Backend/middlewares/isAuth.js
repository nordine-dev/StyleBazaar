import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const isAuth = async (req, res, next)=>{
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({
            success: false,
            message: "Unauthorized access, please login first"
        });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(!decoded){
            return res.status(401).json({
                success: false,
                message: "Unauthorized access, please login first"
            });
        }
        const user = await User.findById(decoded.id);
        if(!user){
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        req.userId = user._id;
        next();
    } catch (error) {
        return res.status(500).json({
            success:false,
            message: "Internal server error"
        })
    }
}