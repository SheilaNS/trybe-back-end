export function greeder(name: string) {
  return `Olá ${name}!`;
}

export function personAge(name: string, age: number) {
  return `${name} tem ${age} anos!`;
}

export function add(x: number, y: number): number {
  return x + y;
}

export function sumArray(numbers: number[]): number {
  return numbers.reduce(add, 0);
}

export function triangle(base: number, height: number): number {
  return (base * height) / 2;
}

export function square(side: number): number {
  return side ** 2;
}

export function rectangle(base: number, height: number): number {
  return base * height;
}

export function rhombus(side1: number, side2: number): number {
  return (side1 * side2) / 2;
}

export function trapezoid(base1: number, base2: number, height: number): number {
  return ((base1 + base2) * height) / 2;
}
 
export function circle(radius: number): number {
  const pi: number = 3.14;
  return pi * Math.pow(radius, 2);
}