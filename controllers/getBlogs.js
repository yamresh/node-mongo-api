const Posts = require("../database/modals/Posts");

module.exports = (req, res) => {
  Posts.find({}, (err, data) => {
    res.json(data);
  });
};
