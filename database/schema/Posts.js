const mongoose = require("mongoose");

const PostsSchema = mongoose.Schema({
  title: String,
  subHeading: String,
  content: String,
  image: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "This is mandatory filed"],
  },
});

module.exports = PostsSchema;
