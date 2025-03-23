const express = require("express");
const blogController = require("../controllers/blogController");
const authController = require("../controllers/authController");

const commentRouter = require("../routes/commentRoutes");

const router = express.Router();

router.use("/:blogId/comments", commentRouter);

router
  .route("/")
  .get(authController.protect, blogController.getAllBlogs)
  .post(blogController.createBlog);

router
  .route("/:id")
  .get(blogController.getBlog)
  .patch(blogController.updateBlog)
  .delete(blogController.deleteBlog);

module.exports = router;
