import { User } from "../models/userModel.js";

export const updateProfile = async (req, res) => {
  try {
    const { bio } = req.body;
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { bio, avatar: req.file?.path },
      { new: true }
    );
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ email: user.email, bio: user.bio, avatar: user.avatar });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ email: user.email, bio: user.bio, avatar: user.avatar });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
