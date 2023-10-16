"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
var continuar = true;
while (continuar) {
    var cor = leitor.question("Insira as cores primarias: ");
    switch (cor) {
        case "amarelo":
            console.log("Amarelo me lembra girassol");
            break;
        case "vermelho":
            console.log("Vermelho me lembra fogo");
            break;
        case "azul":
            console.log("Azul me lembra água");
            break;
        default:
            console.log("Insira verde, vermelho ou azul");
            continuar = false;
    }
}
