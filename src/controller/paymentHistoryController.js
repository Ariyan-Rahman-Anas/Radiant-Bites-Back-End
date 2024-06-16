const PaymentHistoryModel = require("./../model/PaymentHistoryModel")

//posting a history
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
        res.status(201).json({ message: "Posted the payment history." });
    } catch (error) {
      console.log("an error occurred", error);
    }
}

//getting all history
const gettingAllHistory = async (req, res) => {
    try {
        const data = await PaymentHistoryModel.find()
        res.status(200).json({ totalHistory: data.length, data });
    } catch (error) {
         console.log("error with fetching all payment history ", error);
         res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = {
  postingAHistory,
  gettingAllHistory,
};