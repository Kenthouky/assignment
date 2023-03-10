//const Circle  = require("./circle");

//const circle = new Circle();
//console.log(circle.area(5));



const http = require("http");
const fs = require("fs");
const PORT = 3000;
const server = http.createServer((req,res) => {
	console.log(req.url);

	if(req.url == '/') {
	res.writeHead(200, { "Content-Type": "text/html"});
	fs.readFile("page/home.html", "utf8", (err, data) => {
		if (err) throw err;
		res.write(data);
		res.end();
	});
		
	} else if(req.url == '/about') {

		res.writeHead(200, { "Content-Type": "text/html"});
		res.write('<h1>This is the about page</h1>');
		res.end();
	} else{
		res.writeHead(404, { "Content-Type": "text/html"});
		res.write('<h1>Page not found</h1>');
		res.end();
	}

});
console.log(`server is running at http://localhost:3000`);
server.listen(3000);