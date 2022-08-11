const express = require("express");
const router = express.Router();

const users = [];

let id = 1;

router.get("/users", (req, res) => {
  return res.json(users);
});

router.get("/users/:id", (req, res) => {
  let user = users.find((e) => e.id === Number(req.params.id));
  return res.json(user);
});
router.post("/users", (req, res) => {
  users.push({
    id: id++,
    name: req.body.name,
  });
  return res.json({ message: "user added successfully" });
});
router.put("/users/:id", (req, res) => {
  let user = users.find((e) => e.id === Number(req.params.id));
  user.name = req.body.name;
  return res.json({ message: "data updated successfully" });
});
router.delete("/users/:id", (req, res) => {
  let userIndex = users.indexOf((e) => e.id === Number(req.params.id));
  users.splice(userIndex, 1);
  return res.json({ message: "user deleted successfully" });
});

module.exports = router;
