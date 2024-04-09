const express = require("express");
const route = express.Router();
const { postingAnOrder, getAllOrderedItems } = require("./../controller/orderedItemsController")


//posting an item
route.post("/", postingAnOrder)

//getting all items
route.get("/", getAllOrderedItems )

module.exports = route