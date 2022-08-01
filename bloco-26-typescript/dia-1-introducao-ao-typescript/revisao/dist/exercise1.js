"use strict";
// Crie uma Enum que represente os dias da semana. Seu valor deve ser o número do dia.
var Week;
(function (Week) {
    Week[Week["Monday"] = 1] = "Monday";
    Week[Week["Tuesday"] = 2] = "Tuesday";
    Week[Week["Wednesday"] = 3] = "Wednesday";
    Week[Week["Thursday"] = 4] = "Thursday";
    Week[Week["Friday"] = 5] = "Friday";
    Week[Week["Saturday"] = 6] = "Saturday";
    Week[Week["Sunday"] = 7] = "Sunday";
})(Week || (Week = {}));
// Crie uma Enum que represente as cores do arco-íris. Seu valor deve ser o nome das cores em português.
var Rainbow;
(function (Rainbow) {
    Rainbow[Rainbow["Red"] = 1] = "Red";
    Rainbow[Rainbow["Orange"] = 2] = "Orange";
    Rainbow[Rainbow["Yellow"] = 3] = "Yellow";
    Rainbow[Rainbow["Green"] = 4] = "Green";
    Rainbow[Rainbow["Blue"] = 5] = "Blue";
    Rainbow[Rainbow["Indigo"] = 6] = "Indigo";
    Rainbow[Rainbow["Violet"] = 7] = "Violet";
})(Rainbow || (Rainbow = {}));
// Crie uma Enum que represente as ações: salvar, imprimir, abrir, visualizar e fechar. Seu valor deve ser do tipo inteiro.
var PrintComands;
(function (PrintComands) {
    PrintComands[PrintComands["Save"] = 1] = "Save";
    PrintComands[PrintComands["Print"] = 2] = "Print";
    PrintComands[PrintComands["Open"] = 3] = "Open";
    PrintComands[PrintComands["View"] = 4] = "View";
    PrintComands[PrintComands["Close"] = 5] = "Close";
})(PrintComands || (PrintComands = {}));
// Crie uma Enum que represente os pontos cardeais: Norte, Leste, Sul e Oeste. Seu valor deve ser a primeira letra do nome do ponto cardial.
var Locationm;
(function (Locationm) {
    Locationm["North"] = "N";
    Locationm["East"] = "E";
    Locationm["South"] = "S";
    Locationm["West"] = "W";
})(Locationm || (Locationm = {}));
