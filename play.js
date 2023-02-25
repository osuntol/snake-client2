//require module connect and setup input from client and input files. 

const {connect} = require('./client.js');
const { setupInput } = require('./input');

//printing out connecting while connection is being made.
console.log("Connecting ...");

//using a variable to store connection variable for use on line 12. 
let connectionVar = connect();

//passing connect into setup input function to exteablish connection. 
setupInput(connectionVar);
