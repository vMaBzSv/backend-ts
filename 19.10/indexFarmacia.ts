import * as leitor from "readline-sync"
import { Farmacia } from "./farmacia"
import { Medicamento } from "./farmacia"

let farmaciaNew = new Farmacia("Dos Guri", "São Hell") 
let menu = true

while(menu){
    let opt = leitor.questionInt("\n 1 - Vender medicamentos \n2 - Comprar medicamentos \n 3 - Substituir algum medicamento \n 4- Remover algum medicamento \n 5 - Inserir medicamento \n 6 - Visualizar estoque \n 7 - Sair \n: ")
    switch(opt){
        case 1:








        case 5:
            farmaciaNew.getMedicamento()
            break;
        case 6: 
            farmaciaNew.visuMedicamento()
            break
        case 7:
            console.log("Saindo...");
            menu = false
            break;
    }
} 
