import * as leitor from "readline-sync"
export class Pessoa {
    nome: String
    cpf: Number
    RG: Number
    cor: String
    idade: Number

    constructor(nome: String, cpf: Number, RG: Number, cor: String, idade: Number) {
        this.nome = nome
        this.cpf = cpf
        this.RG = RG
        this.cor = cor
        this.idade = idade
        }
    getNome() {
      console.log(`Olá, meu nome é ${this.nome}`);
      
    }

    getCPF() {
      console.log(`meu CPF é: ${this.cpf}`);
    }

    getRG() {
      console.log(`meu RG é: ${this.RG}`);
    }

    getCor() {
      console.log(`minha cor é: ${this.cor}`);
    }

    getIdade() {
     console.log(`minha idade é: ${this.idade}`);
    }

    setNome() {
      let nomeDois = leitor.question("Insira o novo nome: ")
      this.nome = nomeDois
    }

    setCPF(){
      let cpfDois = leitor.question("Insira o novo cpf: ")
      this.cpf = cpfDois
   }
   
   setRG () {
      let rgDois = leitor.question("Insira seu novo RG: ")
      this.RG = rgDois
   }

   setCor () {
     let corDois = leitor.question("Insira sua nova cor: ")
     this.cor
   }

   setIdade () {
    let idadeDois = leitor.question("Insira sua nova idade: ")
    this.idade = idadeDois
   }


}