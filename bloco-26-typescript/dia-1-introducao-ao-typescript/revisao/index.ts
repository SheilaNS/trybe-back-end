import * as Exercise from './exercise';
import Months from './months';
import Seasons from './seasons';
import read from 'readline-sync';

let idade: number = 30;

console.log(idade);

console.log(Exercise.greeder('Maria'));
console.log(Exercise.personAge('Maria', 40));
console.log(`A soma do array é igual a ${Exercise.sumArray([3, 6, 9])}`);

console.log(`Triangulo de base 10cm e altura 25cm ${Exercise.triangle(10, 25)}cm²`);
console.log(`Triangulo de base 5cm e altura 30cm ${Exercise.triangle(5, 30)}cm²`);
console.log(`Triangulo de base 100cm e altura 200cm ${Exercise.triangle(100, 200)}cm²`);

console.log(`Quadrado de lado 10cm ${Exercise.square(10)}cm²`);
console.log(`Quadrado de lado 5cm ${Exercise.square(5)}cm²`);
console.log(`Quadrado de lado 100cm ${Exercise.square(100)}cm²`);

console.log(`Retângulo de base 10cm e altura 25cm ${Exercise.rectangle(10, 25)}cm²`);
console.log(`Retângulo de base 5cm e altura 30cm ${Exercise.rectangle(5, 30)}cm²`);
console.log(`Retângulo de base 100cm e altura 200cm ${Exercise.rectangle(100, 200)}cm²`);

console.log(`Losango de diâmetros 32 e 18cm ${Exercise.rhombus(32, 18)}cm²`);
console.log(`Losango de diâmetros 200 e 50cm ${Exercise.rhombus(200, 50)}cm²`);
console.log(`Losango de diâmetros 75 e 25cm ${Exercise.rhombus(75, 25)}cm²`);

console.log(`Trapézio de bases 100 e 70cm e altura de 50cm ${Exercise.trapezoid(100, 70, 50)}cm²`);
console.log(`Trapézio de bases 75 e 50cm e altura de 35cm ${Exercise.trapezoid(75, 35, 50)}cm²`);
console.log(`Trapézio de bases 150 e 120cm e altura de 80cm ${Exercise.trapezoid(150, 120, 80)}cm²`);

console.log(`Cirsculo de raio 25cm ${Exercise.circle(25)}cm²`);
console.log(`Cirsculo de raio 100cm ${Exercise.circle(100)}cm²`);
console.log(`Cirsculo de raio 12.5cm ${Exercise.circle(12.5)}cm²`);

let month = read.question('Qual o mês você deseja saber a estação do ano? ');

if (month === Months.January || month ===  Months.February || month === Months.March) console.log(Seasons.Winter);
if (month === Months.April || month === Months.May || month ===  Months.June) console.log(Seasons.Spring);
if (month === Months.July || month === Months.August || month ===  Months.September) console.log(Seasons.Summer);
if (month === Months.October || month === Months.November || month ===  Months.December) console.log(Seasons.Autumn);