const mongoose = require("mongoose")

const subscriberSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const subscriberModel = mongoose.model("subscribes", subscriberSchema)
module.exports = subscriberModel;