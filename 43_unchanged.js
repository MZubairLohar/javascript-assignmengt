const magician = ["david blaine ", "hudini", "david copperfield"];
var magTwo = [];
function show_magicians() {
    for (let i = 0; i < magician.length; i++) {
        magTwo.push(magician[i]);
        console.log(magTwo[i] ," = ", magician[i]);
    }
}


show_magicians();
