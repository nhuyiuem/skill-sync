// import { Team } from "../models/teamModel.js";
// import { Task } from "../models/taskModel.js";
import { User } from "../models/userModel.js";
import { connectDB } from "../config/db.js";

const migrateData = async () => {
  await connectDB();

  const users = await User.find();

  for (const user of users) {
    let needsUpdate = false;

    // Ensure 'teams' exists and is an array
    if (!Array.isArray(user.teams)) {
      user.teams = [];
      needsUpdate = true;
    }

    if (needsUpdate) {
      await user.save();
      console.log(`Updated user: ${user.email}`);
    }
  }

  console.log("Migration for 'teams' field completed.");
  process.exit(0);
};

migrateData().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});
