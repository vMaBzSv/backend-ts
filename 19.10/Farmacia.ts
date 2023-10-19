import * as leitor from "readline-sync"

export class Medicamento {
    nome: String
    quantEstoque: Number
    preco: Number

    constructor(nome: String, quantEstoque: Number, preco: Number){
        this.nome = nome
        this.quantEstoque = quantEstoque
        this.preco = preco
    }
}

export class Farmacia {
    nomeFarmacia: String
    Endereço: String
    listaMedicamentos: Array<Medicamento>



    constructor(nomeFarmacia: String, Endereço: String){
        this.listaMedicamentos = []
    }

    vendaMedicamento(): void{

    }

    compraMedicamento(): void{

    }

    subsMedicamento(): void{

    }

    removerMedicamento(): void{
        let removerM = leitor.question("Informe o nome do medicamento que voce quer remover: ")
        this.listaMedicamentos = this.listaMedicamentos.filter(funcionario => Medicamento.nome !== removerM )
    }

    getMedicamento(): void{
        let nomeF = leitor.question("Informe o nome do medicamento: ")
        let precoF = leitor.questionFloat("Informe o preco do medicamento: ")
        let estoqueF = leitor.questionInt("Informe a quantidade de medicamentos a serem inseridos: ")
        let novoMedicamento = new Medicamento(nomeF, precoF, estoqueF)
        this.listaMedicamentos.push(novoMedicamento)
        console.log(`O medicamento ${nomeF} foi adicionado ao seu estoque. `);
        
    }
    
    visuMedicamento(): void{
        console.log(this.listaMedicamentos);
    }
}
