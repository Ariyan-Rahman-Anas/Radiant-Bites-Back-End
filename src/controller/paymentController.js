const stripe = require("stripe")(process.env.STRIPE_SK);

//payment intent
const makePayment = async (req, res) => {
  const { price } = req.body;
    const amount = parseInt(price * 100);
    console.log("amount inside the indent :", amount);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: "usd",
    payment_method_types: ["card"],
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
}
module.exports = {
  makePayment,
};
