const express = require("express")
const route = express.Router();
const {
  postingAnUserData,
  gettingUserData,
  getUsersByRole,
  updatingUserRole,
  deletingAnUser,
} = require("./../controller/allUserController");

//posting an user
route.post("/", postingAnUserData)

//getting all user
route.get("/", gettingUserData);

// Getting users by role
route.get("/role/:role", getUsersByRole); 

//updating an user role
route.patch("/:id", updatingUserRole);

//deleting an user
route.delete("/:id", deletingAnUser);

module.exports = route;