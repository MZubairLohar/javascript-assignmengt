const readline = require('readline');
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function make_shirts() {
    
    reader.question("Please enter your size of T-Shirt you need (s,m or l): ", size => {
        reader.question("Please Write message on your new T-Shirt ", message=>{
            console.log(`T-Shirt you order is "${size}" size and message you need on it is "${message}"`);
        })
    });
}

make_shirts()