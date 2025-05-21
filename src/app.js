import express, { json } from "express";
import { configDotenv } from "dotenv";
import { route } from "./routes/route.js";
import { connectDB } from "./config/db.js";

configDotenv();
export const app = express();

connectDB();
app.use(json());
app.use("/api/v1", route);
