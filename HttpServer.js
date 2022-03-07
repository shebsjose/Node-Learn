// var http = require('http');

// const server = http.createServer(function (req, res) {
//   res.write('Hello World!');
//   res.end();
// })
// server.listen(5000, 'localhost');



// HTML Header.
// var http = require("http");
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html" });
//   res.end("Hello Sheba");
// });
// server.listen(5000, "localhost", () => {
//   console.log("Listening to the port on 5000");
// });


// var http = require("http");
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html" });
//   res.end("Hello Sheba");
// });

// const PORT = process.env.PORT || 5000;
// const HOST = 'localhost';

// server.listen(PORT, HOST, () => {
//   console.log("Listening to the port on 5000");
// });

// Get URL
var http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(req.url);
  res.end();
});
server.listen(5000, "localhost", () => {
  console.log("Listening to the port on 5000");
});