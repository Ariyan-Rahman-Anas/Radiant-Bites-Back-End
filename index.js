const express = require("express");
const cors = require("cors");
const allItemsRouter = require("./routes/allItems");
const app = express();
const port = process.env.PORT || 5000;
const db_config =  require("./config/db_config")
require("dotenv").config();
db_config()

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
  console.log("Radiant Bites app is running on: ", "http://localhost:"+port);
});