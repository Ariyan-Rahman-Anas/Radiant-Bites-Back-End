const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    guests: {
      type: Number,
      required: true,
    },
    specialRequests: {
      type: String,
      required: true,
    },
    reserverPicture: {
      type: String,
      // required: true,
    },
  },
  { timestamps: true, versionKey: false }
);
const reservationModel = mongoose.model("reservations", reservationSchema);
module.exports = reservationModel;