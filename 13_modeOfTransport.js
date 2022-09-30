const readline = require('readline');
var vehicles = ["car", "motorcycle", "suv"];
var carModel = ["Honda", "toyota", " lamborghini"];
var motorcycle =["honda", "yamaha", "BMW"];
var suv = ["Honda", "toyota", "hummer"];
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.question("please Enter Vehicle type ", vehicle =>{
    for( i =0 ; i < vehicles.length; i++){
        var num = Math.floor((Math.random() *3))
        if(vehicle === vehicles[0]){

            console.log((num));
            console.log(`I would like to own a ${vehicle}${carModel[num]}`);
            break;
        }if(vehicle === vehicles[1]){
            console.log(`I would like to own a ${vehicle} ${motorcycle[num]}`);
            break;
        }
        if(vehicle === vehicles[2]){
            console.log(`I would like to own a ${vehicle} ${suv[num]}`);
            break;
        }
        else{
            console.log("Please enter valid name");
        }
    }
})

