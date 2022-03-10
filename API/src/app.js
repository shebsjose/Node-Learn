const express = require("express");
const app = express();
const port = 3500;
const router = require("../src/routers/mens");
require("../src/database/connection");


//Middleware
app.use(express.json());

//Routes
app.use("/mens",router);

app.listen(port, () => {
  console.log("Listening port on 3500");
});
