const Book = require("../models/book");

module.exports = {
  async index(req, res) {
    const book = await Book.find({});
    return res.json(book);
  },
  async store(req, res) {
    console.log(req.body);
    const book = await Book.create(req.body);
    const books = await Book.find();
    return res.json(books);
  }
};
