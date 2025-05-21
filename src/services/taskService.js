import { Task } from "../models/taskModel.js";
import { Team } from "../models/teamModel.js";

export const assignTask = async (taskId, userId) => {
  const task = await Task.findById(taskId);
  const team = await Team.findById(task?.team);

  if (!task || !team) throw new Error("Task or team not found");

  if (!team.members.includes(userId)) throw new Error("User not in team");

  task.assignedTo = userId;
  await task.save();
  return task;
};
