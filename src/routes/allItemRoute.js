const express = require("express");
const route = express.Router();
const multer = require("multer");
const {
  postingItem,
  getSingleItem,
  getAllItems,
  gettingItemsByQuery,
  findingByCategory,
  deletingAnItem,
} = require("../controller/allItemsController");

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { files: 10 }, // file limit
  fileFilter(req, file, callback) {
    if (file.mimetype.startsWith("image")) {
      callback(null, true);
    } else {
      callback(null, false);
    }
  },
});

//post a item
route.post("/", upload.single("image"), postingItem);

//getting all items
route.get("/", getAllItems);

//getting items by query with email
route.get("/query", gettingItemsByQuery);

//getting a specific item by id
route.get("/:id", getSingleItem);

//getting a specific item by food category
route.get("/menu/:category", findingByCategory)

//deleing an item
route.delete("/:id", deletingAnItem);

module.exports = route;