const mongoose = require("mongoose");

const ThreadSchema = mongoose.Schema({
  type: { type: String, enum: ["RANDOM", "INVITE"] },

  goal: Number,

  startDate: { type: Date, default: Date.now() },

  user: [
    {
      name: { type: String, default: "" },
      confirmed: { type: Boolean, default: false }
    }
  ],
  takenAmount: [
    {
      amount: { type: Number, default: 0 },
      username: { type: String, default: "" }
    }
  ],
  payedAmount: [
    {
      amount: { type: Number, default: 0 },
      username: { type: String, default: "" }
    }
  ]
});

let thread = (module.exports = mongoose.model("thread", ThreadSchema));
