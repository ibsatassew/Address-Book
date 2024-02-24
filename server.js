const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const bodyParser = require("body-parser");
const contactsRouter = require("./routes/contacts");

const app = express();
const PORT = process.env.PORT || 3000;

// Swagger options
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Address Book API",
      version: "1.0.0",
      description: "API for managing contacts in an address book",
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use(bodyParser.json());

// Routes
app.use("/contacts", contactsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
