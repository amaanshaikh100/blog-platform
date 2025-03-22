const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const blogRouter = require("./routes/blogRoutes");
const globalErrorHandler = require("./controllers/errorController");
const AppError = require("./utils/appError");

const app = express();

// Read .env
dotenv.config({ path: "./config.env" });

// Middlewares
app.use(express.json());
app.use(morgan("dev"));

// Endpoints
app.use("/api/v1/blogs", blogRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find the ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
