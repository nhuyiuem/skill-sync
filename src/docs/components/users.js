/**
 * @openapi
 * /api/v1/user/profile:
 *   get:
 *     tags: [Users]
 *     summary: Get user profile
 *     security:
 *       - BearerAuth: []
 *     description: Get the current user's profile information
 *     responses:
 *       200:
 *         description: User profile retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "60f7f4c3f8a2b814c8e7f9a5"
 *                 email:
 *                   type: string
 *                   format: email
 *                   example: john@example.com
 *                 username:
 *                   type: string
 *                   example: johndoe
 *                 bio:
 *                   type: string
 *                   example: "Full-stack developer"
 *                 role:
 *                   type: string
 *                   example: user
 *                 avatar:
 *                   type: string
 *                   example: "/uploads/avatar.png"
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       404:
 *         $ref: '#/components/responses/NotFoundError'
 *
 *   patch:
 *     tags: [Users]
 *     summary: Partially update user profile
 *     security:
 *       - BearerAuth: []
 *     description: Update specific fields of the current user's profile
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: johndoe
 *               bio:
 *                 type: string
 *                 example: Passionate about clean code.
 *               skills:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["JavaScript", "Node.js"]
 *               role:
 *                 type: string
 *                 enum: [Normal, TeamLead]
 *                 example: TeamLead
 *               avatar:
 *                 type: string
 *                 format: binary
 *                 description: Profile picture file
 *     responses:
 *       200:
 *         description: Profile updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 email:
 *                   type: string
 *                 username:
 *                   type: string
 *                 bio:
 *                   type: string
 *                 role:
 *                   type: string
 *                 avatar:
 *                   type: string
 *                 skills:
 *                   type: array
 *                   items:
 *                     type: string
 *       400:
 *         $ref: '#/components/responses/ValidationError'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       404:
 *         $ref: '#/components/responses/NotFoundError'
 */
