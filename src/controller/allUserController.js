const AllUserModel = require("./../model/AllUserModel");


// Posting user data
const postingAnUserData = async (req, res) => {
  const { name, email } = req.body;
  try {
    // Check if a user with the same email already exists
    const existingUser = await AllUserModel.findOne({ email });
    if (existingUser) {
      console.log("User with this email already exists: ", email);
      return res
        .status(200)
        .json({ message: "User with this email already exists", user: existingUser });
    }

    // Create a new user
    const newUser = await AllUserModel.create({
      name,
      email,
    });
    console.log("New user data is: ", newUser);
    return res
      .status(201)
      .json({ message: "User created and received user data successfully!", user: newUser });
  } catch (error) {
    console.log("An error occurred while receiving new user data", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};


//getting user data
const gettingUserData = async (req, res) => {
    try {
        const result = await AllUserModel.find()
        res.status(200).json({
          totalUser: result.length,
          userData: result,
        });
    } catch (error) {
        console.log("an error occurred to getting user data")
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = {
  postingAnUserData,
  gettingUserData,
};