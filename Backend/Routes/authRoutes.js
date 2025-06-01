import express from "express";
import { changePassword, getUserProfile, login, logout, register, sendResetPassword, verifyResetPasswordCode } from "../controllers/authControllers.js";
import { isAuth } from "../middlewares/isAuth.js";

const router = express.Router();


router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/send-code-email", sendResetPassword);
router.post("/verify-code-email", verifyResetPasswordCode);
router.post("/change-password", changePassword);

router.get("/user",isAuth, getUserProfile)


export default router;