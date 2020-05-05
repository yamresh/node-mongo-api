const Users = require("../database/modals/Users");

module.exports = (req, res) => {
  console.log("req, body", req.body);
  Users.create(req.body, (err, user) => {
    if (err) res.json(err);
    res.json(user);
  });
};
