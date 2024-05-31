const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      // required: true,
    },
    profession: {
      type: String,
      // required: true,
    },
    todayDateIs: {
      type:String
    },
    comment: {
      type: String,
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