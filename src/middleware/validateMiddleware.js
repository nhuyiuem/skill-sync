import { logger } from "../utils/logger.js";

export const validate = (schema) => {
  return async (req, res, next) => {
    try {
      const validated = await schema.validateAsync(req.body, {
        abortEarly: false,
      });
      req.body = validated;
      next();
    } catch (error) {
      logger.error("Validation error:", error);
      res
        .status(400)
        .json({ message: "Validation failed", errors: error.details });
    }
  };
};
