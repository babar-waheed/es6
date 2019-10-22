//Objects
//Object.assign 1st parameter takes as object but other takes

//Object.assign(object, object)
//Object.setPrototypeOf(object, object);


console.log("objects.js");

var obj1 = {
    a: 1
}

var obj2 = {
    b: 2
}

console.log("Object", Object);

var obj = Object.assign(obj1, obj2);

console.log("obj = Object.assign(obj1, obj2)", obj);

console.log("obj1 === obj2", obj1 === obj2);

console.log("obj === obj1", obj === obj1);

console.log("obj === obj2", obj === obj2);

console.log("obj.__proto__ === obj1.__proto__", obj.__proto__ === obj1.__proto__);

console.log("obj.__proto__ === obj2.__proto__", obj.__proto__ === obj2.__proto__);

console.log("obj.__proto__ === obj1.prototype", obj.__proto__ === obj1.prototype);

console.log("obj.__proto__ === obj2.prototype", obj.__proto__ === obj2.prototype);

class Obj1 {
    constructor(){
        this.a = 1;
    }
}

class Obj2 {
    constructor(){
        this.b = 2;
    }
}

var _obj1 = new Obj1();
var _obj2 = new Obj2();

var _obj = Object.assign(_obj1, _obj2);

console.log("_obj instanceof _obj1", _obj instanceof Obj1);
console.log("_obj instanceof _obj2", _obj instanceof Obj2);

console.log("_obj === _obj1", _obj === _obj1)
console.log("_obj === _obj2", _obj === _obj2) //additional arguments

console.log("_obj.__proto__ === Obj1.prototype", _obj.__proto__ === Obj1.prototype)
console.log("_obj.__proto__ === Obj2.prototype", _obj.__proto__ === Obj2.prototype)

//new javascript object {} === Object.prototype

//assign get 1st parameter as object and other objects as additional values from other objects


let person = {
    name: 'Max'
}

let boss = {
    name: 'Anna'
}

console.log(person.__proto__ === Object.prototype);

console.log("person.__proto__", person.__proto__);

Object.setPrototypeOf(person, boss);

console.log("person.__proto__",person.__proto__);

console.log(person.__proto__ === boss);



