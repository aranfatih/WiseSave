const express = require("express");
const router = express.Router();
const Thread = require("../models/thread");

router.post("/", (req, res) => {
  let newEntry = new Thread(req.body);
  newEntry.save((err, data) => res.sendStatus(200));
});

router.get("/", (req, res) => {
  Thread.find({}, (err, data) => {
    res.send(data);
  });
});

router.put("/deposit", (req, res) => {
  Thread.findByIdAndUpdate(
    req.body.id,
    {
      $push: {
        payedAmount: { amount: req.body.amount, username: req.body.user }
      }
    },
    { $true: true },
    (err, data) => {}
  );
});

router.put("/withdraw", (req, res) => {
  Thread.findByIdAndUpdate(
    req.body.id,
    {
      $push: {
        takenAmount: { amount: req.body.amount, username: req.body.user }
      }
    },
    { $true: true },
    (err, data) => {}
  );
});

router.get("/alldeposits/:name", (req, res) => {
  Thread.find({}, (err, data) => {
    console.log(data);
    if (data) {
      console.log(data);
      let sum = 0;
      data.map(pay => {
        if (pay.payedAmount.username === req.params.name) {
          sum += pay.payedAmount.amount;
        }
      });
      res.send(sum);
    }
  });
});

router.post("/queue", (req, res) => {
  let flag = false;

  Thread.find({ state: 1, goal: req.body.goal }, (err, data) => {
    if (data) {
      flag = true;
      console.log(data);
      const id = data[0];
      console.log(id);
      Thread.findByIdAndUpdate(
        id,
        { $push: { user: req.body.name } },
        { $true: true },
        (err, newData) => {
          console.log(newData);
          res.sendStatus(200);
        }
      );
    }
  });

  if (!flag) {
    let newEntry = new Thread(req.body);
    newEntry.save(err => res.sendStatus(200));
  }
});

module.exports = router;
