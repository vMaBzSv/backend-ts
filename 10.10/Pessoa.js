"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
var leitor = require("readline-sync");
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, cpf, RG, cor, idade) {
        this.nome = nome;
        this.cpf = cpf;
        this.RG = RG;
        this.cor = cor;
        this.idade = idade;
    }
    Pessoa.prototype.getNome = function () {
        console.log("Ol\u00E1, meu nome \u00E9 ".concat(this.nome));
    };
    Pessoa.prototype.getCPF = function () {
        console.log("meu CPF \u00E9: ".concat(this.cpf));
    };
    Pessoa.prototype.getRG = function () {
        console.log("meu RG \u00E9: ".concat(this.RG));
    };
    Pessoa.prototype.getCor = function () {
        console.log("minha cor \u00E9: ".concat(this.cor));
    };
    Pessoa.prototype.getIdade = function () {
        console.log("minha idade \u00E9: ".concat(this.idade));
    };
    Pessoa.prototype.setNome = function () {
        var nomeDois = leitor.question("Insira o novo nome: ");
        this.nome = nomeDois;
    };
    Pessoa.prototype.setCPF = function () {
        var cpfDois = leitor.question("Insira o novo cpf: ");
        this.cpf = cpfDois;
    };
    Pessoa.prototype.setRG = function () {
        var rgDois = leitor.question("Insira seu novo RG: ");
        this.RG = rgDois;
    };
    Pessoa.prototype.setCor = function () {
        var corDois = leitor.question("Insira sua nova cor: ");
        this.cor;
    };
    Pessoa.prototype.setIdade = function () {
        var idadeDois = leitor.question("Insira sua nova idade: ");
        this.idade = idadeDois;
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
