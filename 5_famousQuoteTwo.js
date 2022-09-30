let Name;
let Quote;
function firstStep(_name, _quote){
    Name = _name;
    Quote = _quote;
    secondStep();
}

function secondStep(){
    console.log(`${Name} once said, "${Quote}"`);
}

firstStep( "Misashi Kisimoto", " People should Know People's lives don't end when they die. It ends when they lose faith.");