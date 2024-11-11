// index.js - Javascript Events and Forms
// Author: Arman Moslehi
// Date: November 10th, 2024


function sortString(inputString) {
    return inputString.split('').sort().join('');
  }
  
  $("#submit").click(function() {
    const userName = $("#user-name").val();
    const userNameSorted = sortString(userName);
    $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
  });