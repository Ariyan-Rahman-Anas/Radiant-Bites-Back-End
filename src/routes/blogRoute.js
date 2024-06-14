const express = require("express");
const route = express.Router();
const multer = require("multer");
const {
  postingABlog,
  gettingAllBlogs,
} = require("./../controller/BlogController");

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

// Getting all blogs
route.get("/", gettingAllBlogs);

module.exports = route;