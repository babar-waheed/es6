console.log("maps-sets.js");


let cardAce = {
    name: 'Ace of Spades'
}

let cardKing = {
    name: 'King of Cubs'
}

let deck = new Map();
//weakmap
//let deck = new WeakMap(); //string as a key doesn't work, you set using object ={}


deck.set('as', cardAce);
deck.set('kc', cardKing);

console.log("Map Object:", deck, "size:", deck.size);

console.log("get:", deck.get('as'));

//keys
for(key of deck.keys()){
    console.log("key:", key);
}

//values
for(value of deck.values()){
    console.log("value:",value);
}

//entries
for(entry of deck.entries()){
    console.log("entry:",entry);
}

//or default which is equal entries
for(entry of deck){
    //console.log("entry:",entry);
}


//Sets creation and adding items

let set = new Set([1, 2, 1]) //hold unique values

//set of values but will hold unique values so identical values wont appear.

set.add(5);

//Sets - Managing items

console.log(set.has(1)) //true as set has 1

set.delete(1) //deletes all 1 from set.

//set.clear() //clears all the values

console.log(set.has(1)) //false because it has been deleted.

console.log(set);

//looping though sets

//set no need of keys/values but can use entries
for (element of set){
    console.log(element)
}

//set is array that can store unique values

//WeakSet()



