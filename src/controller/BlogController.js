const BlogModel = require("./../model/BlogModel");
const cloudUploader = require("./cloudUploader");

// Posting a blog
const postingABlog = async (req, res) => {
  const {
    title,
    category,
    authorName,
    email,
    publicationDate,
    tags,
    metaTitle,
    description,
    excerpt,
    metaDescription,
    keywords,
    postStatus,
    allowComments,
  } = req.body;
  const file = req.file;
  console.log("file is:", file);
  if (!file) return res.status(400).send("Please attach an image!");
  try {
    const img_res = await cloudUploader(file);
    const aBlog = await BlogModel.create({
      title,
      category,
      authorName,
      email,
      featuredImage: img_res.secure_url,
      publicationDate,
      tags,
      metaTitle,
      description,
      excerpt,
      metaDescription,
      keywords,
      postStatus,
      allowComments,
    });
    console.log("the new blog is: ", aBlog);
    return res.status(201).json({ message: "blog posted successfully" });
  } catch (error) {
    console.log("error occurred: ", error);
    return res.status(500).json({ error: error.message });
  }
};

//getting all blogs
const gettingAllBlogs = async (req, res) => {
  try {
    const result = await BlogModel.find()
    res.status(200).json({ totalBlogs: result.length, data: result });
  } catch (error) {
    console.log("error with fetching all blogs ", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  postingABlog,
  gettingAllBlogs,
};
