const express = require("express")
const route = express.Router();
const { makePayment } = require("./../controller/paymentController");

//making a payment
route.use("/", makePayment);

module.exports =route