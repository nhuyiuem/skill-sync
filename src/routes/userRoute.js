import { Router } from "express";
import { updateProfile, getProfile } from "../controllers/userController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { upload } from "../utils/multerConfig.js";
import { validate } from "../middleware/validateMiddleware.js";
import { updateProfileSchema } from "../schemas/userSchema.js";

export const userRoute = Router();

userRoute.get("/profile", authMiddleware, getProfile);
userRoute.put(
  "/profile",
  [authMiddleware, upload.single("avatar"), validate(updateProfileSchema)],
  updateProfile
);
