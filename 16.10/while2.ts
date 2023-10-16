import * as leitor from "readline-sync"

let continuar = true

while(continuar){
    const cor = leitor.question("Insira as cores primarias: ")
    switch(cor){
        case "amarelo":
            console.log("Amarelo me lembra girassol");
            break;
        case "vermelho":
            console.log("Vermelho me lembra fogo");
            break;
        case "azul":
            console.log("Azul me lembra água");
            break;
        default:
            console.log("Insira verde, vermelho ou azul");
            continuar = false
    }
}
