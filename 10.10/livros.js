"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livros = void 0;
var leitor = require("readline-sync");
function main() {
    var titulo = leitor.question("Insira o titulo do livro: ");
    var autor = leitor.question("Insira o autor do livro: ");
    var anoPub = leitor.question("Insira o ano de publicacao do livro: ");
    var livro = new Livros(titulo, autor, anoPub);
    livro.obterDetalhes();
}
var Livros = /** @class */ (function () {
    function Livros(titulo, autor, anoPublicacao) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
    }
    Livros.prototype.obterDetalhes = function () {
        console.log("Ol\u00E1 o titulo do livro \u00E9: ".concat(this.titulo));
        console.log("O autor do livro \u00E9: ".concat(this.autor));
        console.log("E o ano de publicacao \u00E9: ".concat(this.anoPublicacao));
    };
    return Livros;
}());
exports.Livros = Livros;
main();
