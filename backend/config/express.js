const express = require("express");
const cors = require("cors");

const bodyParser = require("body-parser");

const app = express();

module.exports = () => {
  console.log("modulo express.js esta sendo carregado");

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());
  app.use(bodyParser.json());
  app.use(require("../src/routes"));

  return app;
};
