const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const allItemsRouter = require("./routes/allItems");
const app = express();
const port = process.env.PORT || 5000;

//basic middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.urlencoded({ extended: false }));

app.use("/allItems", allItemsRouter);

//basic route
app.get("/", (req, res) => {
  res.send({ message: "Radiant Bites server application is running...." });
});

// server testing
app.listen(port, () => {
  console.log("Radiant Bites app is running on: ", port);
    // .connect("mongodb://localhost:27017/All-Items", { useNewUrlParser: true })
  mongoose.connect(`${process.env.DB_URI}`)
    .then((data) => {
      console.log("MongoDB is connected!");
    })
    .catch((err) => {
      console.log("MongoDB connecting err is :", err);
    });
});