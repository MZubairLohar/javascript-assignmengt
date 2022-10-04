const readline = require('readline');
const fs = require('fs');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// const item = new Object();


function newCar (){
reader.question("Name of car: ", name=>{
    reader.question("color of car: ", color=>{
        reader.question("transmission of car (Auto or manual): ", transmission=>{
            console.log(name);
            let myjson = {
                name : ` ${name}`,
                attribute : [
                    { 
                        color : color,
                        gear : transmission,
                    }    
                ]
            }
            
            fs.writeFile(
                `${name}.json`,
                JSON.stringify(myjson),
                (err) => {
                    if (err) console.log("Error writing file:", err);
                }
                );
        }) 
    })
    });
    
}
newCar();