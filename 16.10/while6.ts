import * as leitor from "readline-sync"

let menu = true

while(menu){
    let transporte = leitor.question("Escolha um dos meios de transporte a seguir ou digite 'Sair' para fechar: Carro, Onibus ou Bicicleta: ").toLowerCase()
    switch(transporte){
        case "carro":
            console.log("A velocidade media de um carro em uma rodovia é: 110km/h ");
            break
        case "onibus":
            console.log("A velocidade média de um onibus é: 17 km/h ");
            break;
        case "bicicleta":
            console.log("A velocidade media de uma bicicleta é: 15km/h até 25km/h ");
            break;
        case "sair":
            console.log("Saindo...");
            menu = false
            break;
        default:
            console.log("Opção inexistente");
            break;
    }
}