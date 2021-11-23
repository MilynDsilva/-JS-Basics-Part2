//property descriptors

let person = {name : 'name'};
//let objectBase = Object.getPrototypeOf(person);
Object.defineProperty(person,'name',{
    writable:false,
    enumerable:false,
    configurable:false
});

person.name = ' john';
//delete person.name // nothing happens due to config being false
console.log(person.name);
//console.log(Object.keys(person)); //enum