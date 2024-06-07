const express = require("express");
const cors = require("cors");
const allItemsRouter = require("./src/routes/allItems");
const orderedItemsRouter = require("./src/routes/orderedItems");
const reviewsRouter =  require("./src/routes/reviewsRoute")
const allUserRouter =  require("./src/routes/allUserRoute")
const allAdminRouter =  require("./src/routes/adminRoute")
const app = express();
const port = process.env.PORT || 3000;
const db_config =  require("./src/config/db_config")
require("dotenv").config();
db_config()

//basic middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    // origin: "https://radiant-bites.netlify.app",
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: false }));

app.use("/allItems", allItemsRouter);
app.use("/orderedItems", orderedItemsRouter);
app.use("/reviews", reviewsRouter);
app.use("/users", allUserRouter);
app.use("/admins", allAdminRouter);

//basic route
app.get("/", (req, res) => {
  res.send({ message: "Radiant Bites server application is running...." });
});

// server testing
app.listen(port, () => {
  console.log("Radiant Bites app is running on: ", "http://localhost:"+port);
});