const readline = require('readline');
const fs = require('fs');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// const item = new Object();


function make_album (){
reader.question("Name of album ", name=>{
    console.log(name);
    let myjson = {
        name : ` ${name}`,
        image : "https://m.media-amazon.com/images/M/MV5BZjI0YTcyMzktNzY2My00ODdkLWEyNWUtZTg0ZWJmMTZhYTMyXkEyXkFqcGdeQXVyOTA1MTQwMTc@._V1_.jpg",
        attribute : [
            { 
                trait_type : "art",
                genre : "pop",
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
    });
    
}
make_album();