const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: [true, "Comment cannot be empty"],
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
});

const Comment = mongoose.Model("Comment", commentSchema);

module.exports = Comment;
