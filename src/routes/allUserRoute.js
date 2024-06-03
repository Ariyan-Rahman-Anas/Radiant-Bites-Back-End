const express = require("express")
const route = express.Router();
const {
  postingAnUserData,
  gettingUserData,
} = require("./../controller/allUserController");

//posting an item
route.post("/", postingAnUserData)

//getting all items
route.get("/", gettingUserData);

module.exports = route;