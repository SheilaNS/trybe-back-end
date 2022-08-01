// sem generics
function getArray(items: any[]): any[] {
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
function getArrayWithGen<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}

let newNumbArray = getArrayWithGen<number>([4, 5, 6, 7, 10]);
let newStringArray = getArrayWithGen<string>(['bat', 'camel', 'dove']);

newNumbArray.push(40);
newStringArray.push('rat');

console.log(newNumbArray);
console.log(newStringArray);

function identity<T, U>(value: T, message: U): T {
  console.log(message);
  return value;
}

let number = identity<string, string>('olá', 'mundo');
let both = identity<number, string>(100, 'mundo');
let any = identity<boolean, string>(true, 'mundo');

// com interface
interface ProcessIdentity<T, U> {
  (value: T, message: U): T;
}

function processIdentity<T, U>(value: T, message: U): T {
  console.log(message);
  return value;
}

let processes: ProcessIdentity<number, string> = processIdentity;
let returnNumber = processes(100, 'olá');

// com classes
class NewProcessIdentity<T, U> {
  value: T;
  message: U;

  constructor(value: T, message: U) {
    this.value = value;
    this.message = message;
  }
  
  getIdentity(): T {
    console.log(this.message);
    return this.value;
  }
}

let newProcesses = new NewProcessIdentity<number, string>(100, 'olá');
newProcesses.getIdentity();