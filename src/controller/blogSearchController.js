// const BlogSearchModel = require("./../model/BlogSearchModel");
const BlogModel = require("./../model/BlogModel")

exports.blogSearch = async (req, res) => {
  const searchTerm = req.query.q;
  console.log("Search term:", searchTerm); // Logging search term

  try {
    const blogs = await BlogModel.find({
      $or: [
        { title: { $regex: searchTerm, $options: "i" } },
        // { description: { $regex: searchTerm, $options: "i" } },
        { category: { $regex: searchTerm, $options: "i" } },
        { tags: { $regex: searchTerm, $options: "i" } },
        // { metaDescription: { $regex: searchTerm, $options: "i" } },
      ],
    });
    console.log("Found blogs:", blogs); // Logging found blogs
    res.json(blogs);
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ error: "Server error", details: error });
  }
};