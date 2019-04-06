const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
  author: String,
  email: String,
  senha: String,
});
module.exports = mongoose.model('Author', AuthorSchema);
