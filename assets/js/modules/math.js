console.log("math.js");

let number = 1.01;

console.log("sign", Math.sign(number));
console.log("trunc", Math.trunc(number));
console.log("floor", Math.floor(number));
console.log("round", Math.round(number));

//Math.sign(number)
//if number is -100 output will be -1
// if number is 0 output will be 0
//if number is 122 output will be 1
//if number is string output will be NaN

//Math.trunc() //removes everything after the decimal

let name = "test";

console.log(name.startsWith("t")); //case sensitive

console.log(name.endsWith("t")); //case sensitive

console.log(name.includes("b")); //case sensitive


//Number.isNaN()
//Number.isInteger() //float / integer

//int vs integer

//int is primitive type while integer is a Wrapper class which give
//more flexibility in storing, converting integer data
