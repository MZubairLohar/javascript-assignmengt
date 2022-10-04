const readline = require('readline');
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.question("Please enter your color of an Alien : ", color => {
    if(color == "green" || color == "Green" || color == "GREEN" 
    || color == "yellow" || color == "Yellow" || color == "YELLOW" || 
    color == "red" || color == "Red" || color == "RED" ){
        console.log("Congratulations you've earned 5 points");
    }else{
        console.log('    '); 
    }
});