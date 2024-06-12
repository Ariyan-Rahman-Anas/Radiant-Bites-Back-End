const AllUserModel = require("./../model/AllUserModel");

// Posting user data
const postingAnUserData = async (req, res) => {
  const { name, email, image, role } = req.body;
  try {
    // Check if a user with the same email already exists
    const existingUser = await AllUserModel.findOne({ email });
    if (existingUser) {
      console.log("User with this email already exists: ", email);
      return res.status(200).json({
        message: "User with this email already exists",
        user: existingUser,
      });
    }
    // Create a new user
    const newUser = await AllUserModel.create({
      name,
      email,
      image,
      role,
    });
    console.log("New user data is: ", newUser);
    return res.status(201).json({
      message: "User created and received user data successfully!",
      user: newUser,
    });
  } catch (error) {
    console.log("An error occurred while receiving new user data", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

//getting user data
const gettingUserData = async (req, res) => {
  try {
    const result = await AllUserModel.find();
    res.status(200).json({
      totalUser: result.length,
      data: result,
    });
  } catch (error) {
    console.log("an error occurred to getting user data");
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get users by role
const getUsersByRole = async (req, res) => {
  const { role } = req.params;
  try {
    const users = await AllUserModel.find({ role: role });
    res.status(200).json({
      totalUsers: users.length,
      data: users,
    });
  } catch (error) {
    console.log(
      `An error occurred while fetching users with role ${role}`,
      error
    );
    res.status(500).json({ error: "Internal server error" });
  }
};

//updating user role
// const updatingUserRole = async (req, res) => {
//   const { id } = req.params
//   try {
//     const updatingRole = await AllUserModel.updateOne(id)
//     if (!updatingRole) {
//       return res
//         .status(404)
//         .json({ error: `User not found with this Id: ${id}` });
//     }
//     res.status(200).json({ makeANewUserWhichIs: updatingRole });
//   } catch (error) {
//     console.log(`Error to making an user as admin with ID ${id}:`, error);
//     res.status(404).json({ error: "Internal server error" });
//   }
// }
//updating user role
const updatingUserRole = async (req, res) => {
  const { id } = req.params;
  const { role } = req.body; // Extract the new role from the request body
  try {
    const updatingRole = await AllUserModel.findByIdAndUpdate(
      id,
      { role },
      { new: true } // Return the updated document
    );
    if (!updatingRole) {
      return res
        .status(404)
        .json({ error: `User not found with this Id: ${id}` });
    }
    res.status(200).json({ updatedUser: updatingRole });
  } catch (error) {
    console.log(`Error updating user role with ID ${id}:`, error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// deleting a single item
const deletingAnUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deletingUser = await AllUserModel.findByIdAndDelete(id);
    if (!deletingUser) {
      return res.status(404).json({ error: "user not found" });
    }
    res.status(200).json({ deletedUserIs: deletingUser });
  } catch (error) {
    console.log(`Error deleting user with ID ${id}:`, error);
    res.status(404).json({ error: "Internal server error" });
  }
};

module.exports = {
  postingAnUserData,
  gettingUserData,
  getUsersByRole,
  updatingUserRole,
  deletingAnUser,
};
