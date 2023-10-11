import * as leitor from "readline-sync"
function main(): void {
   let usuario = leitor.question(
       "Insira seu nome de usuário: "
     );
     let operacional = leitor.question(
       "Insira o sistema operacional que você utiliza: "
     );
     console.log(`${displayAlertMessage(usuario, operacional)}`);
 }

 function displayAlertMessage(user, oper){
return `There's a new sign-in request on ${oper} for your Google Account ${user}.`
 }

 main()