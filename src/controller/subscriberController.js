const SubscriberModel = require("./../model/SubscriberModel")

//posting a subscriber
const postingASubscriber = async (req, res) => {
    const { name, email, comment } = req.body;
    try {
        const aSubscriber = await SubscriberModel.create({
          name,
          email,
          comment,
        });
        console.log("new subscriber is: ", aSubscriber)
        res.status(201).json({ message: "Subscribed!" });
    } catch (error) {
      console.log("an error occurred", error);
    }
}

//getting all subscriber
const gettingAllSubscribers = async (req, res) => {
    try {
        const data = await SubscriberModel.find()
        res.status(200).json({ totalSubscribers: data.length, data });
    } catch (error) {
        console.log("error with fetching all subscribers ", error)
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = {
  postingASubscriber,
  gettingAllSubscribers,
};