const express = require("express");
const app = express();
const port = 3000;
//middleware is a door
//app.get('/',middleware1,middleware2,middleware3,...middlewareN)
const router = require("./apiRouter");
app.use("/router", router);

app.use("/app", (req, res, next) => {
  //res.send("This is mid0");
  console.log("mid0-s");
  next();
});

app.get(
  "/app",
  (req, res, next) => {
    // res.send("This is mid1 ");
    console.log("mid1-s");
    next();
  },

  (req, res, next) => {
    //res.send("This is mid2 ");
    console.log("mid2-s");
    next();
  },

  (req, res, next) => {
    // res.send("This is mid3 ");
    console.log("mid3-s");
    next();
  }
);

app.use("/app", (req, res, next) => {
  res.send("This is mid4-s");
  console.log("mid4-s");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
