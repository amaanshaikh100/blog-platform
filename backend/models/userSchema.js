const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    minLength: 4,
    max: 20,
    required: [true, "A user must have a username."],
  },
  email: {
    type: String,
    trim: true,
    required: [true, "A user must have an email."],
  },
  password: {
    type: String,
    min: 6,
    max: 12,
    required: [true, "A user must have a password."],
  },
  passwordConfirm: {
    type: String,
    required: [true, "A user must have a password."],
  },
  passwordChangedAt: Date,
});

const User = mongoose.Model("User", userSchema);

module.exports = User;
