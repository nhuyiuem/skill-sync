import Joi from "joi";
import { updateProfile, getProfile } from "../controllers/userController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { upload } from "../utils/multerConfig.js";
import { validate } from "../middleware/validateMiddleware.js";

export const userRoute = Router();

const updateProfileSchema = Joi.object({
  bio: Joi.string().allow("").optional(),
  avatar: Joi.string().optional(),
});

userRoute.get("/profile", authMiddleware, getProfile);
userRoute.put(
  "/profile",
  [authMiddleware, upload.single("avatar"), validate(updateProfileSchema)],
  updateProfile
);
