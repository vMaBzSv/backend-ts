import * as leitor from "readline-sync"

let menu = true

while(menu){
    let teste = true
    const notas = Number (leitor.questionInt("Insira uma nota de 0 a 100 ou 101 para fechar: "))
    switch(teste){
        case (notas <= 20):
            console.log("Seu conceito e o F :( ");
            break;
        case (notas <= 40):
            console.log("Seu conceito e o D :/ ");
            break;
        case (notas <= 60):
            console.log("Seu conceito e o C :| ");
            break;
        case (notas <= 80):
            console.log("Seu conceito e o B :) ");
            break;
        case (notas <= 100):
            console.log("Seu conceito e o A :D ");
            break;
        case (notas === 101):
            console.log("Saindo...");
            menu = false 
            break;
        default:
            console.log("Saindo...");
            break;
    }
}