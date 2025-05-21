import { Task } from "../models/taskModel.js";
import { Team } from "../models/teamModel.js";

import { assignTask } from "../services/taskService.js";

const createTask = async (req, res) => {
  try {
    const { title, description, deadline, requiredSkills, assignedTo, teamId } =
      req.body;
    const team = await Team.findById(teamId);
    if (!team || (assignedTo && !team.members.includes(assignedTo))) {
      return res.status(400).json({ message: "Invalid team or member" });
    }
    const task = new Task({
      title,
      description,
      deadline,
      requiredSkills,
      assignedTo,
      team: teamId,
    });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateTaskStatus = async (req, res) => {
  try {
    const { taskId, status } = req.body;
    const task = await Task.findById(taskId);
    if (!task) return res.status(404).json({ message: "Task not found" });
    task.status = status;
    await task.save();
    res.json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const assignTaskController = async (req, res) => {
  try {
    const { taskId, userId } = req.body;
    const task = await assignTask(taskId, userId);
    res.json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export { createTask, updateTaskStatus, assignTaskController as assignTask };
