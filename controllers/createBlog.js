const Posts = require("../database/modals/Posts");

module.exports = (req, res) => {
  const post = new Posts(req.body);
  post
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Something wrong while creating the product.",
      });
    });
};
