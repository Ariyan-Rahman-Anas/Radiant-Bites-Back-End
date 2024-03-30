const express = require("express");
const multer = require("multer");
const storage = require("..")
// const upload = multer({ storage });
const {
  postingItem,
  getSingleItem,
  getAllItems,
} = require("./../controller/allItemsController");
const route = express.Router();

// const storageFunc = multer({
//   storage: multer.memoryStorage,
//   filename: (req, file) => {
//     callback(null, `${Date.now()}-${file.originalname}`);
//   },
// });



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


// const upload = multer({ storage });

//post a item
route.post("/", upload.single("image"), postingItem);

//getting all items
route.get("/", getAllItems);

//getting a specific item by id
route.get("/:id", getSingleItem);

module.exports = route;
