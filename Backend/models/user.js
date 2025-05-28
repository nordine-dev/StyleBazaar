import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  profilePicture: {
    type: String,
    default: "https://example.com/default-profile-picture.png",
  },
  bio: {
    type: String,
    maxlength: 500,
    default: "",
  },
  lastLogin: {
    type: Date,
    default: null,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  vereficationCode:{
    type: String,
    default: null
  },
  vereficationCodeExpireAt: {
    type: Date,
    default : null
  }
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
