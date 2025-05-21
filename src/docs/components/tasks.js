/**
 * @openapi
 * /api/v1/tasks:
 *   post:
 *     tags: [Tasks]
 *     summary: Create a new task
 *     security:
 *       - BearerAuth: []
 *     description: Create a new task (requires TeamLead role)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - teamId
 *             properties:
 *               title:
 *                 type: string
 *                 example: Implement user authentication
 *               description:
 *                 type: string
 *                 example: Add JWT-based authentication system
 *               deadline:
 *                 type: string
 *                 format: date-time
 *                 example: "2025-06-01T00:00:00Z"
 *               requiredSkills:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["NodeJS", "Express", "JWT"]
 *               assignedTo:
 *                 type: string
 *                 description: User ID of the assignee (optional)
 *               teamId:
 *                 type: string
 *                 description: Team ID this task belongs to
 *     responses:
 *       201:
 *         description: Task created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       400:
 *         $ref: '#/components/responses/ValidationError'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       403:
 *         description: User must be a TeamLead to create tasks
 *
 * /api/v1/tasks/status:
 *   put:
 *     tags: [Tasks]
 *     summary: Update task status
 *     security:
 *       - BearerAuth: []
 *     description: Update the status of a task (available to task assignee)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - taskId
 *               - status
 *             properties:
 *               taskId:
 *                 type: string
 *                 description: ID of the task
 *               status:
 *                 type: string
 *                 enum: [Pending, InProgress, Completed]
 *     responses:
 *       200:
 *         description: Task status updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       400:
 *         $ref: '#/components/responses/ValidationError'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       404:
 *         $ref: '#/components/responses/NotFoundError'
 *
 * /api/v1/tasks/assign:
 *   post:
 *     tags: [Tasks]
 *     summary: Assign task to user
 *     security:
 *       - BearerAuth: []
 *     description: Assign a task to a team member (requires TeamLead role)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - taskId
 *               - userId
 *             properties:
 *               taskId:
 *                 type: string
 *                 description: ID of the task
 *               userId:
 *                 type: string
 *                 description: ID of the user to assign the task to
 *     responses:
 *       200:
 *         description: Task assigned successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       400:
 *         $ref: '#/components/responses/ValidationError'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       403:
 *         description: Only TeamLead can assign tasks
 *       404:
 *         description: Task or user not found
 */
