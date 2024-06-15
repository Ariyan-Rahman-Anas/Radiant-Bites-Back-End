const mongoose = require("mongoose");

const BlogSearchSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  authorName: { type: String, required: true },
  authorImage: { type: String },
  email: { type: String, required: true },
  featuredImage: { type: String },
  publicationDate: { type: Date, required: true },
  tags: { type: [String], required: true },
  metaTitle: { type: String, required: true },
  description: { type: String, required: true },
  excerpt: { type: String, required: true },
  metaDescription: { type: String, required: true },
  keywords: { type: String, required: true },
  postStatus: { type: String, required: true },
  allowComments: { type: Boolean, default: true },
});

module.exports = mongoose.model("BlogSearch", BlogSearchSchema);