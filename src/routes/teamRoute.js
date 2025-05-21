import {
  createTeam,
  inviteMember,
  assignRole,
} from "../controllers/teamController.js";

import {
  createTeamSchema,
  inviteMemberSchema,
  assignRoleSchema,
} from "../schemas/teamSchema.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { roleMiddleware } from "../middleware/roleMiddleware.js";
import { validate } from "../middleware/validateMiddleware.js";
import { Router } from "express";

export const teamRoute = Router();

teamRoute.post(
  "/create",
  [authMiddleware, roleMiddleware, validate(createTeamSchema)],
  createTeam
);

teamRoute.post(
  "/invite",
  [authMiddleware, roleMiddleware, validate(inviteMemberSchema)],
  inviteMember
);

teamRoute.post(
  "/assign-role",
  [authMiddleware, roleMiddleware, validate(assignRoleSchema)],
  assignRole
);
