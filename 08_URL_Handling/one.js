URL
This module has utilities for URL resolution and parsing. Call require('url') to use it.
  

URL = 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash'

href: The full URL that was originally parsed.

Example: 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash'

protocol: The request protocol.

Example: 'http:'

host: The full host portion of the URL, including port and authentication information.

Example: 'user:pass@host.com:8080'

auth: The authentication information portion of a URL.

Example: 'user:pass'

hostname: Just the hostname portion of the host.

Example: 'host.com'

port: The port number portion of the host.

Example: '8080'

pathname: The path section of the URL, that comes after the host and before the query, including the initial slash if present.

Example: '/p/a/t/h'

search: The 'query string' portion of the URL, including the leading question mark.

Example: '?query=string'

query: Either the 'params' portion of the query string, or a querystring-parsed object.

Example: 'query=string' or {'query':'string'}

hash: The 'fragment' portion of the URL including the pound-sign.

Example: '#hash'


//example 

const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const urlData = url.parse(req.url, true);
  console.log('urlData :>> ', urlData);

  res.end('Thank you');
});

//output 
urlData :>>  Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '?userid=100',
  query: [Object: null prototype] { userid: '100' },
  pathname: '/api/users',
  path: '/api/users?userid=100',
  href: '/api/users?userid=100'
}



//example 2
const server = http.createServer((req,res) =>{
  if(req.url = "/"){
    res.end("hello one ");
  }
  else if (req.url == "/about"){
    res.end("hello two ");
  }
});
server.listen(8000, ()=>{
  console.log("listening to port 8000");
});
    
