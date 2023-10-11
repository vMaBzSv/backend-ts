import * as leitor from "readline-sync"

function main() {
    let num1 = leitor.questionFloat("Insira um número: ");
    let num2 = leitor.questionFloat("Insira outro número: ");
    let num3 = leitor.questionFloat("Insira mais um número: ");
    console.log(`A adição dos ${num1}, ${num2} e ${num3} resulta em: ${soma(num1, num2, num3)}`);
    console.log(`A subtração dos ${num1}, ${num2} e ${num3} resulta em: ${subtração(num1, num2, num3)}`);
    console.log(`A multiplicação dos ${num1}, ${num2} e ${num3} resulta em: ${multiplicação(num1, num2, num3)}`);
    console.log(`A divisão dos ${num1}, ${num2} e ${num3} resulta em: ${divisão(num1, num2, num3)}`);
    
}

function soma (numero1, numero2, numero3): Number {
  return numero1 + numero2 + numero3
}

function subtração (numero1, numero2, numero3): Number {
  return numero1 - numero2 - numero3
       
}

function multiplicação (num1, num2, num3): Number {
  return num1 * num2 * num3
}

function divisão (numero1, numero2, numero3): Number {
  return numero1 / numero2 / numero3
}

main()