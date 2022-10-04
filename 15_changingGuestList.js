const readline = require('readline');
var names = ["zubair", "bilal", "shabir", "ashir"];
var namesTwo = ["fahim", "badar", "nasir"];

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.question("Guest name: ", name=>{
    for(i = 0; i < names.length; i++){
        var num = Math.floor((Math.random() *1));
        var numTwo = Math.floor((Math.random() *2));

        if(name == names[i]){
            if(num >= 1){
                console.log(`We are whole heartedly invite you to our Eid Feast ${name}`);
                break;
            }else{
                console.log(`${name} couldn't make it so replace it with ${namesTwo[numTwo]} `);
                break
            }
        }else{
            console.log("Sorry! you are not invited.");
        }
    }
});