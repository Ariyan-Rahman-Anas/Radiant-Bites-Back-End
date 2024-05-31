const cloudinary = require("cloudinary").v2;

// create upload service file
// easy to manage uploader
async function cloudUploader(file) {
  const rowBase = Buffer.from(file.buffer).toString("base64");
  const base64 = "data:" + file.mimetype + ";base64," + rowBase;

  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API,
    api_secret: process.env.CLOUDINARY_SECRET_KEY,
  });
  // upload image to clodinary
  return await cloudinary.uploader.upload(base64);
}
module.exports = cloudUploader;
