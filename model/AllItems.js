const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  foodCategory: String,
  name: String,
  price: Number,
  recipe: String,
  details: String,
  image: String,
});

const itemModel = mongoose.model("ItemModel", itemSchema);
module.exports = itemModel;
