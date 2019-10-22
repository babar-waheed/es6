console.log("symbols.js")

let sy1 = Symbol('age');
let sy2 = Symbol('age'); //unique id symbols
//console.log(sy1 == sy2) //false;

let s1 = Symbol.for('age');
//let s2 = Symbol.for('age'); //symbols
//console.log(s1 == s2) //true;

let person = {
    name: "max",
    age: 27,
    [sy1]: "secret"
}

function makeAge(person){
    let ageSymbol = Symbol.for('age');
    person[ageSymbol] = 20;
}

makeAge(person);

console.log(person);
console.log(person[sy1]);

//Well known Symbols = Changing the behavior of existing function


