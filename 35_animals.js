var animals = ["lion","cat","dog"];

function run() {
    for (let i = 0; i < animals.length; i++) {
        if(i == 0){
            console.log(`The ${animals[i]} is king of the jungle.`);
        }else if(i == 1){
            console.log(`${animals[i]}s do alot of mess in the houses.`);
        }else if(i == 2){
            console.log(`${animals[i]} is men's best friend.`);
        }
    }
    console.log("Dogs are best pets");
}
run()