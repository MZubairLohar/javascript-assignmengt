const readline = require('readline');

var names = ["zubair", "bilal", "ashir", "shabir", "umair", "ubaid"];

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.question("Please enter your name : ", name => {
    var comp = name.toLocaleLowerCase();
    if(names.includes(comp) ){
        console.log("Please chose another user name it's already been taken, Also please use lower cases just in case");
    }else{
        names.push(name);
        console.log("Thank you for Signing up ", name);
    }
});