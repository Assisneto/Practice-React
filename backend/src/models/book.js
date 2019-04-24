const mongoose = require("mongoose");
const Author = require("./author");
const BookScherma = new mongoose.Schema({
  title: String,
  price: Number,
  Author: { type: mongoose.Schema.Types.ObjectId, ref: Author }
});
module.exports = mongoose.model("Book", BookScherma);
