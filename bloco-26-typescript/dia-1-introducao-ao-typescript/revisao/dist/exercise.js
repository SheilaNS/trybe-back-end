"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.circle = exports.trapezoid = exports.rhombus = exports.rectangle = exports.square = exports.triangle = exports.sumArray = exports.add = exports.personAge = exports.greeder = void 0;
function greeder(name) {
    return `Olá ${name}!`;
}
exports.greeder = greeder;
function personAge(name, age) {
    return `${name} tem ${age} anos!`;
}
exports.personAge = personAge;
function add(x, y) {
    return x + y;
}
exports.add = add;
function sumArray(numbers) {
    return numbers.reduce(add, 0);
}
exports.sumArray = sumArray;
function triangle(base, height) {
    return (base * height) / 2;
}
exports.triangle = triangle;
function square(side) {
    return side ** 2;
}
exports.square = square;
function rectangle(base, height) {
    return base * height;
}
exports.rectangle = rectangle;
function rhombus(side1, side2) {
    return (side1 * side2) / 2;
}
exports.rhombus = rhombus;
function trapezoid(base1, base2, height) {
    return ((base1 + base2) * height) / 2;
}
exports.trapezoid = trapezoid;
function circle(radius) {
    const pi = 3.14;
    return pi * Math.pow(radius, 2);
}
exports.circle = circle;
