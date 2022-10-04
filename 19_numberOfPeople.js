const readline = require('readline');
var names = ["zubair", "bilal", "shabir", "ashir"];

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.question("Guest name: ", name=>{
    for(i = 0; i < names.length; i++){
        if(name == names[i]){
            console.log(`We are whole heartedly invite you to our Eid Feast ${name}`);
            console.log(`Total Inivitations : ${names.length}`);
            break;
        }else{
            console.log("Sorry! you are not invited.");
        }
    }
});