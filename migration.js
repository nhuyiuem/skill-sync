import mongoose from "mongoose";
import { User } from "../skill-sync/src/models/userModel.js"
import { connectDB } from "../skill-sync/src/config/db.js";

const generateUsername = async (base) => {
  let username = base;
  let count = 0;

  while (await User.exists({ username })) {
    count++;
    username = `${base}${count}`;
  }

  return username;
};

const migrateRequiredUsernames = async () => {
  await connectDB();

  const users = await User.find();

  for (const user of users) {
    if (!user.username) {
      const base = user.email?.split("@")[0] || "user";
      const uniqueUsername = await generateUsername(base);
      user.username = uniqueUsername;
      await user.save();
      console.log(`✅ Set username for ${user.email}: ${user.username}`);
    }
  }

  console.log("🎉 All usernames migrated successfully.");
  process.exit(0);
};

migrateRequiredUsernames().catch((err) => {
  console.error("❌ Migration failed:", err);
  process.exit(1);
});
