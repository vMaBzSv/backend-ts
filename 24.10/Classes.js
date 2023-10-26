"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sistemaBiblioteca = exports.Usuario = exports.Livro = void 0;
var leitor = require("readline-sync");
var Livro = /** @class */ (function () {
    function Livro(id, titulo, autor, anoPublicacao, quantidadeDisponivel) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.quantidadeDisponivel = quantidadeDisponivel;
    }
    ;
    return Livro;
}());
exports.Livro = Livro;
;
var Usuario = /** @class */ (function () {
    function Usuario(usuarioId, nome, email) {
        this.usuarioId = usuarioId;
        this.nome = nome;
        this.email = email;
        this.livrosEmprestados = [];
    }
    ;
    return Usuario;
}());
exports.Usuario = Usuario;
;
;
var sistemaBiblioteca = /** @class */ (function () {
    function sistemaBiblioteca() {
        this.livros = [];
        this.usuarios = [];
    }
    sistemaBiblioteca.prototype.cadastrarLivro = function () {
        var livroId = leitor.questionInt("Informe o ID do livro: ");
        var titulo = leitor.question("Informe o titulo do livro: ");
        var autor = leitor.question("Informe o autor do livro: ");
        var anoPublicacao = leitor.questionInt("Informe o ano de publicacao do livro: ");
        var quantidadeDisponivel = leitor.question("Informe a quantidade para ser adicionada ao estoque: ");
        var livroNovo = new Livro(livroId, titulo, autor, anoPublicacao, quantidadeDisponivel);
        this.livros.push(livroNovo);
    };
    ;
    sistemaBiblioteca.prototype.cadastrarUsuario = function () {
        var usuarioId = leitor.questionInt("Insira o seu ID: ");
        var nome = leitor.question("Insira o seu nome: ");
        var email = leitor.question("Informe o seu email: ");
        var usuario = new Usuario(usuarioId, nome, email);
        this.usuarios.push(usuario);
        return console.log("Usuario ".concat(Usuario, " cadastrado com sucesso :) \n"));
    };
    ;
    sistemaBiblioteca.prototype.emprestarLivro = function () {
        var livroId = leitor.questionInt("Informe o ID do livro que voce quer emprestar: ");
        var usuarioIdEmp = leitor.questionInt("Informe o ID do usuario que concedera o livro: ");
        var index = this.livros.findIndex(function (livro) { return livro.id === livroId; });
        var indexUser = this.usuarios.findIndex(function (usuario) { return usuario.usuarioId === usuarioIdEmp; });
        if ((index >= 0) && (indexUser >= 0)) {
            var livrosEmp3 = this.usuarios.find(function (livrosemp) { return livrosemp.livrosEmprestados.length < 3 === true; });
            if (livrosEmp3 && this.livros[index].quantidadeDisponivel >= 1) {
                this.livros[index].quantidadeDisponivel -= 1;
                this.usuarios[indexUser].livrosEmprestados.push(livroId);
                console.log("Voce acabou de pegar emprestado o livro ".concat(this.livros[index].titulo, ". tmj paizinho :) \n "));
            }
            else if (livrosEmp3 && this.livros[index].quantidadeDisponivel < 1) {
                console.log("Sinto muito, o livro ".concat(this.livros[index].titulo, " n\u00E3o possui quantidade suficiente para ser emprestado. :( \n "));
            }
            else if (!livrosEmp3) {
                console.log("O usuario ".concat(usuarioIdEmp, " ja emprestou 3 livros. Devolva primeiro para pegar outro. :) \n "));
            }
            else {
                console.log("ID do livro ou ID do usuario incorreto. \n");
            }
        }
        ;
    };
    ;
    sistemaBiblioteca.prototype.devolverLivro = function () {
        var livroDev = leitor.questionInt("Informe o ID do livro para ser devolvido: ");
        var usuarioDev = leitor.questionInt("Informe o ID do usuario a devolver o livro: ");
        var index = this.livros.findIndex(function (livroDevu) { return livroDevu.id === livroDev; });
        var indexUser = this.usuarios.findIndex(function (usuario) { return usuario.usuarioId === usuarioDev; });
        if ((index >= 0) && (index >= 0)) {
            this.livros[index].quantidadeDisponivel += 1;
            this.usuarios[indexUser].livrosEmprestados.splice(index, 1);
            console.log("Voce acabou de devolver o livro ".concat(this.livros[index].titulo, " :) \n "));
        }
        else {
            console.log("ID do livro ou de Usuario incorreta. \n ");
        }
    };
    ;
    sistemaBiblioteca.prototype.consultarLivrosDisponiveis = function () {
        console.log('Livros disponiveis: \n');
        this.livros.forEach(function (Livro) {
            console.log("ID: ".concat(Livro.id));
            console.log("Titulo: ".concat(Livro.titulo));
            console.log("Autor: ".concat(Livro.autor));
            console.log("Ano De Publicacao: ".concat(Livro.anoPublicacao));
            console.log("Quantidade Disponivel: ".concat(Livro.quantidadeDisponivel, " \n "));
        });
    };
    ;
    return sistemaBiblioteca;
}());
exports.sistemaBiblioteca = sistemaBiblioteca;
;
