import express, { json } from "express";
import { configDotenv } from "dotenv";
import { route } from "./routes/route.js";
import { connectDB } from "./config/db.js";
import { errorMiddleware } from "./middleware/errorMiddleware.js";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import cors from "cors";

configDotenv();
export const app = express();

// Security middlewares
app.use(helmet());
app.use(cors());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
});
app.use("/api/v1/auth", limiter);

connectDB();

app.use(json());
app.use("/uploads", express.static("uploads")); // Serve uploaded files
app.use("/api/v1", route);
app.use(errorMiddleware);
