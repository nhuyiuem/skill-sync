import { Router } from "express";
import { register, login } from "../controllers/authController.js";
import { validate } from "../middleware/validateMiddleware.js";
import { loginSchema, registerSchema } from "../schemas/authSchema.js";
export const authRoute = Router();

authRoute.post("/register", validate(registerSchema), register);
authRoute.post("/login", validate(loginSchema), login);
