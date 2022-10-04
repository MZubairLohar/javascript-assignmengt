const readline = require('readline');
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.question("Please enter your color of an Alien : ", color => {
    if(color == "green" || color == "Green" || color == "GREEN" ){
        console.log("Congratulations you've earned 5 points");
    }else if(color == "yellow" || color == "Yellow" || color == "YELLOW"){
        console.log("Congratulations you've earned 10 points "); 
    }else if(color == "red" || color == "Red" || color == "RED" ){
        console.log("Congratulations you've earned 15 points "); 
    }
});