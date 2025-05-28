import express from "express";
import { changePassword, login, logout, register, sendResetPassword, verifyResetPasswordCode } from "../controllers/authControllers.js";

const router = express.Router();


router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/send-code-email", sendResetPassword);
router.post("/verify-code-email", verifyResetPasswordCode);
router.post("/change-password", changePassword);


export default router;