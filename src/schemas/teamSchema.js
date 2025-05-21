import Joi from "joi";

export const createTeamSchema = Joi.object({
  name: Joi.string().min(1).required(),
  goal: Joi.string().allow("").optional(),
});

export const inviteMemberSchema = Joi.object({
  teamId: Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .required()
    .messages({ "string.pattern.base": "Invalid MongoDB ObjectId" }),
  email: Joi.string().email().required(),
});

export const assignRoleSchema = Joi.object({
  teamId: Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .required()
    .messages({ "string.pattern.base": "Invalid MongoDB ObjectId" }),
  userId: Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .required()
    .messages({ "string.pattern.base": "Invalid MongoDB ObjectId" }),
  role: Joi.string().valid("Normal", "TeamLead").required(),
});
