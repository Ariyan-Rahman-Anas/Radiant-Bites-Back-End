const PaymentHistoryModel = require("./../model/PaymentHistoryModel")

// Posting a history
const postingAHistory = async (req, res) => {
  const {
    name,
    email,
    date,
    method,
    amount,
    transactionId,
    itemNames,
    itemPrices,
    quantity,
  } = req.body;

  try {
    const aPayment = await PaymentHistoryModel.create({
      name,
      email,
      date,
      method,
      amount,
      transactionId,
      itemNames,
      itemPrices,
      quantity,
    });
    console.log("A payment History is: ", aPayment);
    res.status(201).json({ message: "Posted the payment history.", data: aPayment });
  } catch (error) {
    console.log("An error occurred", error);
    res.status(500).json({ message: "Failed to post the payment history.", error: error.message });
  }
};

// Getting payments history by query
const gettingHistoryByQuery = async (req, res) => {
  const {email} = req.query
  try {
    let query = {};
    if (email) {
      query = { email };
    }
    const data = await PaymentHistoryModel.find(query);
    if (data && data.length > 0) {
      return res.json({ totalHistoryByThisEmail: data.length, data });
    }
    return res.status(404).send({ message: "No history found for the given email." });
  } catch (error) {
    return res.status(400).send({ message: "Invalid request.", error: error.message });
  }
};

// Getting all history
const gettingAllHistory = async (req, res) => {
  try {
    const data = await PaymentHistoryModel.find();
    res.status(200).json({ totalHistory: data.length, data });
  } catch (error) {
    console.log("Error with fetching all payment history ", error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

//delete a history
const deleteAHistory = async (req, res) => {
  const { id } = req.params
  try {
    const deletingHistory = await PaymentHistoryModel.findByIdAndDelete(id)
    if (!deletingHistory) {
      return res.status(400).json({error: `History not found with the Id: ${id}`})
    }
    res.status(200).json({ deletedHistoryIs: deletingHistory });
  } catch (error) {
    console.log(`Error deleting history with ID ${id}:`, error);
    res
      .status(404)
      .json({ message: "Internal server error", error: error.message });
    
  }
}

module.exports = {
  postingAHistory,
  gettingHistoryByQuery,
  gettingAllHistory,
  deleteAHistory,
};