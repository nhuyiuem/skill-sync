import Joi from "joi";

export const updateProfileSchema = Joi.object({
  username: Joi.string(),
  bio: Joi.string().allow(""),
  skills: Joi.string(),
  role: Joi.string().valid("Normal", "TeamLead"),
});
