/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         _id:
 *           type: string
 *           description: Auto-generated MongoDB ID
 *         username:
 *           type: string
 *           description: User's username (optional)
 *         email:
 *           type: string
 *           format: email
 *           description: User's email address
 *         password:
 *           type: string
 *           format: password
 *           description: User's password (hashed)
 *         role:
 *           type: string
 *           enum: [Normal, TeamLead]
 *           default: Normal
 *         avatar:
 *           type: string
 *           description: URL to user's avatar image
 *
 *     Team:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         _id:
 *           type: string
 *         name:
 *           type: string
 *           description: Team name
 *         goal:
 *           type: string
 *           description: Team's goal or objective
 *         members:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 description: User ID of the team member
 *               role:
 *                 type: string
 *                 enum: [Normal, TeamLead]
 *                 description: Role of the member in the team
 *
 *     Task:
 *       type: object
 *       required:
 *         - title
 *         - teamId
 *       properties:
 *         _id:
 *           type: string
 *         title:
 *           type: string
 *         description:
 *           type: string
 *         status:
 *           type: string
 *           enum: [Pending, InProgress, Completed]
 *           default: Pending
 *         deadline:
 *           type: string
 *           format: date-time
 *         requiredSkills:
 *           type: array
 *           items:
 *             type: string
 *           description: List of required skills for the task
 *         assignedTo:
 *           type: string
 *           description: User ID of assigned person (optional)
 *         teamId:
 *           type: string
 *           description: Team ID this task belongs to
 *
 *     Error:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *         status:
 *           type: number
 *         stack:
 *           type: string
 */
