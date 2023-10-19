"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Farmacia = exports.Medicamento = void 0;
var leitor = require("readline-sync");
var Medicamento = /** @class */ (function () {
    function Medicamento(nome, quantEstoque, preco) {
        this.nome = nome;
        this.quantEstoque = quantEstoque;
        this.preco = preco;
    }
    return Medicamento;
}());
exports.Medicamento = Medicamento;
var Farmacia = /** @class */ (function () {
    function Farmacia(nomeFarmacia, Endereço) {
        this.listaMedicamentos = [];
    }
    Farmacia.prototype.vendaMedicamento = function () {
    };
    Farmacia.prototype.compraMedicamento = function () {
    };
    Farmacia.prototype.subsMedicamento = function () {
    };
    Farmacia.prototype.removerMedicamento = function () {
    };
    Farmacia.prototype.getMedicamento = function () {
        var nomeF = leitor.question("Informe o nome do medicamento: ");
        var precoF = leitor.questionFloat("Informe o preco do medicamento: ");
        var estoqueF = leitor.questionInt("Informe a quantidade de medicamentos a serem inseridos: ");
        var novoMedicamento = new Medicamento(nomeF, precoF, estoqueF);
        this.listaMedicamentos.push(novoMedicamento);
        console.log("O medicamento ".concat(nomeF, " foi adicionado ao seu estoque. "));
    };
    Farmacia.prototype.visuMedicamento = function () {
        console.log(this.listaMedicamentos);
    };
    return Farmacia;
}());
exports.Farmacia = Farmacia;
