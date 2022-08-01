"use strict";
let employee = {
    firtname: 'Sheila',
    lastname: 'Nakashima',
    fullname() {
        return `${this.firtname} ${this.lastname}`;
    },
};
let teacher = {
    firtname: 'Lucas',
    lastname: 'Cardoso',
    fullname() {
        return `${this.firtname} ${this.lastname}`;
    },
    subject: 'Perícia trabalhista',
    sayHello() {
        return `Olá! Sou ${this.fullname()} e leciono ${this.subject}`;
    },
};
