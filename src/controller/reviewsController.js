const ReviewModel = require("./../model/ReviewModel")

//posting a review
const postingAReview = async (req, res) => {
  const { name, profession, comment, userImage, reviewingDateIs, email, rate } = req.body;
  try {
    const aReview = await ReviewModel.create({
      name,
      profession,
      comment,
      userImage,
      email, 
      rate,
      reviewingDateIs,
    });
    console.log("latest review is: ", aReview);
    return res.status(201).json({ message: "Reviewed successful" });
  } catch (error) {
    console.log("an error occurred", error);
  }
};


const getAllReviews = async (req, res) => {
  try {
    const result = await ReviewModel.find();
    res.status(200).json({
      totalReviews: result.length,
      data: result,
    });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

//deleting a single item
// const deletingAnItem = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const deletingItem = await OrderedItemModel.findByIdAndDelete(id);
//     if (!deletingItem) {
//       return res.status(404).json({ error: "item not found" });
//     }
//     res.status(200).json({ deletedItemIa: deletingItem });
//   } catch (error) {
//     console.log(`Error deleting item with ID ${id}:`, error);
//     res.status(404).json({ error: "Internal server error" });
//   }
// };

module.exports = {
  postingAReview,
  getAllReviews,
//   deletingAnItem,
};