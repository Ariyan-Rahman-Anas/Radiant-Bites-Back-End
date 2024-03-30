const cloudinary = require("cloudinary").v2 

const cloudinaryConfig = cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});
module.exports = cloudinaryConfig

// CLOUDINARY_NAME: dkg03bek6;
// CLOUDINARY_API: 481349925159558;
// CLOUDINARY_SECRET_KEY: W7i8lzV67ZsdZo7cwcIrZu92YX0;