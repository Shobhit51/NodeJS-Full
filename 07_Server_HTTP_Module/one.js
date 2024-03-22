//Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).
//To include the HTTP module, use the require() method:

//example 1
const http = require('http');

//Use the createServer() method to create an HTTP server:

const server = http.createServer((req, res) => { ... });

//The function takes two arguments:request object (req) and response object (res)

const myserver = http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
})

//listening at port 8000
myserver.listen(8000)

//adding callback to port 
myserver.listen(8000,()=> {
console.log("Listening to port 8k");
});

//example 2
const server = http.createServer((req, res) => {
  res.end('Hello!');
});

server.listen(3000, () => {
  console.log('Server started on localhost:3000!');
})


//example 3
//detailing about req parameter
const server = http.createServer((req, res) => {
  console.log('Request Headers :>> ', req.headers);
  console.log('Request Method :>> ', req.method);
  console.log('Request URL :>> ', req.url);
  res.end('Thank you Mario, but our princess is in another castle...');
});
