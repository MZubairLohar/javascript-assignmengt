const readline = require('readline');
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function describe_city() {
    
    reader.question("Please type one city from the list (karachi, lahore , tokyo): ", city => {
        reader.question("Please type country's name : ", country=>{
            if(city == "karachi" && country == "pakistan"){
                console.log("Karachi is biggest city of Pakistan");
            }else if(city == "lahore" && country == "pakistan"){
                console.log("Lahore is best city for historical places");
            }else if(country == "pakistan " && city == "tokyo"){
                console.log("Tokyo is not in default country pakistan ");
            }else if(country == "japan " &&  city == "tokyo"){
                console.log("tokyo is japan's capital ");
            }else if( city == "lahore" ||  city == "karachi"  && country == "japan "  ){
                console.log(city, "doesn't exist in japan");
            }
        })
    });
}

describe_city()