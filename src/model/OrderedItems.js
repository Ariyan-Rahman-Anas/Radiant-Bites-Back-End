const mongoose = require("mongoose");

const orderedItemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    loggedUserEmail: {
      type: String,
      required: true,
    },
    totalItems: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    image: {
      type: String, // Assuming the image will be stored as a URL or file path
    },
  },
  { timestamps: true, versionKey: false }
);

const orderedItemModel = mongoose.model("OrderedDishes", orderedItemSchema);
module.exports = orderedItemModel;