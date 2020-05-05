const mongoose = require("mongoose");
const UserSchema = require("../schema/Users");

module.exports = mongoose.model("User", UserSchema);
