import * as leitor from "readline-sync"

let continuar = true

while(continuar){
    const calendario = Number(leitor.questionInt("Insira um numero de 1 a 12: "));
    switch(calendario){
        case 1:
            console.log("Janeiro e o seu mes :) ");
            break;
        case 2:
            console.log("Fevereiro e o seu mes :) ");
            break;
        case 3:
            console.log("Março e o seu mes :) ");
            break;
        case 4: 
            console.log("Abril e o seu mes :) ");
            break;
        case 5:
            console.log("Maio e o seu mes :) ");
            break;
        case 6: 
            console.log("Junho e o seu mes :) ");
            break;
        case 7:
            console.log("Julho e o seu mes :) ");
            break;
        case 8: 
            console.log("Agosto e o seu  mes :) ");
            break;
        case 9: 
            console.log("Setembro e o seu mes :) ");
            break;
        case 10: 
            console.log("Outubro e o seu mes :) ");
            break;
        case 11:
            console.log("Novembro e o seu mes :) ");
            break;
        case 12: 
            console.log("Dezembro e o seu mes :) ");
            break;
        default:
            console.log("Numero invalido.");
            continuar = false
    }
}