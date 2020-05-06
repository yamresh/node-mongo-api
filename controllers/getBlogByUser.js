const Posts = require("../database/modals/Posts");

module.exports = async (req, res) => {
  const post = await Posts.findById(req.params.id).populate("author");
  res.send(post);
};
