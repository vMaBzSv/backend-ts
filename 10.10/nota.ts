import * as leitor from "readline-sync"

export class Alunos {
        nome: String
        notas: Array<number> = []

        constructor (nome: String){
            this.nome = nome
              
        }

    setNotas (nota1:number, nota2: number, nota3: number): void {

        this.notas.push(nota1)
        this.notas.push(nota2)
        this.notas.push(nota3)
    }
    
    getMedias (): number {
        let media = (this.notas[0] + this.notas[1] + this.notas[2]) / 3
        return media
    }
}

function cadastro (){
    let nome = leitor.question("Insira seu nome: ")
    let aluno = new Alunos(nome)
    console.log("Cadastrado com sucesso");
    
    let nota1 = leitor.questionFloat("Insira a nota 1: ")
    let nota2 = leitor.questionFloat("Insira a nota 2: ")
    let nota3 = leitor.questionFloat("Insira a nota 3: ")
    aluno.setNotas(nota1, nota2, nota3)
    return aluno
}

function main(): void {
    let aluno = cadastro()
    console.log(aluno.getMedias());
}

main()