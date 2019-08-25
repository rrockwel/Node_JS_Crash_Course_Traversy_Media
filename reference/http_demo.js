const http = require('http');

// Create A Server Object
http.createServer(function(req,res){
	// Write Response
	res.write('Hello World');
	res.end();
}).listen(5000, function(){
	console.log('Server running on port 5000');

})