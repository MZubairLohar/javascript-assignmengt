const readline = require('readline');
var names = new Object();
var num = 0;

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// const item = new Object();


reader.question("Name of thing you wanted to save in Array: ", name=>{
    num ++;
    names.num = name;
    console.log(names);

});