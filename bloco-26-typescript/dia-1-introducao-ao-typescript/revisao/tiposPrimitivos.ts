// tipo boolean
let yes: boolean = true;
let no: boolean = false;

// tipo number
let x: number;
let y: number = 0;
let z: number = 123.456;

// tipo string
let s: string;
let empty: string = '';
let abc: string = 'abc';

// tipo void (função)
function sayHello(): void {
  console.log('Hello World!');
}

// tipo null e undefined
let nullValue = null;
let undefinedValue = undefined;

// tipo enum
enum StudentStatus {
  Active = 1,
  Inactive,
  Paused
}

let newStudent: StudentStatus = StudentStatus.Inactive;
console.log(newStudent);

enum StatusCodes {
  Ok = 200,
  BadRequest = 400,
  Unauthorized,
  PaymentRequired,
  Forbidden,
  NotFound,
}

const ok = StatusCodes.Ok;
const indiceOk = StatusCodes["Ok"];
const stringBadRequest = StatusCodes[400];

console.log(ok);
console.log(indiceOk);
console.log(stringBadRequest);

enum directionsGamePad {
  UP = 'UP',
  DOWN = 'DOWN',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}