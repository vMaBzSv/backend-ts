"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
var farmacia_1 = require("./farmacia");
var farmaciaNew = new farmacia_1.Farmacia("Dos Guri", "São Hell");
var menu = true;
while (menu) {
    var opt = leitor.questionInt("\n 1 - Vender medicamentos \n2 - Comprar medicamentos \n 3 - Substituir algum medicamento \n 4- Remover algum medicamento \n 5 - Inserir medicamento \n 6 - Visualizar estoque \n 7 - Sair \n: ");
    switch (opt) {
        case 1:
        case 5:
            farmaciaNew.getMedicamento();
            break;
        case 6:
            farmaciaNew.visuMedicamento();
            break;
        case 7:
            console.log("Saindo...");
            menu = false;
            break;
    }
}
