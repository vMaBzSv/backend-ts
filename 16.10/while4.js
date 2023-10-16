"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
var continuar = true;
while (continuar) {
    var produtos = leitor.question("Insira o código dos produtos A, B ou C: ");
    switch (produtos) {
        case "A":
            console.log("O valor do produto A é: R$100 ");
            break;
        case "B":
            console.log("O valor do produto B é: R$24 ");
            break;
        case "C":
            console.log("O valor do produto C é: R$1.000.000");
            break;
    }
}
