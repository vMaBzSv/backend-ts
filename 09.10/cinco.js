"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
function main() {
    var num1 = leitor.questionFloat("Insira um número: ");
    var num2 = leitor.questionFloat("Insira outro número: ");
    var num3 = leitor.questionFloat("Insira mais um número: ");
    console.log("A adi\u00E7\u00E3o dos ".concat(num1, ", ").concat(num2, " e ").concat(num3, " resulta em: ").concat(soma(num1, num2, num3)));
    console.log("A subtra\u00E7\u00E3o dos ".concat(num1, ", ").concat(num2, " e ").concat(num3, " resulta em: ").concat(subtração(num1, num2, num3)));
    console.log("A multiplica\u00E7\u00E3o dos ".concat(num1, ", ").concat(num2, " e ").concat(num3, " resulta em: ").concat(multiplicação(num1, num2, num3)));
    console.log("A divis\u00E3o dos ".concat(num1, ", ").concat(num2, " e ").concat(num3, " resulta em: ").concat(divisão(num1, num2, num3)));
}
function soma(numero1, numero2, numero3) {
    return numero1 + numero2 + numero3;
}
function subtração(numero1, numero2, numero3) {
    return numero1 - numero2 - numero3;
}
function multiplicação(num1, num2, num3) {
    return num1 * num2 * num3;
}
function divisão(numero1, numero2, numero3) {
    return numero1 / numero2 / numero3;
}
main();
