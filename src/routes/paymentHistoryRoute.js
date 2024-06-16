const express = require("express");
const route = express.Router();

const {
  postingAHistory,
  gettingAllHistory,
} = require("../controller/paymentHistoryController");

//posting a history
route.post("/", postingAHistory);

//getting a history
route.get("/", gettingAllHistory);

module.exports = route;