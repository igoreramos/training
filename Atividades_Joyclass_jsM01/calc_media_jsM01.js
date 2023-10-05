const readline = require ("readline-sync")

function calcularMedia() {
    var nota1 = readline.question("Digite a primeira nota (De 0 a 10): ");
    var nota2 = readline.question("Digite a segunda nota (De 0 a 10): ");
    var nota3 = readline.question("Digite a terceira nota (De 0 a 10): ");
    return (nota1 + nota2 + nota3) / 3
}
console.log(calcularMedia());