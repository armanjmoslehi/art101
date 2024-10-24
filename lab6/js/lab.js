// index.js - Arrays and Objects
// Author: Arman Moslehi
// Date: October 23rd, 2024

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();

// Define Variables

const myTransport = ["car", 
  "legs", 
  "bus", 
  "scooter"];

var myMainRide = {
    make: "Chrysler", 
    model: "PT Cruiser", 
    color: "silver", 
    year: 2001, 
    age: function() {
      return 2024 - this.year;}
}

document.writeln("Getting around: " + myTransport + "<br>");

document.writeln("My Main Ride: <pre>", 
  JSON.stringify(myMainRide, null, '\t'), "</pre>");

