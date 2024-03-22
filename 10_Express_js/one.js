Express JS is a small framework that works on top of Node web server functionality to simplify its APIs and add helpful new features.
It makes it easier to organize your application’s functionality with middleware and routing.
It adds helpful utilities to Node HTTP objects and facilitates the rendering of dynamic HTTP objects.

Express Advantages:
1)Simplicity and Minimalism: Express JS has very simple design, that makes it easy to learn and use. With its simple structure you can quickly set up a server, define routes, and handle HTTP requests which makes it an excellent choice for building web applications efficiently.
2)Flexibility and Customization: Express JS is a flexible framework that allows you to structure the application based on your preferences. It does have a strict application architecture so you can organize your code according to your preference.
3)Middleware Ecosystem: Express JS has a large numbers of middleware that can be easily integrated into applications. Middleware functions increases the functionality of Express by allowing you to handle various tasks such as authentication, logging, and error handling.
4)Scalability: Express JS is designed to be lightweight and scalable, which makes it suitable for building both small projects and large-scale applications. It is asynchronous and has event-driven architecture which allows you to handle a large number of requests.
5)Active Community Support: Express JS has a large active community who contribute to its growth and improvement. Because of them the framework is regularly updated and well-documented.

//start
npm init
npm install express

//code
const express = require('express'); 
  
const app = express(); 
const PORT = 3000; 
  
app.listen(PORT, (error) =>{ 
    if(!error) 
        console.log("Server is Successfully Running,  
                   and App is listening on port "+ PORT) 
    else 
        console.log("Error occurred, server can't start", error); 
    } 
); 

//run
node app.js


// get route 
const express = require('express'); 

const app = express(); 
const PORT = 3000; 

app.get('/', (req, res)=>{ 
	res.send("Welcome to root URL of Server"); 
}); 


app.listen(PORT, (error) =>{ 
	if(!error) 
		console.log("Server is Successfully Running, 
					and App is listening on port "+ PORT) 
	else
		console.log("Error occurred, server can't start", error); 
	} 
); 

//post route
const express = require('express'); 

const app = express(); 
const PORT = 3000; 

app.use(express.json()); //middleware h jo json m requested data ko convert kr rha h
//The express.json() middleware is used to parses the incoming request object as a JSON object. The app.use() is the syntax to use any middleware.

app.post('/', (req, res)=>{ 
	const {name} = req.body; //Here we are extracting the name property which was sent by the user with this request object.
	
	res.send(`Welcome ${name}`); 
  //After that, we are simply sending a response to indicate that we have successfully received data. If this `${} ` is 
  //looking weird to you then let me tell you that it is the syntax in 
  //ES6 to generate strings with javascript expression in ES6. We can inject any javascript expression inside ${}.
}) 

app.listen(PORT, (error) =>{ 
	if(!error) 
		console.log("Server is Successfully Running, and 
					App is listening on port "+ PORT) 
	else
		console.log("Error occurred, server can't start", error); 
	} 
);

//sending file to the server
         const express = require('express'); 
const path = require('path'); 

const app = express(); 
const PORT = 3000; 

//focus on this only 
app.get('/file', (req, res)=>{ 
	res.sendFile(path.join(__dirname,'image.jpg')); 
}); 

app.listen(PORT, (error) =>{ 
	if(!error) 
		console.log("Server is Successfully Running, and App is listening on port "+ PORT) 
	else
		console.log("Error occurred, server can't start", error); 
	} 
); 
