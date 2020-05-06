const Posts = require("../database/modals/Posts");
const log = require("../config/loggers");

module.exports = (req, res) => {
  log.info(req.url);
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
