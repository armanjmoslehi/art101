
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

function sortUserName(userName) {

    return userName.toLowerCase().split("").sort().join("");
}

function sortUserName(){
    var userName = window.prompt("Hey! Please let me improve your name by typing it in here:");
    console.log("userName=", userName);

    var nameArray = userName.split('');
    console.log("nameArray=", nameArray);

    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);

    var nameSorted = nameArraySort.join('')
    console.log("nameSorted=", nameSorted);

    return nameSorted;
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


    document.writeln("Wow!! Your name is SO much better now: ",
        sortUserName(), "</br>");

