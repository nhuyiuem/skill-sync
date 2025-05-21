import { Router } from "express";
import {
  createTask,
  updateTaskStatus,
  assignTask,
} from "../controllers/taskController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { roleMiddleware } from "../middleware/roleMiddleware.js";
import { validate } from "../middleware/validateMiddleware.js";
import {
  createTaskSchema,
  updateTaskStatusSchema,
  assignTaskSchema,
} from "../schemas/taskSchema.js";

export const taskRoute = Router();

taskRoute.post(
  "/",
  [authMiddleware, roleMiddleware, validate(createTaskSchema)],
  createTask
);

taskRoute.put(
  "/status",
  [authMiddleware, validate(updateTaskStatusSchema)],
  updateTaskStatus
);

taskRoute.post(
  "/assign",
  [authMiddleware, roleMiddleware, validate(assignTaskSchema)],
  assignTask
);
