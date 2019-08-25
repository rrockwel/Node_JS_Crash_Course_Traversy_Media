const path = require('path');

// Base file name
console.log(__filename);
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename));

// File Extension
console.log(path.extname(__filename));

// Create Path Object
console.log(path.parse(__filename));
	console.log('Path root:' + path.parse(__filename).root);
	console.log('Path dir:'+path.parse(__filename).dir);
	console.log('Path base:'+path.parse(__filename).base);
	console.log('Path ext:'+path.parse(__filename).ext);
	console.log('Path name:'+path.parse(__filename).name);

// Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));
