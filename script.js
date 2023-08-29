// 1. Faça um programa que leia o nome do aluno, três notas e mostre o nome e a média(aritmética) do aluno.

// const readline = require("readline-sync");
// const nomeAluno = readline.question("Qual é o seu nome?");
// const nota1 = parseFloat(readline.question("Qual sua primeira nota?"));
// const nota2 = parseFloat(readline.question("Qual sua segunda nota?"));
// const nota3 = parseFloat(readline.question("Qual sua terceira nota?"));
// const media = (nota1 + nota2 + nota3) / 3;


// console.log(`Nome do aluno: ${nomeAluno}`);
// console.log(`Média do aluno: ${media}`);

// 2. Faça um programa com Javascript para verificar se um determinado ano, fornecido pelo usuário, é bissexto. 
// Um ano é bissexto se for divisível por 400 ou se for divisível por 4 e não for divisível por 100.Exemplos: 1988, 1992, 1996, 2000.
// Repare que 1900 não é bissexto.

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question("Digite um ano: ", function(ano) {
//   ano = parseInt(ano);

//   if ((ano % 400 === 0) || ((ano % 4 === 0) && (ano % 100 !== 0))) {
//     console.log(`${ano} é um ano bissexto.`);
//   } else {
//     console.log(`${ano} não é um ano bissexto.`);
//   }

//   rl.close();
// });

// 3. Uma determinada empresa vende seus produtos em quatro diferentes estados. 
// Cada estado possui uma taxação de imposto diferente sobre o produto (MG: 7%; SP: 12%; RJ: 15%; MS: 8%).
// Faça um programa em Javascript, que o usuário entre com o valor e o estado destino do produto e o programa retorne o 
// preço final do produto acrescido do imposto correspondente ao estado onde será vendido. 
// O programa deve mostrar uma mensagem de erro caso o estado fornecido não esteja na lista de estados válidos.


// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// const estadosValidos = ['MG', 'SP', 'RJ', 'MS'];
// const taxasImposto = {
//   'MG': 0.07,
//   'SP': 0.12,
//   'RJ': 0.15,
//   'MS': 0.08
// };

// rl.question("Digite o valor do produto: ", function(valorProduto) {
//   rl.question("Digite o estado de destino (sigla): ", function(estado) {
//     estado = estado.toUpperCase();

//     if (estadosValidos.includes(estado)) {
//       const taxa = taxasImposto[estado];
//       const precoFinal = parseFloat(valorProduto) * (1 + taxa);

//       console.log(`O preço final do produto no estado ${estado} é R$ ${precoFinal.toFixed(2)}`);
//     } else {
//       console.log("Estado inválido. Por favor, digite uma sigla de estado válida.");
//     }

//     rl.close();
//   });
// });

// 4. Faça um programa que calcule e mostre a soma dos 50 primeiros números pares. Faça três versões desse programa, cada uma usando uma estrutura de repetição diferente (for, while, do-while). Qual das três estruturas é a mais adequada para este programa? Por que?

// let soma = 0;
// for (let i = 0; i <= 100; i += 2) {
//   soma += i;
// }
// console.log(`A soma dos 50 primeiros números pares é: ${soma}`);

// let soma1 = 0;
// let i1 = 0;
// while (i1 <= 100) {
//   soma1 += i1;
//   i1 += 2;
// }
// console.log(`A soma dos 50 primeiros números pares é: ${soma1}`);

// let soma2 = 0;
// let i2 = 0;
// do {
//   soma2 += i2;
//   i2 += 2;
// } while (i2 <= 100);
// console.log(`A soma dos 50 primeiros números pares é: ${soma2}`);

// 5.  Faça um programa em Javascript que receba do usuário um número N e depois imprima os N primeiros números naturais ímpares.

const readline = require("readline-sync");
const N = parseInt(readline.question("Digite um número N: "));

for (let contador = 0, numeroImpar = 1; contador < N; contador++, numeroImpar += 2) {
  console.log(numeroImpar);
}











