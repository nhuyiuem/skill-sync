import { Router } from "express";
import { register, login } from "../controllers/authController.js";
import Joi from "joi";
import { validate } from "../middleware/validateMiddleware.js";
export const authRoute = Router();

const authSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

authRoute.post("/register", validate(authSchema), register);
authRoute.post("/login", validate(authSchema), login);
