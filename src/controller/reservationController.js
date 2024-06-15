const ReservationModel = require("./../model/ReservationModel");

//posting a review
const postingAReservation = async (req, res) => {
  const {
    name,
    email,
    phone,
    date,
    time,
    guests,
    preferredSeating,
    occasionType,
    specialRequests,
    reserverPicture,
  } = req.body;
  try {
    const aReservation = await ReservationModel.create({
      name,
      email,
      phone,
      date,
      time,
      guests,
      preferredSeating,
      occasionType,
      specialRequests,
      reserverPicture,
    });
    console.log("latest reservation is: ", aReservation);
    return res.status(201).json({ message: "Reserved successfully!" });
  } catch (error) {
    console.log("an error occurred", error);
  }
};


//getting all reservation
const gettingAllReservation = async (req, res) => {
    try {
        const data = await ReservationModel.find();
        res.status(200).json({ totalReserved: data.length, data });
    } catch (error) {
      console.error("Error fetching reservations:", error);
      res.status(500).json({ error: "Internal server error" });
    };
}

module.exports = {
    postingAReservation,
    gettingAllReservation
};