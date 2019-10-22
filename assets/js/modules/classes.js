console.log("module3.js")


//basic class
class Person {

    //static keyword, can accessible without creating object.
    constructor(name){
        this.name = name
    }

    //getters & setters.
    set name(value){

    }

    get name(){

    }

    greet(){
        console.log("Inside Greet " + this.name + " " + this.age);
    }
}

class Max extends Person {

    constructor(age){
        super('MAX');
        this.age = age;
    }

    //can access functions of parent using super.greet() etc.

}

let person = new Person ("Babar")

Person.prototype[Symbol.toStringTag] = 'Person'; //well known symbol

console.log(person);

let max = new Max(10)

console.log(max);

//max.greet();

//classes and prototypes
//console.log(person.__proto__ === Person.prototype); true


//Iterator & Generators

//Iterator basics (built-in iterator)


let babs = [1, 2, 3];

let it = babs[Symbol.iterator]();

console.log(it.next());
console.log(it.next());

console.log(typeof babs[Symbol.iterator]);


//creating custom iterateable object.

let person1 = {
    name: "Babar",
    age: 28,
    hobbies: ['coding', 'learning', 'computer games'],
    [Symbol.iterator]: function(){
        let hobbies = this.hobbies;
        let i = 0;
        return {
            next: function(){
                let value = hobbies[i];
                i++;
                return{
                    done: i > hobbies.length ? true : false,
                    value: value
                }
            }
        }
    }
}

console.log(person1);

for (let hobby of person1){
    console.log(hobby);
}


//Generators

function *select(){
    yield 'test';
    yield 'test 2';
}

let it2 = select();

console.log(it2.next());


//Generators in Action

//let g_in_action = {
//    [Symbol.iterator]: gen
//}

function *gen(end){

   for(let i = 0; i < end; i++){

        try{
            yield i;
        }catch(e){
            console.log(e)
        }

   }
}

let g_in_a_it = gen(2)

console.log(g_in_a_it.next());
console.log(g_in_a_it.return("Error !!!!! "));
console.log(g_in_a_it.next());

//for (let ele of g_in_action){
//    console.log(ele)
//}

//Promise let promise = new Promise(resolve, reject)

//Promise.all(promise1, promise2).then().catch() - all resolved or error if 1 fails.
//Promise.race(promise1, promise2).then().catch() - first resolved








