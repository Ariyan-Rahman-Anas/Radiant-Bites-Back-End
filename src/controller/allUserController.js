const AllUserModel = require("./../model/AllUserModel");


//posting an user data
const postingAnUserData = async (req, res) => {
    const { name, email } = req.body
    try {
        const newUser = await AllUserModel.create({
            name,
            email
        })
        console.log("new user data is: ", newUser)
    return res
      .status(201)
      .json({ message: "User created and receive user data successfully!" });

    } catch (error) {
      console.log("an error occurred to receiving new user data", error);
    }
}


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