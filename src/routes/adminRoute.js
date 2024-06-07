const express = require("express");
const route = express.Router();
const {
  postingAnAdmin,
  gettingAdmins,
} = require("./../controller/adminsController");

//posting an user
route.post("/", postingAnAdmin)

//getting all user
route.get("/", gettingAdmins);

module.exports = route;