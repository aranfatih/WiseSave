const mongoose = require("mongoose");
const Posts = require("./post");

let userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },

  email: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  phone: Number,

  passportImage: "String",

  threads: [String]
});

let user = (module.exports = mongoose.model("user", userSchema));
