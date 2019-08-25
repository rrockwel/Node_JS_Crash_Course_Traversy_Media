const EventEmitter = require('events');

// Create Emitter Class
class MyEmitter extends EventEmitter {}

// Initiate object
const myEmitter = new MyEmitter();

// Event Listenere
myEmitter.on('event', function(){
	console.log("Event Fired!");
})

// Initiate Event
myEmitter.emit('event');
