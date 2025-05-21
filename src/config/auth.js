import { configDotenv } from "dotenv";

configDotenv();

export const auth = {
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiresIn: "1h",
};
