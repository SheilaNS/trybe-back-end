"use strict";
function printCoord(pt) {
    console.log(`O valor da coordenada x é: ${pt.x}`);
    console.log(`O valor da coordenada y é: ${pt.y}`);
}
printCoord({ x: 10, y: 20 });
// tipo unions
function retornarCPF(cpf) {
    console.log(`Seu CPF é: ${cpf}`);
}
let cpf = '123.456.789-12';
cpf = 12345678912;
