// index.js - Functions
// Author: Arman Moslehi
// Date: October 27th, 2024


function shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    
    while (0 !== currentIndex) {
        
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}


function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}




function randomizeName(userName) {
    
    var nameArray = userName.toLowerCase().split("");
    console.log("nameArray =", nameArray);
    
    var shuffledArray = shuffleArray(nameArray);
    console.log("shuffledArray =", shuffledArray);
    var shuffledString = shuffledArray.join("");
    
    var newName = toTitleCase(shuffledString);

    return newName;
}

function main() {
    var userName = window.prompt("Hey! Why don't you give me your name so I can improve it!");
    document.writeln("<style>:root {--textlen: " + userName.length + ";}</style>");
    var randomName = randomizeName(userName);
    document.writeln("There ya go! One brand spanking new name. I do take tips...");
    document.writeln("<div class='name'>" + randomName + "</div>")
}


main();