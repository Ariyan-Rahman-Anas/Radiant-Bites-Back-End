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


const getSingleItem = async (req, res) => {
  const { id } = req.params
  try {
    const itemFindingById = await OrderedItemModel.findById(id)
    if (!itemFindingById) {
      return res.status(404).json({error:"item not found!"})
    }
    res.status(200).json({foundedItemIs: itemFindingById })
  } catch (error) {
    console.error(`Error fetching ordered item with ID ${id}:`, error);
    res.status(500).json({ error: "Internal server error" });
  }
}


const getAllOrderedItems = async (req, res) => {
  const { loggedUserEmail } = req.query; // Assuming loggedUserEmail is passed as a query parameter
  try {
    let query = {};
    if (loggedUserEmail) {
      query = { loggedUserEmail }; // If loggedUserEmail is provided, filter by it
    }
    const result = await OrderedItemModel.find(query);
    res.status(200).json({
      totalItems: result.length,
      data: result,
    });
  } catch (error) {
    console.error("Error fetching ordered items:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

//deleting a single item
const deletingAnItem = async (req, res) => {
  const { id } = req.params
  try {
    const deletingItem = await OrderedItemModel.findByIdAndDelete(id)
    if (!deletingItem) {
      return res.status(404).json({error: "item not found"})
    }
    res.status(200).json({deletedItemIa: deletingItem})
  } catch (error) {
    console.log(`Error deleting item with ID ${id}:`, error);
    res.status(404).json({error: "Internal server error"})
  }
}


module.exports = {
  getSingleItem,
  getAllOrderedItems,
  postingAnOrder,
  deletingAnItem,
};