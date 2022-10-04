var favorite_fruits = ["apple","mango","banana"];
var statements = ["I would like peeled", "king of fruits", "best for break fast"];
function run() {
    var num = Math.floor((Math.random() *3));
    if(favorite_fruits[num] == "apple"){
        console.log(statements[num], "apple" );
    }else if (favorite_fruits[num] == "mango"){
        console.log(statements[num], "is mango" );
    }else if(favorite_fruits[num] == "banana"){
        console.log(statements[num], "is banana" );
    }
}
run()