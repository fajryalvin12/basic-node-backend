const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("this is user route in general");
});

router.get("/101", (req, res) => {
  res.send("this is user in route number 101");
});

router.get("/102", (req, res) => {
  res.send("this is user in route number 102");
});

module.exports = router;
