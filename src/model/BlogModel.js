const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    authorName: {
      type: String,
      required: true,
    },
    authorImage: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    featuredImage: {
      type: String,
    },
    publicationDate: {
      type: String,
      required: true,
    },
    tags: {
      type: String,
      required: true,
    },
    metaTitle: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    excerpt: {
      type: String,
      required: true,
    },
    metaDescription: {
      type: String,
      required: true,
    },
    keywords: {
      type: String,
      required: true,
    },
    postStatus: {
      type: String,
      required: true,
    },
    allowComments: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const blogModel = mongoose.model("blogs", blogSchema);
module.exports = blogModel;