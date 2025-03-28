const express = require("express");
const commentController = require("../controllers/commentController");
const authController = require("../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(commentController.getAllComments)
  .post(commentController.setBlogUserIds, commentController.createComment);

router
  .route("/:id")
  .get(commentController.getComment)
  .patch(commentController.createComment)
  .delete(commentController.deleteComment);

module.exports = router;
