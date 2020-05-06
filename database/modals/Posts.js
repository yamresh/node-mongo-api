const mongoose = require("mongoose");
const PostsSchema = require("../schema/Posts");

module.exports = mongoose.model("Post", PostsSchema);
