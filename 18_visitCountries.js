var countries = [ ];
function firstStep(){
    countries.push("spain","japan","canada","uk");
}

function run(){
    firstStep();
        console.log("First Task:",countries);
        const ar = countries;
        console.log("Second Task:",ar.sort());
        countries = []
        firstStep();
        console.log("Third Task:",countries);
        const ar2 = countries;
        console.log("Forth Task:",ar2.reverse());
        countries = []
        firstStep();
        console.log("Fifth Task:",countries);
        const ar3 = (countries.sort()).reverse();
        console.log("Sixth Task:", ar3);
        countries = []
        firstStep();
        console.log("Seventh Task:", countries);
        console.log("Alphabetical order:", ar, "changed order: ", countries);
        console.log("Reverse alphabetical order:", ar3, "changed order: ", countries);

}

run()