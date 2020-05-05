const Users = require("../database/modals/Users");

module.exports = async (req, res) => {
  Users.find({}, (err, users) => {
    if (err) return res.json({ error: err });
    res.json(users);
  });
};
