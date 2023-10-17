import * as leitor from "readline-sync"

let menu = true

while(menu){
    const numero = Number(leitor.questionInt("Insira um numero de 1 a 5 ou 0 para sair : "))
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
        case 4: 
            console.log("Voce escolheu o numero 4");
            break;
        case 5:
            console.log("Você escolheu o numero 5");
            break;
        case 0:
            console.log("Saindo...");
            menu = false
            break;
        default:
            console.log("Você escolheu um numero indevido");
    }
}

