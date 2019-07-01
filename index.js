const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer(function(req,res){
	// Is not efficient
	/*
	if(req.url === '/home' || req.url === '/'){
		fs.readFile(path.join(__dirname, 'public', 'index.html'), function(err,content){
			if(err) throw err;
			res.writeHead(200, {'Content-Type':'text/html'});
			res.end(content);
		});
	}
	if(req.url === '/about'){
		fs.readFile(path.join(__dirname, 'public', 'about.html'), function(error,data){
			if(error) throw err;
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(data);
		});
	}
	if(req.url === '/api/users'){
		const users = [
		{
			name: 'Bob Smith',
			age: 40
		},
		{
			name: 'John Doe',
			age: 38
		}
		];
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.end(JSON.stringify(users));
	}*/

	// Build File Path
	let filePath = path.join(
		__dirname, 
		'public', 
		req.url === '/' ? 'index.html' :  req.url );

	// Get Extension of File Being Loaded
	let extName = path.extname(filePath);

	// Set Initial Content-Type
	let contentType = 'text/html';

	// Check Extension and Set Content Type 
	switch (extName){
		case '.js':
			contentType = 'text/javascript';
			break;
		case '.css':
			contentType = 'text/css';
			break;
		case '.json':
			contentType = 'application/json';
			break;
		case '.png':
			contentType = 'image/png';
			break;
		case '.jpg':
			contentType = 'image/png';
			break;
	}

	// Read File
	fs.readFile(filePath, function(error, content){
		if(error){
			if(error.code == 'ENOENT'){
				// Page Not Found
				fs.readFile(path.join(__dirname, 'public', '404.html'), function(error,content){
					res.writeHead(200,{'Content-Type': 'text/html'});
					res.end(content, 'utf8');
				})
			}else{
				// Some Server Error
				res.writeHead(500);
				res.end(`Server Error: ${error.code}`);
			}
		}else{
				// If No Error, Render The Page
				res.writeHead(200, {'Content-Type': contentType});
				res.end(content, 'utf8');
			}
	});

});



const PORT = process.env.PORT || 5000;

server.listen(PORT, function(){
	console.log(`Server running on port ${PORT}`);
});