const mongoose = require("mongoose");

const GoalSchema = mongoose.Schema({
  amount: Number,
  duration: Date,
  income: Number,
  expenses: Number,
  monthlyTake: Number,
  taken: [{ date: Date, amount: Number }]
});

let goal = (module.exports = mongoose.model("goal", GoalSchema));
