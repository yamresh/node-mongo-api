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
const getBlog = require("./controllers/getBlogs");
const createBlog = require("./controllers/createBlog");
const getBlogByUser = require("./controllers/getBlogByUser");
app.use(bodyParse.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Blog Product app" });
});

app.get("/users", usersController);
app.post("/users/register", usersRegisterController);
app.post("/users/login", userLoginController);

app.get("/blogs", getBlog);
app.post("/blog/create", createBlog);

app.get("/blog/:id", getBlogByUser);

app.listen(process.env.PORT, () => {
  console.log("Server started @ PORT " + process.env.PORT);
});
