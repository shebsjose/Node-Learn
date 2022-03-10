const express = require("express");
require("../src/database/connection");

const router = require("../src/routers/mens");

const app = express();
const port = 3500;

//Get the Data From Postman
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log("Listening port on 3500");
});
