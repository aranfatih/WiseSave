const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/", (req, res) => {
  let newEntry = new User(req.body);
  newEntry.save((err, data) => res.sendStatus(200));
});

router.get("/", (req, res) => {
  User.find({}, (err, data) => {
    res.send(data);
  });
});

module.exports = router;
