const Posts = require("../database/modals/Posts");
const log = require("../config/loggers");

module.exports = (req, res) => {
  Posts.find({}, (err, data) => {
    log.info(data);
    res.json(data);
  });
};
