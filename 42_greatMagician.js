var magician = ["david blaine ", "hudini", "david copperfield"];

function show_magicians() {
    for (let i = 0; i < magician.length; i++) {
        if(i == 0){
            console.log(magician[i], "is currently holding alot of world records" );
        }else if(i == 1){
            console.log(magician[i], "was best ofperformar all time " );
        }else if(i == 2){
            console.log(magician[i], "was best performar of 90s era" );
        }
    }
}


show_magicians();
