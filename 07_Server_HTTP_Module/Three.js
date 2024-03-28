//Create a Server in node js and serve HTML
//serve-html.js
const http  = require('http');
const host  = '127.0.0.1';
const port  = 3000;
const fs    = require('fs');

const server = http.createServer((request, response) => {
    console.log('Server started');

    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('demo.html', (error, data) => {
        if (error) {
            throw error;
        }

        response.write(data);
        response.end();
    
        console.log('Server responded');
    });
});

server.listen(port, host, (error) => {  
    if (error) {
        throw error;
    }
  
    console.log(`Server is listening on ${host}:${port}`);
});	


/*
A constant named server is declared.
a)The http.createServer() method is called, which creates an HTTP server object.
b)Inside createServer(), an arrow function with parameters request and response is defined. This function will be invoked every time a request is made to the server.
console.log('Server started');:

c)Outputs "Server started" to the console. This line indicates that the server has started and is listening for requests.
response.writeHead(200, {'Content-Type': 'text/html'});:

d)Sets the response header with status code 200 (which means "OK") and specifies the content type as 'text/html'.
This line tells the client (e.g., a web browser) that the server is sending back HTML content.
fs.readFile('demo.html', (error, data) => {:

E)Uses the fs.readFile() function from the Node.js fs module to read the contents of a file named 'demo.html'.
An anonymous function is passed as the second argument, which will be called when the file reading operation is completed. This function
takes two parameters: error (if any) and data (the content of the file).
if (error) { throw error; }:

F)Checks if there was an error while reading the file. If an error occurs, it throws the error.
Throwing an error halts the execution of the code block and jumps to the nearest catch block or exits the program if uncaught.
response.write(data);:

g)Writes the content of the file (data) to the HTTP response. This will send the contents of 'demo.html' back to the client.
response.end();:

h)Signals the end of the response. This tells the client that the entire response has been sent.
console.log('Server responded');:

i)Outputs "Server responded" to the console. This line indicates that the server has finished responding to the request.
This code essentially creates an HTTP server that listens for requests. When a request is received, it reads the contents of a file named 
'demo.html', sends it back to the client with a response status of 200 OK, and then logs a message indicating that the server has responded.
					
*/
