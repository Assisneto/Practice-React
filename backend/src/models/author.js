const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});
module.exports = mongoose.model("Author", AuthorSchema);
