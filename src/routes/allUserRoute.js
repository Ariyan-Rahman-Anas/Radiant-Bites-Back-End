const express = require("express")
const route = express.Router();
const {
  postingAnUserData,
  gettingUserData,
  deletingAnUser
} = require("./../controller/allUserController");

//posting an user
route.post("/", postingAnUserData)

//getting all user
route.get("/", gettingUserData);

//deleting an user
route.delete("/:id", deletingAnUser);

module.exports = route;