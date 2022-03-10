// const express = require("express");
// const app = express();
// const port = 5000;

// app.get("/", (req, res) => {
//   res.send("<h1>This is the HomePage.</h1>");
// });

// app.get("/about", (req, res) => {
//   res.status(200).send("<h1>This is the About Page.</h1>");
// });

// app.get("/contact", (req, res) => {
//   res.status(200).send("<h1>This is the Contact Page.</h1>");
// });

// app.listen(port, () => {
//   console.log("Listening on 5000");
// });

// ------------------------------------------------------------------------------------------------------------------------
// // WE Call the Json Data also.
// const express = require("express");
// const app = express();
// const port = 5000;

// app.get("/", (req, res) => {
//   res.send({
//       id : 1,
//       name : 'Sheba',
//      city : 'indore'
//   });
// });

// app.listen(port, () => {
//   console.log("Listening on 5000");
// });

// ------------------------------------------------------------------------------------------------------------------------
// Array of Object.
const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send([
    {
      id: 1,
      name: "Sheba",
      city: "indore",
    },
    {
        id: 2,
        name: "Kushwash",
        city: "indore",
      },
      {
        id: 1,
        name: "Rajju",
        city: "indore",
      },
  ]);
});

app.listen(port, () => {
  console.log("Listening on 5000");
});
