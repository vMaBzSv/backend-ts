import * as leitor from "readline-sync"

let continuar = true

while(continuar){
    const numero = Number(leitor.questionInt("Insira um numero de 1 a 3: "))
    switch(numero){
        case 1: 
            console.log("Você escolheu o numero 1");
            break;

        case 2: 
            console.log("Você escolheu o numero 2");
            break;

        case 3: 
            console.log("Você escolheu o numero 3");
            break;
        default:
            console.log("Você escolheu um numero indevido. Saindo...");
            continuar = false
    }
}

