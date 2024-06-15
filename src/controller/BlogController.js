const BlogModel = require("./../model/BlogModel");
const cloudUploader = require("./cloudUploader");

// Posting a blog
const postingABlog = async (req, res) => {
  const {
    title,
    category,
    authorName,
    authorImage,
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
      authorImage,
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

// getting a single blog
const gettingSingleBlog = async (req, res) => {
  const id = req.params.id;
  try {
    const blogFindingById = await BlogModel.findById(id)
    if (blogFindingById) {
      return res.json({blogFindingById})
    }
    return res.status(400).json({message: "single blog not found" })
  } catch (error) {
    return res.status(400).json({ error: "Invalid single blog Id", error });
  }
}

//getting all blogs
const gettingAllBlogs = async (req, res) => {
  try {
    const data = await BlogModel.find()
    res.status(200).json({ totalBlogs: data.length, data });
  } catch (error) {
    console.log("error with fetching all blogs ", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

//getting blog by category
const gettingBlogByCategory = async (req, res) => {
  const { category } = req.params;
  try {
    const data = await BlogModel.find({ category: category });
    res.status(200).json({
      totalBlogsInThisCategory: data.length,
      data,
    });
  } catch (error) {
    return res
      .status(400)
      .send({ error: "error with fetch blog by category: ", error });
  }
}

module.exports = {
  postingABlog,
  gettingSingleBlog,
  gettingAllBlogs,
  gettingBlogByCategory,
};