const app = require("./config/express")();
const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/author";

mongoose.connect(url, {
  useNewUrlParser: true
});

app.listen(3001, () => {
  console.log("serve online");
});
