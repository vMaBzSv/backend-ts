import * as leitor from "readline-sync"

export class Calculadora {
    valor1: number
    valor2: number
    setValores(){
        let valor1 = leitor.questionFloat("Insira o primeiro numero: ")
        let valor2 = leitor.questionFloat("Insira o segundo numero: ")
        this.valor1 = valor1
        this.valor2 = valor2
    }

    getMais(): number {
        let soma = this.valor1 + this.valor2 
        return soma
    }
    
    getMenos(): number {
        let subtracao = this.valor1 - this.valor2 
        return subtracao;
    }

    getVezes(): number {
        let multiplicacao = this.valor1 * this.valor2 
        return multiplicacao;
    }

    getDividir(): number {
        let divisao = (this.valor1 / this.valor2) 
        return divisao;
    }
}

function main(){
    calculadora()
}

function calculadora (): void{
  let calculo = new Calculadora()
 calculo.setValores();
 console.log("A soma: ", calculo.getMais());
 console.log("A subtração: ", calculo.getMenos());
 console.log("A multiplicação: ", calculo.getVezes());
 console.log("A divisão: ", calculo.getDividir());
}

main()