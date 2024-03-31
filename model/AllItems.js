const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    foodCategory: {
      type: String,
      enum: ["chicken", "salads"],
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    recipe: {
      type: String,
      required: true,
    },
    details: {
      type: String,
    },
    image: {
      type: String, // Assuming the image will be stored as a URL or file path
    },
  },
  { timestamps: true, versionKey: false }
);

const itemModel = mongoose.model("Dishes", itemSchema);
module.exports = itemModel;

// const mongoose = require("mongoose");

// const foodSchema = new mongoose.Schema({
//   foodCategory: {
//     type: String,
//     required: true,
//   },
//   name: {
//     type: String,
//     required: true,
//   },
//   price: {
//     type: Number,
//     required: true,
//   },
//   recipe: {
//     type: String,
//     required: true,
//   },
//   details: {
//     type: String,
//   },
//   image: {
//     type: String, // Assuming the image will be stored as a URL or file path
//   },
// });

// const Food = mongoose.model("Food", foodSchema);

// module.exports = Food;
