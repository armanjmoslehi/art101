// index.js - AJAX
// Author: Arman Moslehi
// Date: November 24th, 2024

// Using the core $.ajax() method

// Define the API endpoint
let endpoint = "https://api.nasa.gov/planetary/apod";

// Configure the AJAX request
let ajaxConfig = {
  url: endpoint,  // API URL
  method: "GET", // HTTP method
  contentType: "application/json", // Payload type
  data: { 
    api_key: "WKCPOYq0dX7eFfcriIhL6OQYIhbAzVjKKxkoySzo", // API token
    
  },
  success: function(data) { // Success handler
    
    let record = data[0];
    
    console.log(data); 
    $("#output").append("<h2>" + data.title);
    $("#output").append("<p>" + data.explanation);
    // display data.url
    $("#output").append("<img src='"+ data.hdurl +"'>");
    // add fields to output w append
  }, 
  error: function(xhr, status, error) { // Error handler
    console.error(error); 
  } 
};

// Send the AJAX request
$.ajax(ajaxConfig);s