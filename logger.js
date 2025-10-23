// Import the built-in 'events' module from Node.js
// It allows us to create and manage custom events
const EventEmitter = require("events");

// Define a Logger class that extends EventEmitter
// This means Logger inherits all event-related methods like emit() and on()
class Logger extends EventEmitter {
  
  // Define a method 'log' that takes a message as input
  log(message) {
    // Print the message to the console
    console.log("LOG :", message);

    // Emit (trigger) a custom event called 'messageLogged'
    // Send along an object with the message and the current date
    this.emit("messageLogged", { 
      message, 
      date: new Date() 
    });
  }
}

// Export the Logger class so it can be used in other files
module.exports = Logger;
