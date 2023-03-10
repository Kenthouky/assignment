//const Circle  = require("./circle");

//const circle = new Circle();
//console.log(circle.area(5));



const http = require("http");
const PORT = 3000;
const server = http.createServer((req,res) => {
	console.log(req.url);

	if(req.url == '/') {

	res.writeHead(200, { "Content-Type": "application/json"});
	res.end(
		JSON.stringify({
			data: "Hello World!",
		}))
	}

	if(req.url == '/about') {

		res.writeHead(200, { "Content-Type": "application/json"});
		res.end(
			JSON.stringify({
				data: "This is the about page.",
			}))
	}

	else{
		res.writeHead(200, { "Content-Type": "application/json"});
		res.end(
			JSON.stringify({
				data: "Page not found!",
			}))
	}
});
console.log(`server is running at http://localhost:3000`);
server.listen(3000);
