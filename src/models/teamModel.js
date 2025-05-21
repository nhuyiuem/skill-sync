import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  goal: String,
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  lead: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

export const Team = mongoose.model("Team", teamSchema);
