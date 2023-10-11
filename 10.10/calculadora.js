"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculadora = void 0;
var leitor = require("readline-sync");
var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    Calculadora.prototype.setValores = function () {
        var valor1 = leitor.questionFloat("Insira o primeiro numero: ");
        var valor2 = leitor.questionFloat("Insira o segundo numero: ");
        this.valor1 = valor1;
        this.valor2 = valor2;
    };
    Calculadora.prototype.getMais = function () {
        var soma = this.valor1 + this.valor2;
        return soma;
    };
    Calculadora.prototype.getMenos = function () {
        var subtracao = this.valor1 - this.valor2;
        return subtracao;
    };
    Calculadora.prototype.getVezes = function () {
        var multiplicacao = this.valor1 * this.valor2;
        return multiplicacao;
    };
    Calculadora.prototype.getDividir = function () {
        var divisao = (this.valor1 / this.valor2);
        return divisao;
    };
    return Calculadora;
}());
exports.Calculadora = Calculadora;
function main() {
    calculadora();
}
function calculadora() {
    var calculo = new Calculadora();
    calculo.setValores();
    console.log("A soma: ", calculo.getMais());
    console.log("A subtração: ", calculo.getMenos());
    console.log("A multiplicação: ", calculo.getVezes());
    console.log("A divisão: ", calculo.getDividir());
}
main();
