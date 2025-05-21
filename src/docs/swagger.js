import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "SkillSync API Documentation",
      version: "1.0.0",
      description:
        "API documentation for SkillSync - A skill management and team collaboration platform",
      contact: {
        name: "Khem Sovitou",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Development server",
      },
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        BearerAuth: [],
      },
    ],
  },
  apis: [
    "./src/routes/*.js",
    "./src/models/*.js",
    "./src/schemas/*.js",
    "./src/docs/components/*.js",
    "./src/docs/components/auth.js",
    "./src/docs/components/tasks.js",
    "./src/docs/components/teams.js",
    "./src/docs/components/users.js",
  ],
};

const specs = swaggerJsdoc(options);

export const swaggerDocs = (app, port) => {
  // Swagger Page
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

  // Docs in JSON format
  app.get("/api-docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(specs);
  });

  console.log(`📚 Swagger docs available at http://localhost:${port}/api-docs`);
};
