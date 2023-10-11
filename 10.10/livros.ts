import * as leitor from "readline-sync"

function main (): void {
    let titulo = leitor.question("Insira o titulo do livro: ")
    let autor = leitor.question("Insira o autor do livro: ")
    let anoPub = leitor.question("Insira o ano de publicacao do livro: ")
    const livro = new Livros(titulo, autor, anoPub)
    livro.obterDetalhes()


}
   
export class Livros {
        titulo: String
        autor: String
        anoPublicacao: Number


        constructor (titulo: String, autor: String, anoPublicacao: Number){
            this.titulo = titulo
            this.autor = autor
            this.anoPublicacao = anoPublicacao
    }   

        obterDetalhes (): void {
            console.log(`Olá o titulo do livro é: ${this.titulo}`);
            console.log(`O autor do livro é: ${this.autor}`);
            console.log(`E o ano de publicacao é: ${this.anoPublicacao}`);
        }
}
main ()
