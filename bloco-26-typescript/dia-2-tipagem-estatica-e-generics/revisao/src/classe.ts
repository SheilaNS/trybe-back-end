enum EyeColor {
  Black = 'Pretos',
  Blue = 'Azuis',
  Green = 'Verdes',
  Brown = 'Castanhos',
}

class Person {
  name: string;
  birthday: Date;
  eyeColor?: EyeColor; // a ? indica que o eyeColor é opcional

  constructor(name: string, birthday: Date, eyeColor: EyeColor) {
    this.name = name;
    this.birthday = birthday;
    this.eyeColor = eyeColor;
  }

  speak(): void {
    console.log(`${this.name} está falando.`);
  }

  eat(): void {
    console.log(`${this.name} está comendo.`);
  }

  walk(): void {
    console.log(`${this.name} está andando.`);
  }
}

const person1 = new Person('Sheila', new Date('1984-10-18'), EyeColor.Brown);
const person2 = new Person('Lucas', new Date('1987-04-30'), EyeColor.Black);

console.log(person1);
person1.speak();

console.log(person2);
person2.walk();

// PQ ESSE ERRO PERSISTE? 
const person3 = new Person('Nety', new Date('2007-06-12'));
console.log(person3);
person3.eat();

person3.eyeColor = EyeColor.Green;
console.log(person3);

// Exercícios
// Crie uma classe cujo objeto represente um Cachorro.
class Dog {
  nome: string;
  raca: string;
  porte: string;
  cor: string;
  peso: number;

  constructor(nome: string, raca: string, porte: string, cor: string, peso: number) {
    this.nome = nome;
    this.raca = raca;
    this.porte = porte;
    this.cor = cor;
    this.peso = peso;
  }

  bark(): void {
    console.log('woof');
  }
}

// Crie uma classe cujo objeto represente uma Casa.
interface House {
  tipo: string;
  endereco: string;
  numero: number;
  bairro: string;
  cidade: string;
}

class House {
  constructor(tipo: string, endereco: string, numero: number, bairro: string, cidade: string) {
    this.tipo = tipo;
    this.endereco = endereco;
    this.numero = numero;
    this.bairro = bairro;
    this.cidade = cidade;
  }

  address(): void {
    console.log(`Tipo: ${this.tipo}\nEndereço: ${this.endereco}, ${this.numero}\nBairro: ${this.bairro}\nCidade: ${this.cidade}`);
  }
}

// Crie uma classe cujo objeto represente um Voo.
interface Flight {
  codigo: string;
  data: Date;
  origem: string;
  destino: string;
  duracao: number;
}

class Flight {
  constructor(codigo: string, data: Date, origem: string, destino: string, duracao: number) {
    this.codigo = codigo;
    this.data = data;
    this.origem = origem;
    this.destino = destino;
    this.duracao = duracao;
  }

  flightInfo(): void {
    console.log(`Código: ${this.codigo}\nData: ${this.data}\nOrigem: ${this.origem}\nDestino: ${this.destino}\nDuração do vôo: ${this.duracao}`);
  }
}