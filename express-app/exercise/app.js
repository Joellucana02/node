/* { Express.js Exercises. }

For this exercise we will be building a simple application where we will store a shopping list. You should use an array to store your items in the shopping list. */
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const router = require("./routes/router");
app.use(bodyParser.json());
app.use(router);
app.get("/", (req, res) => {
  return res.json({ message: "go to /items" });
});

app.listen(3000, () => {
  console.log("server running on port 3000");
});
