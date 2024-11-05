// index.js - Libaries and jQuery
// Author: Arman Moslehi
// Date: November 4th, 2024


// add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");


// add a click listener to the challenge button
$("#button-challenge").click(function(){
 // now add (or subtract) the "special" class to the section
 $("#challenge").toggleClass("special");
});


// add button to challenge section
$("#problems").append("<button id='button-problems'>Make Special</button>");


// add a click listener to the challenge button
$("#button-problems").click(function(){
 // now add (or subtract) the "special" class to the section
 $("#problems").toggleClass("special");
});


// add button to challenge section
$("#results").append("<button id='button-results'>Make Special</button>");


// add a click listener to the challenge button
$("#button-results").click(function(){
 // now add (or subtract) the "special" class to the section
 $("#results").toggleClass("special");
});

