"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
function main() {
    var usuario = leitor.question("Insira seu nome de usuário: ");
    var operacional = leitor.question("Insira o sistema operacional que você utiliza: ");
    console.log("".concat(displayAlertMessage(usuario, operacional)));
}
function displayAlertMessage(user, oper) {
    return "There's a new sign-in request on ".concat(oper, " for your Google Account ").concat(user, ".");
}
main();
