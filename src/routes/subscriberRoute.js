const express = require("express")
const route = express.Router();

const {postingASubscriber,
    gettingAllSubscribers, } = require("./../controller/subscriberController")
  
//posting a review
route.post("/", postingASubscriber);

//getting all reservations
route.get("/", gettingAllSubscribers);

module.exports = route;