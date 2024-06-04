const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      // required: true,
    },
    email: {
      type: String,
      // required: true,
    },
    profession: {
      type: String,
      // required: true,
    },
    reviewingDateIs: {
      type: String,
    },
    comment: {
      type: String,
      // required: true,
    },
    rate: {
      type: Number,
      // required: true,
    },
    userImage: {
      type: String,
    },
  },
  { timestamps: true, versionKey: false }
);

const reviewModel = mongoose.model("Reviews", reviewSchema);
module.exports = reviewModel;