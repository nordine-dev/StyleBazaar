import jwt from "jsonwebtoken";
import User from "../models/user.js";
import bcrypt from "bcrypt";
import { transporter } from "../config/transport.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "Please provide all required fields",
    });
  }
  try {
    // check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exist",
      });
    }

    //check if username already exists
    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res.status(400).json({
        success: false,
        message: "Username already exists",
      });
    }
    // check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address",
      });
    }
    // check if password is starong enough
    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message:
          "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number",
      });
    }
    // create new user
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return res.status(201).json({
      success: true,
      message: "user created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Please provide all required fields",
    });
  }

  try {
    //check if user exists
    const user = await User.findOne({ email });
    if (!user || user.length === 0) {
      return res.status(404).json({
        success: false,
        message: "user not found",
      });
    }

    //check if password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }
    // generate jwt token
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES_IN || "1d",
      }
    );
    // set token in cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });
    res.status(200).json({
      success: true,
      message: "Login successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).json({
      success: true,
      message: "Logout successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
};

// send reset password
export const sendResetPassword = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({
      success: false,
      message: "Please provide all required fields",
    });
  }

  try {
    // check if user exists
    const userExists = await User.findOne({ email });
    if (!userExists) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // send email verfication code
    const code = Math.floor(100000 + Math.random() * 900000); // generate 6 digit code
    userExists.vereficationCode = code;
    userExists.vereficationCodeExpireAt = Date.now() + 10 * 60 * 1000; // code valid for 10 minutes
    await userExists.save();

    // sen email with code
    const options = {
      from: process.env.STMP_EMAIL,
      to: email,
      subject: "Reset Password Verification Code",
      text: `Your verification code is ${code}. It is valid for 10 minutes.`,
    };
    await transporter.sendMail(options);
    return res.status(200).json({
      success: true,
      message: "Verification code sent to your email",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
};

// verify reset passord code
export const verifyResetPasswordCode = async (req, res) => {
  const { email, code } = req.body;
  if (!email || !code) {
    return res.status(400).json({
      success: false,
      message: "Please provide all required fields",
    });
  }
  try {
    // check if user exists
    const userExists = await User.findOnde({ email });
    if (!userExists) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    // check if code is valid
    if (
      userExists.vereficationCode !== code ||
      userExists.vereficationCodeExpireAt < Date.now()
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid or expired verification code",
      });
    }
    // code is valid
    return res.status(200).json({
      success: true,
      message: "Verification code is valid",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
};

// change password
export const changePassword = async (req, res) => {
  const { email, code, newPassword } = req.body;
  if (!email || !code || !newPassword) {
    return res.status(400).json({
      success: false,
      message: "Please provide all required fields",
    });
  }
  try {
    //check uf user exists
    const userExists = await User.findOnd({ email });
    if (!userExists) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    // check if code is valid
    if (
      userExists.vereficationCode !== code ||
      userExists.vereficationCodeExpireAt < Date.now()
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid or expired verification code",
      });
    }
    //update password
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    userExists.password = hashedPassword;
    userExists.vereficationCode = null; // clear the verification code
    userExists.vereficationCodeExpireAt = null; // clear the verification code expiration
    await userExists.save();
    return res.status(200).json({
      success: true,
      message: "Password changed successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Internal  server error",
    });
  }
};

// get user profile
export const getUserProfile = async (req, res) => {
  const { userId } = req;
  if (!userId) {
    return res.status(400).json({
      success: false,
      message: "User ID is required",
    });
  }

  const user = await User.findById(userId);
  if(!user){
    return res.status(404).json({
      success: false,
      message: "User not found"
    })
  }
  return res.status(200).json({
    success:true,
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role
    }
  })
};
