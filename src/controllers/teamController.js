import { Team } from "../models/teamModel.js";
import { addMember } from "../services/teamService.js";
import { User } from "../models/userModel.js";

export const createTeam = async (req, res) => {
  try {
    const { name, goal } = req.body;
    const team = new Team({
      name,
      goal,
      lead: req.user.id,
      members: [req.user.id],
    });
    await team.save();
    res.status(201).json(team);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const inviteMember = async (req, res) => {
  try {
    const { teamId, email } = req.body;
    const team = await addMember(teamId, email);
    res.json(team);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const assignRole = async (req, res) => {
  try {
    const { teamId, userId, role } = req.body;
    const team = await Team.findById(teamId);
    if (!team) return res.status(404).json({ message: "Team not found" });
    const user = await User.findByIdAndUpdate(userId, { role }, { new: true });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


