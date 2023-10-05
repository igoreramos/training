const readline = require("readline-sync")

function calcularMedia1() {
    const nota1 = parseFloat(readline.question("Digite a nota de 0 a 10: "))
    const nota2 = parseFloat(readline.question("Digite a nota de 0 a 10: "))
    const nota3 = parseFloat(readline.question("Digite a nota de 0 a 10: "))
    const media = (nota1 + nota2 + nota3) / 3
    console.log(`A média é: ${media.toFixed(1)}`);
}
calcularMedia1()