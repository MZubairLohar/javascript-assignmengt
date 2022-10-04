const readline = require('readline');
var names = [];

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



reader.question("Name of thing you wanted to save in Array: ", name=>{
    names.push(name);
    var position = names.length ;
    console.log("Item that you saved is on number", position);

});