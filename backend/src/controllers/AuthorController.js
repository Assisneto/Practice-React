const Author = require("../models/author");

module.exports = {
  async index(req, res) {
    const author = await Author.find({});
    return res.json(author);
  },
  async store(req, res) {
    console.log(req.body);
    const author = await Author.create(req.body);
    const authors = await Author.find();
    return res.json(authors);
  }
};
