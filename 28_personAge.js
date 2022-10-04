const readline = require('readline');
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.question("Please enter age of person : ", age => {
    if(age == 2){
        console.log("Person is a baby");
    }else if(age > 2 && age <= 4){
        console.log("person is a toddler");
    }else if(age >= 4 && age < 13){
        console.log("person is a kid");
    }else if(age >= 13 && age < 20){
        console.log("person is a teenager");
    }else if(age >=20 &&  age <65){
        console.log("person is an adult");
    }else if(age >= 65){
        console.log("person is an elder");
    }
});
