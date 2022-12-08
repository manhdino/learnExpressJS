const express = require("express");
const app = express();
const port = 3000;
/*
  + middleware is a door use for check permission login,
  + Is account has already in database?
    -> yes go to api router
    -> no can't go to api router
*/
//app.get('/',middleware1,middleware2,middleware3,...middlewareN)
const router = require("./apiRouter");
app.use("/router", router);

app.use("/app", (req, res, next) => {
  //res.send("This is mid0");
  console.log("mid0-s");
  next();
});

//example for check login permisssion
const checkLoginPermission = (req, res, next) => {
  console.log("call datatbase");
  if (true) {
    next();
  } else {
    res.send("Your account doesn't in database");
  }
};
app.get("/app", checkLoginPermission, (req, res, next) => {
  console.log("data");
  res.send("This is data");
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
