import { Pessoa } from "./Pessoa";
import * as leitor from "readline-sync"

function main(): void{
    const humano = metodos()
    let decisao = leitor.question("Você deseja modificar o cadastro? (s/n): ")
    if(decisao === "s"){
        editarCadastro(humano)
    } else {
        console.log("Obrigado, saindo...");
        
    }
}
   
function cadastro (): Pessoa  {
let nome = leitor.question("Insira seu nome: ")
let cpf = leitor.questionInt("Insira seu CPF: ")
let RG = leitor.questionInt("Insira seu RG: ")
let cor = leitor.question("Insira sua cor: ")
let idade = leitor.questionInt("Insira sua idade: ")
const humano = new Pessoa(nome, cpf, RG, cor, idade)
   return humano
}

function metodos (): Pessoa {
const humano = cadastro()
    humano.getNome()
    humano.getCPF()
    humano.getRG()
    humano.getCor()
    humano.getIdade() 
    return humano
}

function editarCadastro(humano: Pessoa){
    humano.setNome()
    humano.setCPF()
    humano.setRG()
    humano.setCor()
    humano.setIdade()
    humano.getNome()
    humano.getCPF()
    humano.getRG()
    humano.getCor()
    humano.getIdade()
}

main()