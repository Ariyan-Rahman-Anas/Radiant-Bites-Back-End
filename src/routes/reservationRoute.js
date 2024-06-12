const express = require("express");
const route = express.Router();
const {
  postingAReservation,
  gettingAllReservation,
} = require("./../controller/reservationController");

//posting a review
route.post("/", postingAReservation);

//getting all reservations
route.get("/", gettingAllReservation);

module.exports = route;