require("dotenv").config();
const express = require("express");
const bodyParse = require("body-parser");
const mongoose = require("mongoose");
const app = express();

mongoose.connect(
  process.env.MONGO_DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("=== Connected to DB ======");
  }
);

const usersController = require("./controllers/users");
const usersRegisterController = require("./controllers/usersRegisterController");
const userLoginController = require("./controllers/userLoginController");

app.use(bodyParse.json());

app.get("/", usersController);

app.get("/users", usersController);
app.post("/users/register", usersRegisterController);
app.post("/users/login", userLoginController);

app.listen(process.env.PORT, () => {
  console.log("Server started @ PORT " + process.env.PORT);
});
