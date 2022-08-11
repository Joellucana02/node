const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./routes/index");
app.use(bodyParser.json());

app.use(router);

app.get("/", (req, res) => {
  return res.json({ message: "go to /users" });
});

app.listen(3000, () => {
  console.log("server running on port 3000");
});
