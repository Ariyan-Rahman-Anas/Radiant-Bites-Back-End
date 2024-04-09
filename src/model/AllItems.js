const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    foodCategory: {
      type: String,
      enum: [
        "chefSpecial",
        "todayOffer",
        "bdTraditional",
        "appetizers",
        "desserts",
        "beef",
        "mutton",
        "chicken",
        "salads",
      ],
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