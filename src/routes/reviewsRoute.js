const express = require("express");
const route = express.Router();
const {
  postingAReview,
  getAllReviews,
  deletingAnItem,
} = require("./../controller/reviewsController");

//posting a review
route.post("/", postingAReview)


//getting all reviews
route.get("/", getAllReviews)

// deleting an item
route.delete("/:id", deletingAnItem);

module.exports = route