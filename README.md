# SkillSync - Team Collaboration & Skill Management Platform

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Node.js Version](https://img.shields.io/badge/node.js-18.x-green.svg)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-5.x-orange.svg)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.x-brightgreen.svg)](https://www.mongodb.com/)

A modern team collaboration platform that helps organizations manage skills, coordinate teams, and track tasks effectively. Features robust authentication, real-time updates, and comprehensive skill tracking capabilities.

---

## 🌟 Key Features

- 🔐 **Advanced Authentication** - Secure JWT-based authentication with role-based access control
- 👥 **Team Management** - Create and manage teams with designated team leads
- 📊 **Skill Tracking** - Track and manage team member skills and expertise
- ✅ **Task Management** - Assign and monitor tasks based on team members' skills
- 🖼️ **Profile Management** - Custom user profiles with avatar support
- 🛡️ **Enterprise Security** - Rate limiting, helmet protection, and comprehensive error handling
- 📝 **Input Validation** - Schema-based validation using Joi
- 📊 **Logging System** - Advanced logging with Winston for better monitoring

## 🧰 Tech Stack

| Category       | Technology     | Version | Purpose                                  |
| -------------- | -------------- | ------- | ---------------------------------------- |
| Core           | Node.js        | 18.x    | Modern JavaScript runtime environment    |
| Framework      | Express.js     | 5.1.0   | Fast, unopinionated web framework        |
| Database       | MongoDB        | 6.x     | NoSQL database for flexible data storage |
| ODM            | Mongoose       | 8.15.0  | Elegant MongoDB object modeling          |
| Authentication | JSON Web Token | 9.0.2   | Secure, stateless authentication         |
| Validation     | Joi            | 17.13.3 | Schema validation and sanitization       |
| File Handling  | Multer         | 2.0.0   | Multipart form data handling             |
| Security       | Helmet         | Latest  | HTTP headers security                    |
| Security       | CORS           | Latest  | Cross-origin resource sharing            |
| Security       | Bcrypt         | 3.0.2   | Password hashing and salting             |
| Logging        | Winston        | 3.17.0  | Advanced application logging             |
| Development    | Nodemon        | 3.1.0   | Hot-reload for development               |

## 🚀 Installation Guide

```bash
# Clone the repository
git clone https://github.com/Sovitou/skill-sync.git
cd skill-sync

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env
# Edit .env with your credentials:
# - MONGO_URI=your_mongodb_connection_string
# - JWT_SECRET=your_secure_jwt_secret

# Start development server
npm run dev
```

## 📚 API Documentation

### Authentication

- POST `/api/v1/auth/register` - Register new user
- POST `/api/v1/auth/login` - User login

### User

- GET `/api/v1/user/profile` - Get user profile
- PUT `/api/v1/user/profile` - Update user profile

### Team

- POST `/api/v1/team` - Create new team
- GET `/api/v1/team` - List teams
- PUT `/api/v1/team/:id` - Update team

### Task

- POST `/api/v1/task` - Create new task
- GET `/api/v1/task` - List tasks
- PUT `/api/v1/task/:id` - Update task status

## 🏗️ Project Structure

```bash
skill-sync/
├── src/                           # Source code directory
│   ├── config/                    # Configuration files
│   │   ├── auth.js               # Authentication configuration
│   │   └── db.js                 # Database configuration
│   │
│   ├── controllers/              # Request handlers
│   │   ├── authController.js     # Authentication logic
│   │   ├── taskController.js     # Task management
│   │   ├── teamController.js     # Team operations
│   │   └── userController.js     # User management
│   │
│   ├── middleware/               # Custom middleware
│   │   ├── authMiddleware.js     # JWT verification
│   │   ├── errorMiddleware.js    # Error handling
│   │   ├── roleMiddleware.js     # Role-based access control
│   │   └── validateMiddleware.js # Request validation
│   │
│   ├── models/                   # Database models
│   │   ├── taskModel.js         # Task schema & model
│   │   ├── teamModel.js         # Team schema & model
│   │   └── userModel.js         # User schema & model
│   │
│   ├── routes/                   # API routes
│   │   ├── authRoute.js         # Authentication endpoints
│   │   ├── taskRoute.js         # Task endpoints
│   │   ├── teamRoute.js         # Team endpoints
│   │   └── userRoute.js         # User endpoints
│   │
│   ├── schemas/                  # Validation schemas
│   │   ├── authSchema.js        # Auth validation rules
│   │   ├── taskSchema.js        # Task validation
│   │   ├── teamSchema.js        # Team validation
│   │   └── userSchema.js        # User validation
│   │
│   ├── services/                 # Business logic layer
│   │   ├── authService.js       # Auth business logic
│   │   ├── taskService.js       # Task operations
│   │   └── teamService.js       # Team operations
│   │
│   ├── utils/                    # Utility functions
│   │   ├── logger.js            # Winston logger setup
│   │   └── multerConfig.js      # File upload config
│   │
│   ├── app.js                    # Express app setup
│   └── server.js                 # Server entry point
│
├── uploads/                       # File upload directory
│   └── avatars/                  # User avatar storage
│
├── logs/                         # Application logs
│   ├── error.log                # Error logs
│   └── combined.log             # All logs
│
├── package.json                  # Project dependencies
├── .env                         # Environment variables
├── .env.example                 # Environment template
└── README.md                    # Project documentation
```

## 🛡️ Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Rate limiting for auth routes
- Helmet security headers
- CORS protection
- Input validation
- File upload restrictions
- Error handling middleware

## 🧪 Development Features

- Hot reload with Nodemon
- Environment configuration
- Winston logging system
- Structured error handling
- Modular architecture
- Middleware-based validation

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Developed with ❤️ by Khem Sovitou
