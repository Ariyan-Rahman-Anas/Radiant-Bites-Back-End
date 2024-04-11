const express = require("express");
const route = express.Router();
const {
  postingAnOrder,
  getSingleItem,
  getAllOrderedItems,
  deletingAnItem,
} = require("./../controller/orderedItemsController");


//posting an item
route.post("/", postingAnOrder)

//getting a single item
route.get("/:id", getSingleItem)

//getting all items
route.get("/", getAllOrderedItems)

// deleting an item
route.delete("/:id", deletingAnItem);

module.exports = route