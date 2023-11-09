import { sistemafarmacia } from "./Classes";
import { Farmacia } from "./Classes";
import * as leitor from "readline-sync";
import farmacia from "./database";

main()

async function main() {

    while (true) {

        const farmacia = new Farmacia();

        console.log(`Seja bem-vindo ao sistema de farmacia!`);
        console.log(`1 - Cadastrar Usuario`);
        console.log(`2 - Cadastrar Medicamento`);
        console.log(`3 - Comprar Medicamento`);
        console.log(`4 - Vender Medicamento`);
        console.log(`5 - Medicamentos Disponiveis`);
        console.log(`6 - Usuarios Disponiveis`);
        console.log(`7 - Deletar Usuario`);
        console.log(`8 - Deletar Medicamentos`);
        console.log(`0 - Sair`);


        let opcao = leitor.questionInt(`Informe a opcao desejada: `);

        switch (opcao) {
            case 1:
                await farmacia.cadastrarUsuario();
                break;
            case 2:
                await farmacia.cadastrarMedicamento();
                break;
            case 3:
                await farmacia.compraMedicamento();
                break;
            case 4:
                await farmacia.vendaMedicamento();
                break;
            case 5:
                await farmacia.medicamentosBanco();
                break;
            case 6:
                await farmacia.usuariosBanco();
                break;
            case 7:
                await farmacia.deletarUsuario();
                break;
            case 8:
                await farmacia.deletarMedicamento();
                break;
            case 0:
                console.log(`Saindo, volte sempre.`);
                process.exit(0);
            default:
                console.log(`Opção inválida!\n`);
                break;
        };
    };
};