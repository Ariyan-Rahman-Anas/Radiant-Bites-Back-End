const ItemModel = require("./../model/AllItems");
const cloudUploader = require("./cloudUploader");

//posting an item
const postingItem = async (req, res) => {
  const { authorName, email, foodCategory, name, price, recipe, details } =
    req.body;
  const file = req.file;
  console.log("file from all item is:", file);
  if (!file) return res.status(400).send("Please enter image !");
  try {
    // file validation and encode to base64
    const img_res = await cloudUploader(file);
    // add new item with image
    const anItem = await ItemModel.create({
      authorName,
      email,
      foodCategory,
      name,
      price,
      recipe,
      details,
      image: img_res.secure_url,
    });
    console.log("the new item is: ", anItem);
    return res.status(201).json({
      message: "Item posted",
    });
  } catch (error) {
    console.log("error occurred: ", error);
  }
};

//getting single item
const getSingleItem = async (req, res) => {
  const id = req.params.id;
  try {
    const itemFindingById = await ItemModel.findById(id);
    if (itemFindingById) {
      return res.json({ itemFindingById });
    }
    return res.status(400).send({ message: "Single item not found!" });
  } catch (error) {
    return res.status(400).send({ message: "Invalid single item id!" });
  }
};

//getting items by query
const gettingItemsByQuery = async (req, res) => {
  const { email } = req.query;
  try {
    let query = {};
    if (email) {
      query = { email };
    }
    const data = await ItemModel.find(query);
    if (data.length > 0) {
      return res.json({ totalDishes: data.length, data });
    }
    return res
      .status(404)
      .send({ message: "No dish found for the given email." });
  } catch (error) {
    return res
      .status(400)
      .send({ message: "Invalid request.", error: error.message });
  }
}

//getting all items
const getAllItems = async (req, res) => {
  try {
    const data = await ItemModel.find();
    res.status(200).json({
      totalItems: data.length,
      data,
    });
  } catch (error) {
    console.log("error with fetching all items ", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

//finding a dish by food category
const findingByCategory = async (req, res) => {
  const { category } = req.params;
  try {
    const data = await ItemModel.find({ foodCategory: category });
    return res.status(200).json({
      totalItemsInThisCategory: data.length,
      data,
    });
  } catch (error) {
    return res.status(400).send(error);
  }
};

module.exports = {
  postingItem,
  getSingleItem,
  getAllItems,
  gettingItemsByQuery,
  findingByCategory,
};