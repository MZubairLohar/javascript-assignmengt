const readline = require('readline');
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.question("Please enter your name : ", name => {
    console.log(`your name is ${name}`);
    let _nameUppercase = name.toUpperCase();
    console.log(`your name in upper case is ${_nameUppercase}`);
    let _nameLowercase = name.toLowerCase();
    console.log(`your name in lower case is ${_nameLowercase}`);
    let char = name.charAt(0);
    let first = char.toUpperCase();
    let restOf = name.slice(1);
    console.log(` Your name is Title case is ${first + restOf}`);
    reader.close();
});