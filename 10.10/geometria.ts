import * as leitor from "readline-sync"

export class Circulo {
    raio: number
    pi: number

    getAreaCirculo(): void{
        const pi = 3.14
        let raio = leitor.questionInt("Insira o valor do raio circular: ")
        let areacirculo = pi * raio

    }

}
