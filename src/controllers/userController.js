
import { User } from "../models/userModel.js";

export const updateProfile = async (req, res) => {
  try {
    const updateData = {};

    const { username, bio, skills, role } = req.body;

    if (username) updateData.username = username;
    if (bio !== undefined) updateData.bio = bio;
    if (skills) updateData.skills = skills;
    if (role) updateData.role = role;
    if (req.file?.path) updateData.avatar = req.file.path;

    const user = await User.findByIdAndUpdate(req.user.id, updateData, {
      new: true,
    });

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({
      id: user._id,
      email: user.email,
      username: user.username,
      bio: user.bio || null,
      role: user.role,
      avatar: user.avatar || null,
      skills: user.skills || [],
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({
      id: user._id,
      email: user.email,
      username: user.username,
      bio: user.bio || null,
      role: user.role,
      avatar: user.avatar || null,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
