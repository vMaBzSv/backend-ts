import { sistemaBiblioteca } from "./Classes";
import * as leitor from "readline-sync"
let biblioteca = new sistemaBiblioteca();
while(true){
    let opt = leitor.questionInt("\n 1 - Cadastrar Livro \n 2 - Cadastrar Usuario \n 3 - Emprestar Livro \n 4 - Devolver Livro \n 5 - Consultar Livros Disponiveis \n 6 - Sair \n : ")
    switch(opt){
        case 1:
            biblioteca.cadastrarLivro();
            break;
        case 2:
            biblioteca.cadastrarUsuario();
            break;
        case 3:
            biblioteca.emprestarLivro();
            break;
        case 4:
            biblioteca.devolverLivro();
            break;
        case 5:
            biblioteca.consultarLivrosDisponiveis();
            break;
        case 6:
            console.log("Saindo...");
            process.exit(0)
    };
        

};