const mongoose = require("mongoose");

const paymentHistorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    method: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    transactionId: {
      type: String,
      required: true,
    },
    itemNames: {
      type: String,
      required: true,
    },
    itemPrices: {
      type: String,
      required: true,
    },
    quantity: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const paymentHistoryModel = mongoose.model("paymentsHistory", paymentHistorySchema);
module.exports = paymentHistoryModel;