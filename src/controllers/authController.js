import { registerUser, loginUser } from "../services/authService.js";

export const register = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    const result = await registerUser({ username, email, password, role });
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await loginUser({ email, password });
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
