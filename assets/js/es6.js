console.log("es6.js");
class ES6ClassName {

  log(msg) {
    //console.log(msg);
  }

}

let instance = new ES6ClassName();

instance.log(instance);

// ******* First Module ****** //

//** Functions in ES6, Fat arrow & 'this keyword'
var es6_Function = () => {
    //fat arrow key keeps the content same.
    //this keyword will remain window object regardless of
    //bind, apply, call or addEventListener
    instance.log("ES6 Function");
    instance.log(this);
}

es6_Function();


//** Functions and default Parameters
function isEqualTo(number , compare = 10){
    instance.log(number + " == " + compare);
}

isEqualTo(10);

//** Object Literal Extensions
let name = 'Jon';
let age = 25;

//dynamically add property
let ageField = "age"

let obj = {
    "name" : 'Max',
    //use variable as property
    [ageField]: 28,
    //function as string
    "greet me"(){
        instance.log(this.name + " " + this.age);
    },
    greet(){
        instance.log(this.name + " " + this.age);
    }
}

instance.log(obj);

//obj["greet me"]();
obj.greet();


//** REST & Spread Operator
// 3 dots convert list of arguments and packs the arguments as array.
//REST converts args to list
function sumUp(...toAdd){

    instance.log(toAdd);

}
sumUp(10, 20, "30");

//SPREAD converts list to args example Math.max()
let max = [0, 20, 3, 6, 10, 5];
instance.log("MAX: " +Math.max(...max));


//Template Literals
let myName = "BABS";

let description = `
    Name: ${myName +'!'}
    Age: 30
`;

instance.log(description);


//Destructuring Arrays (pull out array by position)

let da_number = [1, 2, 3];

let [a, b, c, d = 1] = da_number;
//a = 1, b = 2, d = 1/undefined if not = 1.

//original array stays same.

let [a1, ,b1] = [100, 200, 300]

instance.log(a1+ " " +b1);

//Destructuring Objects (pull out array by property name)

let dn_obj = {
    name1: 'Max',
    age1: 27,
    greet1: function(){
        instance.log("Inside Greet1 Function");
    }
}

let {name1, age1, greet1: hello} = dn_obj;

instance.log(dn_obj);
hello();


// ******** Modules & Classes *********

//Important addition to ES6






