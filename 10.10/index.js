"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa_1 = require("./Pessoa");
var leitor = require("readline-sync");
function main() {
    var humano = metodos();
    var decisao = leitor.question("Você deseja modificar o cadastro? (s/n): ");
    if (decisao === "s") {
        editarCadastro(humano);
    }
    else {
        console.log("Obrigado, saindo...");
    }
}
function cadastro() {
    var nome = leitor.question("Insira seu nome: ");
    var cpf = leitor.questionInt("Insira seu CPF: ");
    var RG = leitor.questionInt("Insira seu RG: ");
    var cor = leitor.question("Insira sua cor: ");
    var idade = leitor.questionInt("Insira sua idade: ");
    var humano = new Pessoa_1.Pessoa(nome, cpf, RG, cor, idade);
    return humano;
}
function metodos() {
    var humano = cadastro();
    humano.getNome();
    humano.getCPF();
    humano.getRG();
    humano.getCor();
    humano.getIdade();
    return humano;
}
function editarCadastro(humano) {
    humano.setNome();
    humano.setCPF();
    humano.setRG();
    humano.setCor();
    humano.setIdade();
    humano.getNome();
    humano.getCPF();
    humano.getRG();
    humano.getCor();
    humano.getIdade();
}
main();
