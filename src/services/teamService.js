import { Team } from '../models/teamModel.js';
import { User } from '../models/userModel.js';

export const addMember = async (teamId, email) => {
  const team = await Team.findById(teamId);
  const user = await User.findOne({ email });
  if (!team || !user) throw new Error('Team or user not found');
  if (team.members.includes(user._id)) throw new Error('User already in team');
  team.members.push(user._id);
  await team.save();
  return team;
};

