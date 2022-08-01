"use strict";
// tipo boolean
let yes = true;
let no = false;
// tipo number
let x;
let y = 0;
let z = 123.456;
// tipo string
let s;
let empty = '';
let abc = 'abc';
// tipo void (função)
function sayHello() {
    console.log('Hello World!');
}
// tipo null e undefined
let nullValue = null;
let undefinedValue = undefined;
// tipo enum
var StudentStatus;
(function (StudentStatus) {
    StudentStatus[StudentStatus["Active"] = 1] = "Active";
    StudentStatus[StudentStatus["Inactive"] = 2] = "Inactive";
    StudentStatus[StudentStatus["Paused"] = 3] = "Paused";
})(StudentStatus || (StudentStatus = {}));
let newStudent = StudentStatus.Inactive;
console.log(newStudent);
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["Ok"] = 200] = "Ok";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
    StatusCodes[StatusCodes["Unauthorized"] = 401] = "Unauthorized";
    StatusCodes[StatusCodes["PaymentRequired"] = 402] = "PaymentRequired";
    StatusCodes[StatusCodes["Forbidden"] = 403] = "Forbidden";
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
})(StatusCodes || (StatusCodes = {}));
const ok = StatusCodes.Ok;
const indiceOk = StatusCodes["Ok"];
const stringBadRequest = StatusCodes[400];
console.log(ok);
console.log(indiceOk);
console.log(stringBadRequest);
var directionsGamePad;
(function (directionsGamePad) {
    directionsGamePad["UP"] = "UP";
    directionsGamePad["DOWN"] = "DOWN";
    directionsGamePad["LEFT"] = "LEFT";
    directionsGamePad["RIGHT"] = "RIGHT";
})(directionsGamePad || (directionsGamePad = {}));
