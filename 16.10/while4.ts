import * as leitor from "readline-sync"

let continuar = true

while(continuar){
    const produtos = leitor.question("Insira o codigo dos produtos A, B ou C: ")
    switch(produtos){
        case "A":
            console.log("O valor do produto A é: R$100 ");
            break;
        case "B":
            console.log("O valor do produto B é: R$24 ");
            break;
        case "C":
            console.log("O valor do produto C é: R$1.000.000 ");
            break;
        default:
            console.log("A caractere tem que ser maiuscula! ");
            continuar = false
    }
}