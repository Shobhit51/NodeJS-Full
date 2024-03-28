//Create a Server in node js and serve JSON
//serve-json.js
var http = require('http');
var fs = require('fs');
console.log('Server will listen at :  127.0.0.1:3000 ');
http.createServer(function (req, res) {
	//change the MIME type to 'application/json' 
    res.writeHead(200, {'Content-Type': 'application/json'});
    //Create a JSON
	let json_response = {
		status : 200 , 
		message : 'succssful' , 
		result : [ 'sunday' , 'monday' , 'tuesday' , 'wednesday' ] , 
		code : 2000
	}
	console.log('Server Running');
	res.end( JSON.stringify(json_response) ); 
}).listen(3000);




//Create a Server in node js and serve pdf
						
//serve-pdf.js
var http = require('http');
var fs = require('fs');
console.log('Server will listen at :  127.0.0.1:3000 ');

http.createServer( (req, res)=> {
	console.log("Port Number : 3000");
	// Change the MIME type to application/pdf
	res.writeHead(200, {"Content-Type": "application/pdf"});
	 
	fs.readFile('index.pdf', (error,data) => {
		if(error){
			res.json({'status':'error',msg:err});
		}else{			
			res.write(data);
			res.end();       
		}
	});
}).listen(3000);
/*MIME type (Multipurpose Internet Mail Extensions type) ek identifier hota hai jo batata hai ki ek file mein kis tarah ka content
hai ya kis tarah ke data ko represent karta hai. MIME types typically server aur client dono ke beech mein communication mein istemal 
kiya jaata hai. Ye information provide karta hai about the nature of the data being transmitted, jaise ki text, image, audio, video, ya 
application data.

MIME type ek string hoti hai jo usually ek specific format mein hoti hai, jaise "text/html" ya "image/jpeg". Ye type of data ko identify 
karne ke liye use hoti hai aur web browsers, servers, email clients, etc., isse use karte hain to interpret aur render data sahi tareeke se.

For example:

text/html: HTML documents
image/jpeg: JPEG images
application/pdf: PDF documents
audio/mp3: MP3 audio files
video/mp4: MP4 video files
Ye sirf kuch examples hain aur har specific file type ke liye alag MIME type hoti hai.*/




//Create a Server in node js and serve Audio/mp3
//serve-mp3.js
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
	console.log("Port Number : 3000");
	// change MIME type to 'audio/mp3'
    res.writeHead(200, {'Content-Type': 'audio/mp3'});
    fs.exists('audio.mp3',function(exists){
		if(exists)
		{
			var rstream = fs.createReadStream('audio.mp3');
			rstream.pipe(res);
		}
		else
		{
			res.end("Its a 404");
		}
	});
}).listen(3000);




//Create a Server in node js and serve video/mp4
//serve-mp4.js
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
	console.log("Port Number : 3000");
	// change the MIME type to 'video/mp4'
    res.writeHead(200, {'Content-Type': 'video/mp4'});
    fs.exists('video.mp4',function(exists){
		if(exists)
		{
			var rstream = fs.createReadStream('video.mp4');
			rstream.pipe(res);
		}
		else
		{
			res.send("Its a 404");
			res.end();
		}
	});
}).listen(3000);
					
