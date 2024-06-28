const express = require("express");
const cors = require("cors");
const allItemsRouter = require("./src/routes/allItemRoute");
const orderedItemsRouter = require("./src/routes/orderedItems");
const reviewsRouter = require("./src/routes/reviewsRoute");
const allUserRouter = require("./src/routes/allUserRoute");
const reservationRouter = require("./src/routes/reservationRoute");
const subscriberRouter = require("./src/routes/subscriberRoute");
const blogRouter = require("./src/routes/blogRoute");
const blogSearchRouter = require("./src/routes/blogSearchRoute");
const paymentRouter = require("./src/routes/paymentRoute");
const paymentHistoryRoute = require("./src/routes/paymentHistoryRoute");

const app = express();
const port = process.env.PORT || 5000;
const db_config = require("./src/config/db_config");
require("dotenv").config();
db_config();

//basic middleware
app.use(express.json());
app.use(
  cors({
    // origin: "http://localhost:5173",
    origin: "https://radiant-bites.netlify.app",
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: false }));

app.use("/allItems", allItemsRouter);
app.use("/orderedItems", orderedItemsRouter);
app.use("/reviews", reviewsRouter);
app.use("/users", allUserRouter);
app.use("/reservations", reservationRouter);
app.use("/subscribers", subscriberRouter);
app.use("/blogs", blogRouter);
app.use("/search", blogSearchRouter);
app.use("/create-payment", paymentRouter);
app.use("/payment-history", paymentHistoryRoute);

//basic route
app.get("/", (req, res) => {
  res.send({ message: "Radiant Bites server application is running...." });
});

// server testing
app.listen(port, () => {
  console.log("Radiant Bites app is running on: ", "http://localhost:" + port);
});