const express = require("express");

const routes = express.Router();

const AuthorController = require("./controllers/AuthorController");
const BookController = require("./controllers/BookController");
routes.get("/", (req, res) => res.send("hello world"));

routes.get("/author", AuthorController.index);
routes.post("/author", AuthorController.store);
routes.get("/book", BookController.index);
routes.post("/book", BookController.store);
module.exports = routes;
