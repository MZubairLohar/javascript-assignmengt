const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let itemType = ["mountain", "bottle", "watch"];
let list = ["k2", "water", "rolax"];



reader.question("You wanted to create new Item? type yes for creating or no for testing list", bool => {
        if(bool == "yes" || bool == "YES" || bool == "Yes"){
            reader.question("item type", item=>{
                if(item == item.toUpperCase() || item.slice(0,1) == item.slice(0,1).toLocaleUpperCase()){
                    console.log("please enter lower case alphabets", item);
                }else if(item != item.toUpperCase()){
                    itemType.push(item)
                    reader.question("Item name", name=>{
                        list.push(name)
                        console.log("new list has been created item type", item, "Item is", name);
                        run()
                    })
                }
            })
        }else if(bool == "no" || bool == "NO" ||bool == "No"){
            reader.question("item type", item=>{
                if(item == item.toUpperCase() || item.slice(0,1) == item.slice(0,1).toLocaleUpperCase()){
                    console.log("please enter lower case alphabets");
                }else{
                    for (let i = 0; i < itemType.length; i++) {
                        const element = itemType[i];
                        if(element == item){
                            console.log("Your item is ",list[i]);                       
                        } else{
                            console.log("Your item can't be found, Please create list for it.");
                        }  
                    }
                }
            })
        }
});
