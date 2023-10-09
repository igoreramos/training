function soma(a, b) {
    return a + b
}
function multiplicacao(a, b) {
    return a * b
}
function subtracao(a, b) {
    return a - b
}
function divisao(a, b) {
    return a / b
}

const readline = require(`readline-sync`)

let n1 = parseInt(readline.question(`Digite o primeiro número: `));
let n2 = parseInt(readline.question(`Digite o segundo número: `));
let op = readline.question(`Digite a operação desejada: `);

let resultado

if (op == "+") {
    resultado = soma(n1, n2);
}
else if (op == "-") {
    resultado = subtracao(n1, n2);
}
else if (op == "*") {
    resultado = multiplicacao(n1, n2);
}
else if (op == "/") {
    resultado = divisao(n1, n2)
    console.log(`O resto da divisão é: ${divisao(n1, n2) % 2}`);
};

console.log(`O resultado é: ${resultado}`);