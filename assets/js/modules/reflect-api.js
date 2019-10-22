console.log("reflect-api.js");

//Reflect API

//Advantages
//bundles
//new methods
//it works well with Proxy API.

//creating object
//literal notation
//new keyword
//Object.create()

//Reflect.construct()

class Person {
    constructor(name){
        this.name = name;
    }

    greet(additional){
        console.log(additional + " " + this.name)
    }
}

function topObj(){
    this.age = 27
}

let person = Reflect.construct(Person, ['max']) //object, array, optional 3rd argument

console.log(person instanceof Person);

console.log(person);

console.log("person.__proto__ === Person.prototype", person.__proto__ === Person.prototype); //false if 3rd parameter is passed
console.log("person.__proto__ === topObj.prototype", person.__proto__ === topObj.prototype);

//Reflect.apply()
//Reflect.setPrototypeOf() object, new object
//Reflect.getPrototypeOf() object
//call function, pass this object as person, additional args
Reflect.apply(person.greet, person, ['hello'])

Person.prototype.age = 27;

let proto = {
    age: 20
}

Reflect.setPrototypeOf(person, proto)

console.log(Reflect.getPrototypeOf(person));

//Accessing Properties with Reflect
//Reflect.get(obj, key, [optional])
//Reflect.set(obj, key, [optional another obj])
//Reflect.has(obj, key)
//Reflect.ownKeys(obj);
//Reflect.defineProperty(obj, key, {})
//Reflect.deleteProperty(obj, key)
//Reflect.preventExtensions(obj)
//Reflect.isExtensions(obj)
class Property{

    constructor(lot, suburb, price){
        this._lot = lot;
        this._suburb = suburb;
        this._price = price;
    }

    get suburb(){
        return this._suburb
    }

    get price(){
        return this._price;
    }

    get lot(){
        return this._lot;
    }

    get all(){
        return this._lot + " " + this._suburb + " " + this._price;
    }

    set price(value){
        return this._price = value;
    }

}

let land = {
    _lot: "Lot 22345",
    _suburb: 'Point Cook',
    _price: "$389,000"
}

let property = new Property('Lot 25533', 'Craigieburn', '$299,000');

//console.log(Reflect.get(property, 'lot'), Reflect.get(property, 'suburb'), Reflect.get(property, 'price'))
console.log(Reflect.get(property, 'all'))

console.log(Reflect.get(property, 'all', land))

Reflect.set(property, 'price', '$320,000');
Reflect.set(property, 'price', '$400,000', land);

console.log(Reflect.get(property, 'all'))
console.log(Reflect.get(property, 'all', land))

console.log(Reflect.has(property, 'all')) //true;
console.log(Reflect.has(land, 'all')) //false

console.log(Reflect.ownKeys(property))
console.log(Reflect.ownKeys(land))


Reflect.defineProperty(property, 'features', {
    writable: false,
    configurable: false,
    value: ['close to school', 'close to shops', 'premium location']

})

//Reflect.set(property)

//Reflect.deleteProperty(obj, key)
Reflect.set(property, 'features', ['updated']); //won't work if writable: false
Reflect.deleteProperty(property, 'features'); //won't work if configurable: false

console.log(Reflect.get(property, 'features'))
Reflect.set(property, 'features', ['close to shops'], land); //won't work if configurable: false;

console.log("property", property)
console.log("land", land)


