// tipo alias
type Point = {
  x: number;
  y: number;
}

function printCoord(pt: Point) {
  console.log(`O valor da coordenada x é: ${pt.x}`);
  console.log(`O valor da coordenada y é: ${pt.y}`);
}

printCoord({x: 10, y: 20});

// EXERCÍCIO
// Crie um type para um objeto que represente um pássaro.
type Bird = {
  nome: string;
  bico: boolean;
  pena: boolean;
  oviparo: boolean;
}

// Crie um type que represente uma função que recebe dois valores numéricos e retorne a soma deles.
type Operacao = (x: number, y: number) => number;
// AGORA? COMO USAR?
// let soma: Operacao = (2, 3) => {
//   return 2 + 3
// };

// Crie um type para um objeto que represente um endereço.
type address = {
  street: string;
  number: number;
  complement: string;
  zipcode: number;
  city: string;
}

// tipo unions
function retornarCPF(cpf: number | string) {
  console.log(`Seu CPF é: ${cpf}`);
}

// Exercícios
// Crie um tye union que represente os estados físicos da matéria: líquido, sólido ou gasoso.
type State = 'sólido' | 'líquido' | 'gasoso';

// Crie um type union que represente o documento identificador de uma pessoa que pode receber valores numéricos ou texto. Ex: “123.567.890-12” ou 123456789012.
type Cpf = string | number;

let cpf: Cpf = '123.456.789-12';
cpf = 12345678912;

// Crie um type union que represente sistemas operacionais: linux, mac os ou windows.
type OS = 'linux' | 'mac' | 'windows';

// Crie um type union que represente as vogais do alfabeto.
type Vowels = 'a' | 'e' | 'i' | 'o' | 'u';