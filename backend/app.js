const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

// Errors
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");

// Routers
const blogRouter = require("./routes/blogRoutes");
const userRouter = require("./routes/userRoutes");
const commentRouter = require("./routes/commentRoutes");

const app = express();

// Read .env
dotenv.config({ path: "./config.env" });

// Middlewares
app.use(express.json());
app.use(morgan("dev"));

// Endpoints
app.use("/api/v1/blogs", blogRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/comments", commentRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find the ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
