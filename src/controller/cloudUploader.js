const cloudinary = require("cloudinary").v2;
require("dotenv").config();

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

// Upload service file
async function cloudUploader(file) {
  const rowBase = Buffer.from(file.buffer).toString("base64");
  const base64 = "data:" + file.mimetype + ";base64," + rowBase;

  // Upload image to Cloudinary
  return await cloudinary.uploader.upload(base64);
}

module.exports = cloudUploader;