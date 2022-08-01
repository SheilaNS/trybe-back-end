"use strict";
var EyeColor;
(function (EyeColor) {
    EyeColor["Black"] = "Pretos";
    EyeColor["Blue"] = "Azuis";
    EyeColor["Green"] = "Verdes";
    EyeColor["Brown"] = "Castanhos";
})(EyeColor || (EyeColor = {}));
class Person {
    constructor(name, birthday, eyeColor) {
        this.name = name;
        this.birthday = birthday;
        this.eyeColor = eyeColor;
    }
    speak() {
        console.log(`${this.name} está falando.`);
    }
    eat() {
        console.log(`${this.name} está comendo.`);
    }
    walk() {
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
    constructor(nome, raca, porte, cor, peso) {
        this.nome = nome;
        this.raca = raca;
        this.porte = porte;
        this.cor = cor;
        this.peso = peso;
    }
    bark() {
        console.log('woof');
    }
}
class House {
    constructor(tipo, endereco, numero, bairro, cidade) {
        this.tipo = tipo;
        this.endereco = endereco;
        this.numero = numero;
        this.bairro = bairro;
        this.cidade = cidade;
    }
    address() {
        console.log(`Tipo: ${this.tipo}\nEndereço: ${this.endereco}, ${this.numero}\nBairro: ${this.bairro}\nCidade: ${this.cidade}`);
    }
}
class Flight {
    constructor(codigo, data, origem, destino, duracao) {
        this.codigo = codigo;
        this.data = data;
        this.origem = origem;
        this.destino = destino;
        this.duracao = duracao;
    }
    flightInfo() {
        console.log(`Código: ${this.codigo}\nData: ${this.data}\nOrigem: ${this.origem}\nDestino: ${this.destino}\nDuração do vôo: ${this.duracao}`);
    }
}
