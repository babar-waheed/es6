console.log("arrays.js");

let array = Array.of(5, 10, 20)

let _array = [1, 2, 3]

_array.fill(100, 1, 2) //start index 1 - end index 2

console.log(array);

let newArray = Array.from(_array, val => val * 2)

console.log(newArray)

//console.log(array.find(val => val >= 12)


//Array Find

var persons = [
    {name: "person1", age: 22},
    {name: "person2", age: 20},
    {name: "person3", age: 4},
    {name: "person4", age: 2}
]

console.log(persons);

var search = (person) => {

    console.log(person);

    return person.name === "person3";
}

var found = persons.find(search);

console.log(found.age);


let copy = [1, 2, 3];

console.log(copy.entries());

console.log(copy.copyWithin(1, 2)) // arg1 = index arg2 which will be copied to arg1.

