const express = require("express");
const route = express.Router();

const {
  postingAHistory,
  gettingHistoryByQuery,
  gettingAllHistory,
  deleteAHistory,
} = require("../controller/paymentHistoryController");

//posting a history
route.post("/", postingAHistory);

//getting a history
route.get("/query", gettingHistoryByQuery);

//getting all history
route.get("/", gettingAllHistory);

//deleting a history
route.delete("/:id", deleteAHistory);

module.exports = route;