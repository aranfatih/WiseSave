const express = require("express");
const router = express.Router();
const Goal = require("../models/goal");

router.post("/", (req, res) => {
  let newEntry = new Goal(req.body);
  newEntry.save((err, data) => res.sendStatus(200));
});

router.get("/", (req, res) => {
  Goal.find({}, (err, data) => {
    res.send(data);
  });
});

module.exports = router;
