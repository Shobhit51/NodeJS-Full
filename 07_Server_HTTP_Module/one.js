//Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).
//To include the HTTP module, use the require() method:
//Node provide us with the inbuilt http module which we can use to create the server. Get the access to the module by using require
//Mention the host i.e. localhost (127.0.0.1) to serve it locally.
//Mention the port. We are using port : 3000 for our example.
//Create a server using the createServer() method. createServer() method takes a callback function as arguments. This callback is executed each time a request is received.
//The two arguments of createServer() method are
//request : which contains all the information related to client's request such as URL, custom headers , client info , etc.
//response : which is used to return the data back to the client.
//response.writeHead is an inbuilt method which is used to send the
//status code and the MIME type
//And after that we are just Printing the value on the console using console.log() function.
//response.end() is an inbuilt function which is used to tell the server that the request has been fulfilled.Along with that we can also send one response using this.
//server.listen() is an inbuilt method used to bind to the port an start listening for incoming connections.

//example 1
const http = require('http');

//Use the createServer() method to create an HTTP server:

const server = http.createServer((req, res) => { ... });

//The function takes two arguments:request object (req) and response object (res)

const myserver = http.createServer(function (req, res) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
})

/*"request.write header" ka matlab hai ki kisi HTTP request ke header ko likhna ya set karna. Jab aap kisi web server se data maangte hain, aap ek HTTP 
request bhejte hain jismein kuch headers hote hain. Ye headers server ko aapke request ke bare mein kuch information dete hain, jaise ki aap kya chahte
hain aur kya aapke saath kya-kya information hai. "request.write header" ka istemal karte hue,
aap in headers ko specify kar sakte hain ya modify kar sakte hain, jisse server aapki request ko sahi tareeke se samajh sake aur uska jawab den sake.*/

/*
"request.write header 200" ka matlab hai ki aap ek HTTP response ke header mein status code 200 ko likh rahe hain. HTTP me, status code 200 "OK" 
ko darshata hai, jo yeh signify karta hai ki request sahi tareeke se poori hui hai aur server ne sahi se response diya hai.

Jab aap server se kisi web resource ko maangte hain, server aksar ek status code ke saath response bhejta hai jo batata hai ki request kaisi thi aur kya outcome
tha. Status code 200 aksar indicate karta hai ki request successful thi aur server ne sahi response diya hai.*/
/*Yahan kuch pramukh HTTP status codes diye gaye hain, jo aapko samajhne mein madad karenge:

200 OK: Yeh status code request ka safal hona darshata hai. Server ne request ko sahi tareeke se samjha aur pura kiya hai.

404 Not Found: Yeh status code resource (jaise ki webpage ya file) ko server par nahi milne ka darshata hai. Iska matlab hai ki server ne request ki gayi URL par
koi response nahi diya.

400 Bad Request: Yeh status code server dwara samjhe gaye request ko poori karne mein asafal hone ka darshata hai. Ye ho sakta hai jab request mein kuch missing ya
incorrect information ho.

500 Internal Server Error: Yeh status code server ki taraf se anjaan ek error ko darshata hai. Iska matalab hai ki server ne request ko poori karne mein kisi internal
error ka samna kiya hai.

301 Moved Permanently: Yeh status code URL redirection ka darshata hai. Jab server request ki gayi resource ko kisi aur location par permanently move kar deta hai,
tab yeh status code generate hota hai.*/

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




