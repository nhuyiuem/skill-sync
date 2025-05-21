import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  deadline: Date,
  status: {
    type: String,
    enum: ["Pending", "In Progress", "Completed"],
    default: "Pending",
  },
  urgency: { type: String, enum: ["Low", "Medium", "High"] },
  requiredSkills: [{ type: String }],
  assignedTo: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  team: { type: mongoose.Schema.Types.ObjectId, ref: "Team" },
});

export const Task = mongoose.model("Task", taskSchema);
