const readline = require('readline');
var names = ["zubair", "bilal", "shabir", "ashir"];
var message = ["creating Dapp","repairing Car","wasting time","eating lunch"];

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.question("Please enter your name : ",name=>{
    for( i =0 ; i < names.length; i++){
        if(name === names[i]){
            console.log(`${name} is ${message[i]}`);
            break;
        }else{
            console.log("Please enter valid name");
        }
    }
} )
