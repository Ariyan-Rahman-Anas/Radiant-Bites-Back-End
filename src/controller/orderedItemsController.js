const OrderedItemModel = require("./../model/OrderedItems")


//posting an item
const postingAnOrder = async (req, res) => {
  const { name, loggedUserEmail, totalItems, totalPrice, image } = req.body
  try {
    const orderedItem = await OrderedItemModel.create({
      name,
      loggedUserEmail,
      totalItems,
      totalPrice,
      image
    })
    console.log("ordered item is: ", orderedItem)
    return res.status(201).json({message: "Ordered successful"})
  } catch (error) {
    console.log("an error occurred", error)
  }
}


//get all of ordered items
const getAllOrderedItems = async (req, res) => {
  try {
    const result = await OrderedItemModel.find();
    res.status(200).json({
      totalItems: result.length,
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllOrderedItems,
  postingAnOrder
}