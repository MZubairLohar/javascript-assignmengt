const readline = require('readline');
var names = ["zubair", "bilal", "shabir", "ashir"];


const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.question("Please enter your name : ",number=>{
    if(number >= 0 || number <= 3 ){
        console.log(`valid number  represents name ${names[number]}`);
    }else {
        console.log("Error: please enter valid number 0 to 3");
        reader.question("place name again will we create new entry:", na =>{
            names.push(na);
            console.log(names);
        })
    }
} )
