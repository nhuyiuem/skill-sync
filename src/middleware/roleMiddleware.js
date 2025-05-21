import { User } from '../models/userModel.js';

export const roleMiddleware = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user || user.role !== 'TeamLead') {
      return res.status(403).json({ message: 'Access denied: Team Lead only' });
    }
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};