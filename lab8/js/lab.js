// index.js - Anon Functions and callbacks
// Author: Arman Moslehi
// Date: October 29th, 2024

main();

function isEven(x){
    return (x % 2 == 0);
   }
   
   
   console.log("is 1 even? ", isEven(1));
   console.log("is 2 even? ", isEven(4));
   
   
   array = [120, 3, 8, 10000, 44, 90, 54]
   console.log("My array", array);
   
   
   var result = array.map(isEven);
   
   
   console.log("Test of evenness of array:", result);
   
   
   var result = array.map(function(x){
    return x ** 0.5;
   })
   
   
   console.log("Squareroot of array:", result);
   
   
   // Your map results data
   var mapResults = "Your map results here";
   
   
   // Use jQuery to select the element by its ID and set the HTML content
   $("#output").html(result);
   
