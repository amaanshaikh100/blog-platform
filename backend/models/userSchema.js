const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    minLength: 4,
    max: 20,
    required: [true, "Please tell us your username."],
  },
  email: {
    type: String,
    required: [true, "Please tell us your email."],
    trim: true,
    unique: true,
    isLowercase: true,
    validate: [validator.isEmail, "Please provide a valid email."],
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  photo: { type: String, default: "default.jpg" },
  password: {
    type: String,
    min: 6,
    max: 12,
    required: [true, "Please provide a password."],
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password."],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "Passwords are not same.",
    },
  },
  passwordChangedAt: Date,
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
});

userSchema.methods.checkPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
