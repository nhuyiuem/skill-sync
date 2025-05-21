import Joi from "joi";

export const createTaskSchema = Joi.object({
  title: Joi.string().min(1).required(),
  description: Joi.string().allow("").optional(),
  deadline: Joi.date().iso().optional(),
  requiredSkills: Joi.array().items(Joi.string()).optional(),
  assignedTo: Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .optional()
    .messages({ "string.pattern.base": "Invalid MongoDB ObjectId" }),
  teamId: Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .required()
    .messages({ "string.pattern.base": "Invalid MongoDB ObjectId" }),
});

export const updateTaskStatusSchema = Joi.object({
  taskId: Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .required()
    .messages({ "string.pattern.base": "Invalid MongoDB ObjectId" }),
  status: Joi.string().valid("Pending", "InProgress", "Completed").required(),
});

export const assignTaskSchema = Joi.object({
  taskId: Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .required()
    .messages({ "string.pattern.base": "Invalid MongoDB ObjectId" }),
  userId: Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .required()
    .messages({ "string.pattern.base": "Invalid MongoDB ObjectId" }),
});
