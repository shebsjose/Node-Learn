// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello Sheba!')
// })

// app.listen(5000, () => {
//   console.log('Listening on 5000');
// })


// ------------------------------------------------------------------------------------------------------------------------
// GET- Read 
// const express = require('express');
// const app = express();
// const port = 5000;

// app.get('/', (req, res) => {
//   res.send('Hello Sheba!')
// })

// app.listen(port, () => {
//   console.log('Listening on 5000');
// })


// ------------------------------------------------------------------------------------------------------------------------
// POST - Create 
// const express = require('express');
// const app = express();
// const port = 5000;

// app.post('/',(req, res) =>{
//   res.send('Post Request');
// })
// app.listen(port);

// ------------------------------------------------------------------------------------------------------------------------
// Put - Update 
// const express = require('express');
// const app = express();
// const port = 5000;

// app.put('/',(req, res) =>{
//   res.send('Put Request');
// })
// app.listen(port);


// ------------------------------------------------------------------------------------------------------------------------
// Delete - Delete
const express = require('express');
const app = express();
const port = 5000;

app.post('/',(req, res) =>{
  res.send('Post Request');
})
app.listen(port);