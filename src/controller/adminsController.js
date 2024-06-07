const AdminModel = require("./../model/AdminModel");

//posting an admin
const postingAnAdmin = async (req, res) => {
  const { name, email, adminImage } = req.body;
  try {
    const anAdmin = await AdminModel.create({
      name,
      email,
      adminImage,
    });
    console.log("posted admin is: ", anAdmin);
    return res.status(201).json({ message: "Successfully Posted an Admin" });
  } catch (error) {
    console.log("an error occurred", error);
  }
}

//getting admin
const gettingAdmins = async (req, res) => {
    try {
        const result = await AdminModel.find();
        res.status(200).json({ totalAdmin: result.length, data: result });
    } catch (error) {
        console.log("An error occurred with getting admins", error)
        res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = {
  postingAnAdmin,
  gettingAdmins,
};