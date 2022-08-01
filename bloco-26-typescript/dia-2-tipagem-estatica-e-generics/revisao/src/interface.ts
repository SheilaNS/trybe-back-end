interface Employee {
  firtname: string;
  lastname: string;
  fullname(): string;
}

interface Teacher extends Employee {
  subject: string;
  sayHello(): string;
}

let employee: Employee = {
  firtname: 'Sheila',
  lastname: 'Nakashima',
  fullname(): string {
    return `${this.firtname} ${this.lastname}`;
  },
}

let teacher: Teacher = {
  firtname: 'Lucas',
  lastname: 'Cardoso',
  fullname(): string {
    return `${this.firtname} ${this.lastname}`;
  },
  subject: 'Perícia trabalhista',
  sayHello(): string {
    return `Olá! Sou ${this.fullname()} e leciono ${this.subject}`;
  },
}


// Exercícios
// Crie uma interface cujo objeto represente um Automóvel.
interface Vehicle {
  montadora: string;
  modelo: string;
  ano: number;
  portas: number;
  turnOn(): void;
  turnOff(): void;
  speedUp(): void;
  speedDown(): void;
  stop(): void;
}

// Crie uma interface cujo objeto represente um Felino.
interface Cat {
  nome: string;
  raca: string;
  cor: string;
  peso: number;
  eat(): void;
  sleep(): void;
  speak(): void;
  hunt(): void;
  play(): void;
}

// Crie uma interface cujo objeto represente uma Aeronave.
interface Airplane {
  montadora: string;
  modelo: string;
  ano: number;
  capacidadePessoas: number;
  turnOn(): void;
  turnOff(): void;
  speedUp(): void;
  speedDown(): void;
  stop(): void;
}