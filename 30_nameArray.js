const readline = require('readline');

var names = ["zubair", "bilal", "ashir", "shabir", "umair", "ubaid"];

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.question("Please enter your name : ", name => {
    if (name == names[0]){
        console.log("Hello Admin, would you like to see a status report?");
    }else {
        console.log(`Hello ${name}, thank you for logging in again`);
    }
});