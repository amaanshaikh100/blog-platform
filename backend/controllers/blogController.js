const Blog = require("../models/blogSchema");
const catchAsync = require("../utils/catchAsync");
const factory = require("../controllers/handlerFactory");

exports.getAllBlogs = factory.getAll(Blog);
exports.getBlog = factory.getOne(Blog);
exports.createBlog = factory.createOne(Blog);
exports.updateBlog = factory.updateOne(Blog);
exports.deleteBlog = factory.deleteOne(Blog);
