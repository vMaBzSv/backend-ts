import * as leitor from "readline-sync"
function main (): void {
   let adulto = leitor.questionInt("Insira a quantidade de adultos existem na festa: ")
   let crianca = leitor.questionInt("Insira a quantidade de crianças na festa: ")
   console.log("The total party size is:", calcula(adulto, crianca));
    
}
function calcula (adulto, crianca): Number {
  return adulto + crianca

}

main()