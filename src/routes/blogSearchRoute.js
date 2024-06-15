const express = require("express");
const route = express.Router();
const blogSearchController = require("./../controller/blogSearchController");

// Route for search
route.get("/", blogSearchController.blogSearch);

module.exports = route;