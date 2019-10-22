console.log("proxy-api.js");

//proxy usage!

let property = {
    lot: '25533'
}

let handler = {

    get: function(target, value){
        return value in target ? target[value] : null
    },

    set: function(target, property, value){

        console.log(target, property, value);

        //proxy + reflect
        Reflect.set(target, property, value);
    }
}

//Proxy() requires object & handler

//handler will have get & set methods with some logic.
var proxy = new Proxy(property, handler);

proxy.size = '350 square meter';

console.log(proxy);

//proxy as prototype

var proxyPrototype = new Proxy({}, handler);
//proxies can be prototypes
Reflect.setPrototypeOf(property, proxyPrototype)
console.log(property.hobbies)

//proxies as proxies

var protoProxy = new Proxy(proxy, handler);

//Wrapping objects / functions with proxy

function log(message){
    console.log("Log entry created", message);
}

let handlerFunc = {
    set: function(target, thisArg, argumentsList){

        console.log(target, thisArg, argumentsList)

        Reflect.set(target, thisArg, argumentsList)

    }
}

let _proxy = new Proxy(log, handlerFunc)

_proxy('hello')

//revoke() let {proxy, revoke} = Proxy.revocable(object, handler)


