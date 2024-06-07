const mongoose= require("mongoose")

const allUserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const allUserModel = mongoose.model("users", allUserSchema)
module.exports=allUserModel