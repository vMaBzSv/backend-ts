"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
var continuar = true;
while (continuar) {
    var notas = Number(leitor.questionInt("Insira uma nota de 0 a 100: "));
    var conceito = void 0;
    if (notas >= 0 && notas <= 25) {
        conceito = "F";
    }
    else if (notas >= 26 && notas <= 50) {
        conceito = "D";
    }
    else if (notas >= 51 && notas <= 75) {
        conceito = "C";
    }
    else if (notas >= 76 && notas <= 99) {
        conceito = "B";
    }
    else if (notas === 100) {
        conceito = "A";
    }
    switch (conceito) {
        case "A":
            console.log("Seu conceito e o A ");
            break;
        case "B":
            console.log("Seu conceito e o B ");
            break;
        case "C":
            console.log("Seu conceito e o C ");
            break;
        case "D":
            console.log("Seu conceito e o D ");
            break;
        case "F":
            console.log("Seu conceito e o F");
            break;
        default:
            console.log("Saindo...");
            continuar = false;
    }
}
