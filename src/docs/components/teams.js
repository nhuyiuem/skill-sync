/**
 * @openapi
 * /api/v1/teams:
 *   post:
 *     tags: [Teams]
 *     summary: Create a new team
 *     security:
 *       - BearerAuth: []
 *     description: Create a new team (requires TeamLead role)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 example: Development Team
 *               goal:
 *                 type: string
 *                 example: Deliver high-quality software solutions
 *     responses:
 *       201:
 *         description: Team created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Team'
 *       400:
 *         $ref: '#/components/responses/ValidationError'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       403:
 *         description: User must be a TeamLead to create a team
 *
 * /api/v1/teams/invite:
 *   post:
 *     tags: [Teams]
 *     summary: Invite member to team
 *     security:
 *       - BearerAuth: []
 *     description: Invite a user by email to join a team (requires TeamLead role)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - teamId
 *               - email
 *             properties:
 *               teamId:
 *                 type: string
 *                 description: ID of the team
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Email of the user to invite
 *     responses:
 *       200:
 *         description: User invited successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Team'
 *       400:
 *         $ref: '#/components/responses/ValidationError'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       403:
 *         description: Only TeamLead can invite members
 *       404:
 *         description: Team not found or user not found
 *
 * /api/v1/teams/assign-role:
 *   post:
 *     tags: [Teams]
 *     summary: Assign role to team member
 *     security:
 *       - BearerAuth: []
 *     description: Assign a role to a team member (requires TeamLead role)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - teamId
 *               - userId
 *               - role
 *             properties:
 *               teamId:
 *                 type: string
 *                 description: ID of the team
 *               userId:
 *                 type: string
 *                 description: ID of the user
 *               role:
 *                 type: string
 *                 enum: [Normal, TeamLead]
 *                 description: Role to assign to the user
 *     responses:
 *       200:
 *         description: Role assigned successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Team'
 *       400:
 *         $ref: '#/components/responses/ValidationError'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       403:
 *         description: Only TeamLead can assign roles
 *       404:
 *         description: Team or user not found
 */
