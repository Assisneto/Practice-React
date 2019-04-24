const mongoose = require("mongoose");

const BookScherma = new mongoose.Schema({
  title: String,
  price: Number,
  Author: mongoose.Types.ObjectId
});
module.exports = mongoose.model("Book", BookScherma);
