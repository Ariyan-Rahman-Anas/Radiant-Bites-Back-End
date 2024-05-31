const ItemModel = require("./../model/AllItems");
const cloudUploader = require("./cloudUploader");
const cloudinary = require("cloudinary").v2; 
// const { cloudUploader } = require("./cloudUtils");



//posting item
// const postingItem = async (req, res) => {
  
//   const rowBase = Buffer.from(req?.file?.buffer).toString("base64");
//   const base64 = "data:" + req?.file?.mimetype + ";base64," + rowBase;
//   console.log(req.file)

//   const { foodCategory, name, price, recipe, details, image } = req.body;

//   try {
//     cloudinary.config({
//       cloud_name: process.env.CLOUDINARY_NAME,
//       api_key: process.env.CLOUDINARY_API,
//       api_secret: process.env.CLOUDINARY_SECRET_KEY,
//     });

//     const imageCloudiConfig = await cloudinary.uploader.upload(base64)
    
//     const item = await ItemModel.create({
//       foodCategory,
//       name,
//       price,
//       recipe,
//       details,
//       image: imageCloudiConfig.secure_url,
//     });
//     console.log("item is :", item )
//     return res.status(201).json({
//       message: "Item posted",
//     });
//   } catch (error) {
//     console.log("error occurred: ", error);
//   }
// };

const postingItem = async (req, res) => {
  console.log(req.body)
  const { foodCategory, name, price, recipe, details, image } = req.body;
  const file = req.file;
  if (!file) return res.status(400).send("Please enter image !");
  try {
    // file validation and encode to base64
    const img_res = await cloudUploader(file);
    // add new item with image
    const item = await ItemModel.create({
      foodCategory,
      name,
      price,
      recipe,
      details,
      image: img_res.secure_url,
    });
    return res.status(201).json({
      message: "Item posted",
    });
  } catch (error) {
    console.log("error occurred: ", error);
  }
};


//single item
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

//all items
const getAllItems = async (req, res) => {
  try {
    const result = await ItemModel.find();
    res.status(200).json({
      totalItems: result.length,
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

//finding a dish by food category
const findingByCategory = async (req, res) => {
  const { category } = req.params;
  try {
    const categoryItems = await ItemModel.find({ foodCategory: category });
    return res.status(200).json({
      totalItemsInThisCategory: categoryItems.length,
      data: categoryItems,
    });
  } catch (error) {
    return res.status(400).send(error);
  }
};


module.exports = {
  postingItem,
  getSingleItem,
  getAllItems,
  findingByCategory
};