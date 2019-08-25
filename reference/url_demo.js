const url = require ('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

/*************************************************************
*  Serialized URL
**************************************************************/

console.log('Serialized URL: ' + myUrl.href);
console.log('Serialized URL: ' + myUrl.toString());


/*************************************************************
* Host (Root Domain)
**************************************************************/

console.log('Host: ' + myUrl.host);

/*************************************************************
*  Hostname
**************************************************************/

console.log('Hostname: ' + myUrl.hostname);  // hostname does not retrieve port

/*************************************************************
*  Pathname
**************************************************************/

console.log('Pathname: ' + myUrl.pathname);


/*************************************************************
* Serialized Query
**************************************************************/

console.log('Serialized query: ' + myUrl.search);

/*************************************************************
*  Params Object
**************************************************************/

console.log('Parmaters Object: ' + myUrl.searchParams);

/*************************************************************
*  Add Parameters
**************************************************************/

myUrl.searchParams.append('abc', '123');
console.log('New Paramaters Object: ' + myUrl.searchParams);

/*************************************************************
*  Loop through parameters
**************************************************************/

myUrl.searchParams.forEach((value,name) => {
	console.log(`Name: ${name}: Value: ${value}`);
});

