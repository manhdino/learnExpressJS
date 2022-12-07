const express = require("express");
const app = express();
const port = 3000;

//branch router
const router = require("./apiRouter");
app.use("/router/", router); // localhost: 3000/router/
//main
app.get("/", (req, res) => {
  res.send("This is from main "); //localhost:3000
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
