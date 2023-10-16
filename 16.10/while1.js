"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
var continuar = true;
while (continuar) {
    var num = leitor.questionInt("Insira um numero de 1 a 3: ");
    switch (num) {
        case 1:
            console.log("Você escolheu o numero 1");
            break;
        case 2:
            console.log("Você escolheu o numero 2");
            break;
        case 3:
            console.log("Você escolheu o numero 3");
            break;
        default:
            console.log("Saindo...");
            continuar = false;
    }
}
