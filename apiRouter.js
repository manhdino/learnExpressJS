const express = require("express");
//branch router
const router = express.Router();

router.use("/", (req, res, next) => {
  res.send("This is mid0");
  console.log("mid0-r");
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
