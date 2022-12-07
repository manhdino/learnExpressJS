const express = require("express");
//branch router
const router = express.Router();
router.get("/", (req, res) => {
  res.send("This is from router"); // localhost: 3000/router/
});
router.get("/username", (req, res) => {
  res.send("this is from router/username"); // localhost: 3000/router/username
});
router.get("/data", (req, res) => {
  res.send("this is from router/data"); // localhost: 3000/router/data
});
router.get("/:id", (req, res) => {
  //req: request res: response
  res.send("This is from router: get id " + req.params.id); // localhost: 3000/router/
});
module.exports = router;
