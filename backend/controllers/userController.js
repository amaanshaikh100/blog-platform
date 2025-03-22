const User = require("../models/userSchema");
const catchAsync = require("../utils/catchAsync");
const factory = require("../controllers/handlerFactory");

exports.getAllUsers = factory.getAll(User);
exports.getUser = factory.getOne(User);
exports.createUser = factory.createOne(User);
exports.updateUser = factory.updateOne(User);
exports.deleteUser = factory.deleteOne(User);
