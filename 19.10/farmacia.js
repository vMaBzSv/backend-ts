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
        var nome = leitor.question("Informe o nome do remedio para vender: ");
        var qtd = leitor.questionInt("Informe a quantidade: ");
        var medicamento = this.listaMedicamentos.find(function (m) { return m.nome === nome; });
        if (medicamento) {
            if (medicamento.quantEstoque >= qtd) {
                medicamento.quantEstoque -= qtd;
                console.log("Venda realizada: ".concat(qtd, " unidades de ").concat(medicamento.nome));
            }
            else {
                console.log("Estoque insuficiente para a venda de ".concat(qtd, " unidades de ").concat(medicamento.nome));
            }
        }
        else {
            console.log("Medicamento ".concat(nome, " n\u00E3o encontrado!"));
        }
    };
    Farmacia.prototype.comprarMedicamento = function () {
        var nome = leitor.question("Informe o nome do medicamento: ");
        var preco = leitor.questionFloat("Informe o preco do medicamento: ");
        var qtd = leitor.questionInt("Informe a quantidade de medicamentos a serem inseridos: ");
        var medicamento = this.listaMedicamentos.find(function (m) { return m.nome === nome; });
        if (medicamento) {
            medicamento.quantEstoque + -qtd;
            medicamento.preco = preco;
        }
        else {
            var novoMedicamento = new Medicamento(nome, qtd, preco);
            this.listaMedicamentos.push(novoMedicamento);
        }
        console.log("Compra realizada ".concat(qtd, " unidade de ").concat(nome));
    };
    Farmacia.prototype.subsMedicamento = function () {
        var nomeAntigo = leitor.question("Insira o nome do remedio a ser substituido: ");
        var medicamentoAntigo = this.listaMedicamentos.find(function (m) { return m.nome === nomeAntigo; });
        if (medicamentoAntigo) {
            var index = this.listaMedicamentos.findIndex(function (m) { return m.nome === nomeAntigo; });
            this.listaMedicamentos.splice(index, 1);
            var nomeNovo = leitor.question("Insira o nome do remedio a ser inserido no estoque: ");
            var preco = leitor.questionFloat("Informe o preco do medicamento: ");
            var estoque = leitor.questionInt("Informe a quantidade de medicamentos a serem inseridos: ");
            var medicamentoNovo = new Medicamento(nomeNovo, estoque, preco);
            this.listaMedicamentos.push(medicamentoNovo);
            console.log("Substituicaõ realizada!");
        }
        else {
            console.log("Medicamento nao encontrado para remocao");
        }
    };
    Farmacia.prototype.removerMedicamento = function () {
        var nome = leitor.question("Informe o nome do medicamento que voce quer remover: ").toLowerCase();
        var index = this.listaMedicamentos.findIndex(function (m) { return m.nome === nome; });
        if (index) {
            this.listaMedicamentos.splice(index, 1);
            console.log("Medicamento ".concat(nome, " revomido do estoque"));
        }
        else {
            console.log("Medicamento ".concat(nome, " n\u00E3o removido do estoque. Verifique o nome informado"));
        }
    };
    Farmacia.prototype.inserirMedicamento = function () {
        var nomeF = leitor.question("Informe o nome do medicamento: ");
        var precoF = leitor.questionFloat("Informe o preco do medicamento: ");
        var estoqueF = leitor.questionInt("Informe a quantidade de medicamentos a serem inseridos: ");
        var novoMedicamento = new Medicamento(nomeF, precoF, estoqueF);
        this.listaMedicamentos.push(novoMedicamento);
    };
    Farmacia.prototype.visuEstoque = function () {
        console.log('Estoque de medicamento:');
        this.listaMedicamentos.forEach(function (Medicamento) {
            console.log("Nome: ".concat(Medicamento.nome));
            console.log("Quantidade: ".concat(Medicamento.quantEstoque));
            console.log("Precos: ".concat(Medicamento.preco));
        });
    };
    return Farmacia;
}());
exports.Farmacia = Farmacia;
