// Import the Logger class from the 'logger.js' file
const Logger = require("./logger");

// Create an instance (object) of the Logger class
const logger = new Logger();

// Register (listen for) the 'messageLogged' event
// When this event occurs, the callback function below will be executed
logger.on("messageLogged", (data) => {
  // Print a message and the event data (message + date) to the console
  console.log("Événement capturé :", data);
});

// Call the 'log' method of our logger
// This will print the message, emit the 'messageLogged' event,
// and trigger the above event listener
logger.log("Application démarrée !");
