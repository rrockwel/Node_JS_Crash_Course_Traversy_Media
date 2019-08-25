const fs = require('fs');
const path = require('path');

/***************************************************************
* Create Folder
****************************************************************/

/*
fs.mkdir(path.join(__dirname, 'test'), {}, function(err){
	if(err) throw err;
	console.log('Folder created...');
});
*/

/*******************************************************************
* Create and write to file
*******************************************************************/

/*
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello world', err => {
	if(err) throw err;
	console.log('File written to');
*/


	/***************************************************************************
	* Append to a file
	*****************************************************************************/
/*
	fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), '\nI love Node.js', err => {
		if(err) throw err;
		console.log('File appended to');
	});
});
*/

/******************************************************************
* Read File
******************************************************************/

fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
	if(err) throw err;
	console.log(data);
});


/*********************************************************************
* Rename a File
*********************************************************************/

fs.rename(path.join(__dirname, '/test', 'hello.txt'), (path.join(__dirname, '/test', 'helloworld.txt')), err => {
	console.log('File renamed...');
});

