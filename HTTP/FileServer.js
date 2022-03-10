// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) =>{
//     fs.readFile('demo.html',(error,data)=>{
//         res.writeHead(200,{'Content-Type' :'text/html'});
//         res.write(data);
//        return res.end();
//     });
// })
// server.listen(5000, "localhost");

// Creating New File.
// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) =>{
//     fs.appendFile('demo1.html','Hello new Page',(error,data)=>{
//         if (error) throw error;
//       console.log('Created the demo1');
//     });
// })
// server.listen(5000, "localhost");

// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) =>{
//     fs.open('demo2.html','w',(error,data)=>{
//         if (error) throw error;
//       console.log('Created the demo2');
//     });
// })
// server.listen(5000, "localhost");


// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) =>{
//     fs.writeFile('demo3.html','Hello demo3',(error,data)=>{
//         if (error) throw error;
//       console.log('Created the demo3');
//     });
// })
// server.listen(5000, "localhost");


// Delete the file.
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) =>{
    fs.unlink('demo2.html',(error,data)=>{
        if (error) throw error;
      console.log('Delete the demo2');
    });
})
server.listen(5000, "localhost");


// Rename the file name.
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) =>{
    fs.rename('demo1.html','demo4.html',(error,data)=>{
        if (error) throw error;
      console.log('Demo1 is rename with the demo4');
    });
})
server.listen(5000, "localhost");