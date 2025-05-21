import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";

import { auth } from "../config/auth.js";

export const registerUser = async ({ username, email, password, role }) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("Email already exists");
  }

  const user = new User({
    username,
    email,
    password,
    role: "TeamLead" || "Normal",
  });
  await user.save();

  const token = jwt.sign({ id: user._id, role: user.role }, auth.jwtSecret, {
    expiresIn: auth.jwtExpiresIn,
  });

  return {
    token,
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
      password: user.password,
      role: user.role,
    },
  };
};

export const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("User Email doesn't exist in our database");
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    throw new Error("Invalid email or password");
  }

  const token = jwt.sign({ id: user._id, role: user.role }, auth.jwtSecret, {
    expiresIn: auth.jwtExpiresIn,
  });

  return {
    token,
    user: {
      id: user._id,
      email: user.email,
      role: user.role,
    },
  };
};
