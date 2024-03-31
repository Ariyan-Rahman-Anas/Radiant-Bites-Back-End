const ItemModel = require("./../model/AllItems");
const cloudinary = require("cloudinary").v2; 
// const cloudinaryConfig = require("./../config/cloudinary") 

DB_URI = `mongodb+srv://Radiant-Bites:112233445566@cluster0.toh0ohl.mongodb.net/radiant-bites?retryWrites=true&w=majority&appName=Cluster0`;

//posting item
const postingItem = async (req, res) => {
  //   items.push(req.body);
  // console.log(req.file)
  
  const rowBase = Buffer.from(req?.file?.buffer).toString("base64");
  const base64 = "data:" + req?.file?.mimetype + ";base64," + rowBase;

  //   res.json({ message: "item posted successfully." });
  const { foodCategory, name, price, recipe, details, image } = req.body;


  try {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_API,
      api_secret: process.env.CLOUDINARY_SECRET_KEY,
    });

    const imageCloudiConfig = await cloudinary.uploader.upload(base64)
    
    const item = await ItemModel.create({
      foodCategory,
      name,
      price,
      recipe,
      details,
      image: imageCloudiConfig.secure_url,
    });
    console.log("item is :", item )
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
    res.json({ itemFindingById });
  } catch (error) {
    console.log(error);
  }
};

//all items
const getAllItems = async (req, res) => {
  try {
    const result = await ItemModel.find();
    res.status(201).json({
      totalItems: result.length,
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

//finding a dish by food category
// const findByFoodCategory = async (req, res) => {
//   let query = {};
//   try {
//     if (req?.query?.foodCategory) {
//       query = { foodCategory: req?.query?.foodCategory };
//     }
//     const itemFindingByCategory = await ItemModel.find(query);
//     res.json({ itemFindingByCategory });
//   } catch (error) {
//     console.log(error);
//   }
// }


// Function to fetch chicken items
const FindingByCategory = async (req, res) => {
  const { category } = req.params;
  console.log("category is: ", category)
  try {
    // const data = await ItemModel.find({ foodCategory: category });
    return res.status(200).send("trying");
  } catch (error) {
    return res.status(400).send(error);
  }
};


module.exports = {
  postingItem,
  getSingleItem,
  getAllItems,
  FindingByCategory
  // findByFoodCategory
  // getChickenItems
};