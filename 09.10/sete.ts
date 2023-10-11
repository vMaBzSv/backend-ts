import * as leitor from "readline-sync"
function main() {
var horaHoje = leitor.questionFloat("Quanto tempo passou no telefone hoje? ");
    var horaOntem = leitor.questionFloat("Quanto tempo passou no telefone ontem? ");
    console.log(timeSpent(horaHoje, horaOntem));


    function timeSpent(a, b) {
        return a > b;
    }}
main()