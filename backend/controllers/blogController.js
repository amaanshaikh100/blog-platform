const Blog = require("../models/blogSchema");
const catchAsync = require("../utils/catchAsync");

exports.getAllBlogs = catchAsync(async (req, res, next) => {
  const allBlogs = await Blog.find();

  res.status(200).json({
    status: "success",
    results: allBlogs.length,
    data: {
      blogs: allBlogs,
    },
  });
});

exports.getBlog = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const blog = await Blog.findById(id);

  res.status(200).json({
    status: "success",
    data: {
      blog,
    },
  });
});

exports.createBlog = catchAsync(async (req, res, next) => {
  const newBlog = await Blog.create(req.body);

  res.status(200).json({
    status: "success",
    data: {
      blog: newBlog,
    },
  });
});

exports.updateBlog = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const blog = await Blog.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: "success",
    data: {
      blog,
    },
  });
});

exports.deleteBlog = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const blog = await Blog.findByIdAndDelete(id);

  res.status(204).json({
    status: "success",
    data: null,
  });
});
