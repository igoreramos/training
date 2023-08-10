function soma(a, b) {
    return a + b
}
function multiplicacao(a, b ) {
    return a * b
}
function subtracao(a, b) {
    return a - b
}
function divisao(a, b) {
    return a / b
}

var n1 = 12
var n2 = 6
var op = "/"

var resultado 

if (op == "+") {
    resultado = soma(n1, n2)
}
else if (op == "-") {
    resultado = subtracao(n1, n2)
}
else if (op == "*") {
    resultado = multiplicacao(n1, n2)
}
else if (op == "/") {
    resultado = divisao(n1,n2)
}

console.log(resultado)