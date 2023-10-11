"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alunos = void 0;
var leitor = require("readline-sync");
var Alunos = /** @class */ (function () {
    function Alunos(nome) {
        this.notas = [];
        this.nome = nome;
    }
    Alunos.prototype.setNotas = function (nota1, nota2, nota3) {
        this.notas.push(nota1);
        this.notas.push(nota2);
        this.notas.push(nota3);
    };
    Alunos.prototype.getMedias = function () {
        var media = (this.notas[0] + this.notas[1] + this.notas[2]) / 3;
        return media;
    };
    return Alunos;
}());
exports.Alunos = Alunos;
function cadastro() {
    var nome = leitor.question("Insira seu nome: ");
    var aluno = new Alunos(nome);
    console.log("Cadastrado com sucesso");
    var nota1 = leitor.questionFloat("Insira a nota 1: ");
    var nota2 = leitor.questionFloat("Insira a nota 2: ");
    var nota3 = leitor.questionFloat("Insira a nota 3: ");
    aluno.setNotas(nota1, nota2, nota3);
    return aluno;
}
function main() {
    var aluno = cadastro();
    console.log(aluno.getMedias());
}
main();
