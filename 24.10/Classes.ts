import * as leitor from "readline-sync";

export class Livro {
    public id: number;
    public titulo: string;
    public autor: string;
    public anoPublicacao: number;
    public quantidadeDisponivel: number;

    constructor(id: number, titulo: string, autor: string, anoPublicacao: number, quantidadeDisponivel: number){
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.quantidadeDisponivel =  quantidadeDisponivel
    };
};

export class Usuario {
    public usuarioId: number;
    public nome: string;
    public email: string;
    public livrosEmprestados: Array<Livro>;

    constructor(usuarioId: number, nome: string, email: string){
        this.usuarioId = usuarioId;
        this.nome = nome;
        this.email = email;
        this.livrosEmprestados = [];
    };
};

interface Biblioteca {
    cadastrarLivro(): void
    cadastrarUsuario(): void
    emprestarLivro(): void
    devolverLivro(): void
    consultarLivrosDisponiveis():void   
};

export class sistemaBiblioteca implements Biblioteca{
    livros: Array<Livro> = [];
    usuarios: Array<Usuario> = [];

    cadastrarLivro(): void {
        let livroId = leitor.questionInt("Informe o ID do livro: ")
        let titulo = leitor.question("Informe o titulo do livro: ")
        let autor = leitor.question("Informe o autor do livro: ")
        let anoPublicacao = leitor.questionInt("Informe o ano de publicacao do livro: ")
        let quantidadeDisponivel = leitor.question("Informe a quantidade para ser adicionada ao estoque: ")
        let livroNovo = new Livro(livroId, titulo, autor, anoPublicacao,  quantidadeDisponivel)
        this.livros.push(livroNovo)
    };
    cadastrarUsuario(): void {
        let usuarioId = leitor.questionInt("Insira o seu ID: ")
        let nome = leitor.question("Insira o seu nome: ")
        let email = leitor.question("Informe o seu email: ")
        let usuario = new Usuario(usuarioId, nome, email)
        this.usuarios.push(usuario)
        return console.log(`Usuario ${Usuario} cadastrado com sucesso :) \n`);
    };
    emprestarLivro(): void {
        let livroId = leitor.questionInt("Informe o ID do livro que voce quer emprestar: ")
        let usuarioIdEmp = leitor.questionInt("Informe o ID do usuario que concedera o livro: ")
        let index = this.livros.findIndex(livro => livro.id === livroId)
        let indexUser = this.usuarios.findIndex(usuario => usuario.usuarioId === usuarioIdEmp)
        if((index >= 0) && (indexUser >= 0)){
            let livrosEmp3 = this.usuarios.find(livrosemp => livrosemp.livrosEmprestados.length < 3 === true)
            if(livrosEmp3 && this.livros[index].quantidadeDisponivel >= 1){
                this.livros[index].quantidadeDisponivel -= 1
                this.usuarios[indexUser].livrosEmprestados.push(livroId)
                console.log(`Voce acabou de pegar emprestado o livro ${this.livros[index].titulo}. tmj paizinho :) \n `);    
            } else if (livrosEmp3 && this.livros[index].quantidadeDisponivel < 1){
                console.log(`Sinto muito, o livro ${this.livros[index].titulo} não possui quantidade suficiente para ser emprestado. :( \n `);
            } else if (!livrosEmp3){
                console.log(`O usuario ${usuarioIdEmp} ja emprestou 3 livros. Devolva primeiro para pegar outro. :) \n `);
            } else {
                console.log(`ID do livro ou ID do usuario incorreto. \n`);
            }

        };
    };
    devolverLivro(): void{
        let livroDev = leitor.questionInt("Informe o ID do livro para ser devolvido: ")
        let usuarioDev = leitor.questionInt("Informe o ID do usuario a devolver o livro: ")
        let index = this.livros.findIndex(livroDevu => livroDevu.id === livroDev)
        let indexUser = this.usuarios.findIndex(usuario => usuario.usuarioId === usuarioDev)
        if((index >= 0) && (index >= 0)){
            this.livros[index].quantidadeDisponivel += 1
            this.usuarios[indexUser].livrosEmprestados.splice(index, 1)
            console.log(`Voce acabou de devolver o livro ${this.livros[index].titulo} :) \n `);
        } else {
            console.log(`ID do livro ou de Usuario incorreta. \n `);
        }
    };
    consultarLivrosDisponiveis(): void {
        console.log('Livros disponiveis: \n');
        this.livros.forEach(Livro => {
            console.log(`ID: ${Livro.id}`);
            console.log(`Titulo: ${Livro.titulo}`);
            console.log(`Autor: ${Livro.autor}`);
            console.log(`Ano De Publicacao: ${Livro.anoPublicacao}`);
            console.log(`Quantidade Disponivel: ${Livro.quantidadeDisponivel} \n `);
        });
    };        
};   


