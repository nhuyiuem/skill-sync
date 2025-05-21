import Joi from "joi";

export const updateProfileSchema = Joi.object({
  bio: Joi.string().allow("").optional(),
  avatar: Joi.string().optional(),
});
