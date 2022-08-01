"use strict";
// sem generics
function getArray(items) {
    return new Array().concat(items);
}
let numbArray = getArray([1, 2, 3, 5, 7]);
let stringArray = getArray(['cat', 'dog', 'horse']);
// permite a inserção de qualquer tipo nos arrays
numbArray.push('rabbits');
stringArray.push(30);
console.log(numbArray);
console.log(stringArray);
// com generics
function getArrayWithGen(items) {
    return new Array().concat(items);
}
let newNumbArray = getArrayWithGen([4, 5, 6, 7, 10]);
let newStringArray = getArrayWithGen(['bat', 'camel', 'dove']);
newNumbArray.push(40);
newStringArray.push('rat');
console.log(newNumbArray);
console.log(newStringArray);
function identity(value, message) {
    console.log(message);
    return value;
}
let number = identity('olá', 'mundo');
let both = identity(100, 'mundo');
let any = identity(true, 'mundo');
function processIdentity(value, message) {
    console.log(message);
    return value;
}
let processes = processIdentity;
let returnNumber = processes(100, 'olá');
// com classes
class NewProcessIdentity {
    constructor(value, message) {
        this.value = value;
        this.message = message;
    }
    getIdentity() {
        console.log(this.message);
        return this.value;
    }
}
let newProcesses = new NewProcessIdentity(100, 'olá');
newProcesses.getIdentity();
