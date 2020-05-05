const Users = require("../database/modals/Users");
module.exports = (req, res) => {
  const { email, password } = req.body;
  Users.findOne({ email: email }, (err, data) => {
    console.log("err ", err);
    console.log("data ", data.password, password);
    if (err) {
      return res.json({ error: err });
    } else if (data.password === password) {
      return res.json({ login: "success" });
    } else {
      return res.json({ error: err });
    }
  });
};
