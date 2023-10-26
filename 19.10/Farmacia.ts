import * as leitor from "readline-sync"

export class Medicamento {
        public nome: String
        public quantEstoque: number
        public preco: number

    constructor(nome: String, quantEstoque: number, preco: number){
        this.nome = nome
        this.quantEstoque = quantEstoque
        this.preco = preco
    }
}

export class Farmacia {
        public listaMedicamentos: Array<Medicamento>



    constructor(){
        this.listaMedicamentos = []
    }

    public vendaMedicamento(): void{
        let nome = leitor.question("Informe o nome do remedio para vender: ")
        let qtd = leitor.questionInt("Informe a quantidade: ")
        const medicamento = this.listaMedicamentos.find((m) => m.nome === nome)
        if (medicamento) {
            if(medicamento.quantEstoque >= qtd) {
                medicamento.quantEstoque -= qtd
                console.log(`Venda realizada: ${qtd} unidades de ${medicamento.nome}`);
            } else {
                console.log(`Estoque insuficiente para a venda de ${qtd} unidades de ${medicamento.nome}`);
            }
        } else {
            console.log(`Medicamento ${nome} não encontrado!`);
        }
    }

    public comprarMedicamento(): void{
        let nome: String = leitor.question("Informe o nome do medicamento: ")
        let preco = leitor.questionFloat("Informe o preco do medicamento: ")
        let qtd = leitor.questionInt("Informe a quantidade de medicamentos a serem inseridos: ")
        const medicamento = this.listaMedicamentos.find(m => m.nome === nome)
        if(medicamento){
            medicamento.quantEstoque +- qtd
            medicamento.preco = preco
        } else {
            const novoMedicamento = new Medicamento(nome, qtd, preco)
            this.listaMedicamentos.push(novoMedicamento)
        }
        console.log(`Compra realizada ${qtd} unidade de ${nome}`);
    }

    public subsMedicamento(): void{
        let nomeAntigo = leitor.question("Insira o nome do remedio a ser substituido: ")
    
        const medicamentoAntigo = this.listaMedicamentos.find((m) => m.nome === nomeAntigo)
        if(medicamentoAntigo){
            const index = this.listaMedicamentos.findIndex(m => m.nome === nomeAntigo)
            this.listaMedicamentos.splice(index, 1)

            let nomeNovo = leitor.question("Insira o nome do remedio a ser inserido no estoque: ")
            let preco = leitor.questionFloat("Informe o preco do medicamento: ")
            let estoque = leitor.questionInt("Informe a quantidade de medicamentos a serem inseridos: ")
            const medicamentoNovo = new Medicamento(nomeNovo, estoque, preco)
            this.listaMedicamentos.push(medicamentoNovo)
            console.log("Substituicaõ realizada!");            
        } else {
            console.log("Medicamento nao encontrado para remocao");
            
        }
    }   

    public removerMedicamento(): void{
        let nome: String = leitor.question("Informe o nome do medicamento que voce quer remover: ").toLowerCase()
        const index = this.listaMedicamentos.findIndex((m) => m.nome === nome)
        if(index){
            this.listaMedicamentos.splice(index, 1)
            console.log(`Medicamento ${nome} revomido do estoque`);
        } else {
            console.log(`Medicamento ${nome} não removido do estoque. Verifique o nome informado`);
        }
    }

    public inserirMedicamento(): void{
        let nomeF: String = leitor.question("Informe o nome do medicamento: ")
        let precoF = leitor.questionFloat("Informe o preco do medicamento: ")
        let estoqueF = leitor.questionInt("Informe a quantidade de medicamentos a serem inseridos: ")
        let novoMedicamento = new Medicamento(nomeF, precoF, estoqueF)
        this.listaMedicamentos.push(novoMedicamento)
    }
    
    public visuEstoque(): void{
        console.log('Estoque de medicamento:');
        this.listaMedicamentos.forEach(Medicamento => {
            console.log(`Nome: ${Medicamento.nome}`);
            console.log(`Quantidade: ${Medicamento.quantEstoque}`);
            console.log(`Precos: ${Medicamento.preco}`);
        });
        
    }
}