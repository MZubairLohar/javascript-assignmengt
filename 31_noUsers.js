const readline = require('readline');

var names = ["zubair", "bilal", "ashir", "shabir", "umair", "ubaid"];

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.question("Please enter your name : ", name => {
        if (name == names[0]){
            console.log("Hello Admin, would you like to see a status report?");
        }else if(name == "bilal", name == "ashir", name == "shabir", name == "umair", name =="ubaid"){
            console.log(`Hello ${name}, thank you for logging in again`);
        }else{
            console.log(`Hello ${name}, please signup`);
            reader.question("Enter your name again : ", nam=>{
                names.push(name);
                console.log(`Congratulations ${nam} you are signedup `);
            })
        }
});