/* Our application should have the following routes: */

/* GET /items - this should respond with a list of shopping items.

POST /items - this route should accept form data and add it to the shopping list.

GET /items/:id - this route should display a single item's name and price

PATCH /items/:id - this route should accept edits to existing items.

DELETE /items/:id - this route should allow you to delete a specific item from the array. */

const express = require("express");
const app = express();
const router = express.Router();
const list = [];
let id = 0;
router.get("/items", (req, res) => {
  return res.json({ message: "shopping items", list });
});
router.get("/items/:id", (req, res) => {
  let item = list.find((e) => e.id === Number(req.params.id));
  return res.json({ message: "item", item });
});
router.post("/items", (req, res) => {
  list.push({
    id: id++,
    name: req.body.name,
    price: req.body.price,
  });
  return res.json({ message: "data added successfully" });
});
router.put("/items/:id", (req, res) => {
  let item = list.find((e) => e.id === Number(req.params.id));
  item.name = req.body.name;
  item.price = req.body.price;
  return res.json({ message: "data updated successfully" });
});
router.delete("/items/:id", (req, res) => {
  let itemIndex = list.indexOf(
    list.find((e) => e.id === Number(req.params.id))
  );
  console.log(itemIndex);
  if (itemIndex != -1) {
    list.splice(itemIndex, 1);
    return res.json({ message: "data deleted successfully" });
  } else {
    return res.json({ message: "index not found" });
  }
});
module.exports = router;
