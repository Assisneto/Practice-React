const express = require('express');

const routes = express.Router();

const AuthorController = require('./controllers/AuthorController')

routes.get('/', (req, res) => res.send('hellou world'));
console.log(AuthorController)

routes.get('/author', AuthorController.index);
routes.post('/author', AuthorController.store);

module.exports = routes;
