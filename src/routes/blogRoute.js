const express = require("express");
const route = express.Router();
const multer = require("multer");
const {
  postingABlog,
  gettingSingleBlog,
  gettingAllBlogs,
  gettingBlogsByQuery,
  gettingBlogByCategory,
} = require("../controller/blogController");

// Multer configuration
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { files: 10 }, // file limit
  fileFilter(req, file, callback) {
    if (file.mimetype.startsWith("image")) {
      callback(null, true);
    } else {
      callback(null, false);
    }
  },
});

// Posting a blog with file upload
route.post("/", upload.single("featuredImage"), postingABlog);

//getting single blog
route.get("/:id", gettingSingleBlog);

// Getting all blogs
route.get("/", gettingAllBlogs);

// Getting all blogs
route.get("/blog/query", gettingBlogsByQuery);

//getting a specific item by food category
route.get("/blog-category/:category", gettingBlogByCategory);

module.exports = route;