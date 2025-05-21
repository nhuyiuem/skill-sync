import { Router } from "express";
import { register, login } from "../controllers/authController.js";
import { validate } from "../middleware/validateMiddleware.js";
import { authSchema } from "../schemas/authSchema.js";
export const authRoute = Router();

authRoute.post("/register", validate(authSchema), register);
authRoute.post("/login", validate(authSchema), login);
