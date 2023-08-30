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

// 4. Faça um programa que calcule e mostre a soma dos 50 primeiros números pares. Faça três versões desse programa, 
// cada uma usando uma estrutura de repetição diferente (for, while, do-while). 
// Qual das três estruturas é a mais adequada para este programa? Por que?

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

// const readline = require("readline-sync");
// const N = parseInt(readline.question("Digite um número N: "));

// for (let contador = 0, numeroImpar = 1; contador < N; contador++, numeroImpar += 2) {
//   console.log(numeroImpar);
// }

// 6. Uma empresa contrata um encanador a R$ 30,00 por dia. Crie um programa que solicite o número 
// de dias trabalhados pelo encanador e imprima a quantia líquida que deverá ser paga, sabendo-se que 
// são descontados 8% para pagamento de impostos e taxas devidas.

// const readline = require("readline-sync");
// const valorDiario = 30;
// const diasTrabalhados = parseFloat(readline.question("Digite os dias trabalhados: "));
// const salarioBruto = valorDiario * diasTrabalhados;
// const desconto = salarioBruto * 0.08;
// const salarioLiquido = salarioBruto - desconto;
// console.log(`O salário bruto do Encanador é ${salarioBruto}. Tendo trabalhado ${diasTrabalhados} dias e sendo descontado 8% para impostos e 
// taxas devidas, o Encanador recebeu ${salarioLiquido}`);

// 7. Faça um programa para ler um horário (hora:minuto:segundo) de início e a duração, em segundos, de uma experiência biológica.
//  O programa deve informar o horário (hora:minuto:segundo) de término da mesma.

// const readline = require("readline-sync");
// function formatNumber(number) {
//   return number < 10 ? `0${number}` : number;
// };
// const inicio = readline.question("Digite o horário de início (hh:mm:ss): ");
// const [inicioHora, inicioMinuto, inicioSegundo] = inicio.split(":").map(Number);
// const duracaoSegundos = parseInt(readline.question("Digite a duração em segundos: "));
// const segundosTotais = (inicioHora * 3600) + (inicioMinuto * 60) + inicioSegundo + duracaoSegundos;
// const terminoHora = Math.floor(segundosTotais / 3600) % 24;
// const terminoMinuto = Math.floor((segundosTotais % 3600) / 60);
// const terminoSegundo = segundosTotais % 60;
// const horarioTermino = `${formatNumber(terminoHora)}:${formatNumber(terminoMinuto)}:${formatNumber(terminoSegundo)}`;
// console.log(`O horário de término da experiência é: ${horarioTermino}`);

// 8.Uma empresa paga R$ 10,00 por hora normal trabalhada e R$ 15,00 por hora extra. Escreva um programa que leia o total de horas normais 
// e o total de horas extras trabalhadas por um empregado em um ano e calcule o salário anual deste trabalhador.

// const readline = require ("readline-sync");
// const horaNormal = 10;
// const horaExtra = 15;
// const horaNormalTotal = parseFloat(readline.question("Digite o total de horas normais trabalhadas: "));
// const horaExtraTotal = parseFloat(readline.question("Digite o total de horas extras trabalhadas: "));
// const horaGeral = horaNormalTotal + horaExtraTotal;
// const salarioAnual = ((horaNormal * horaNormalTotal) + (horaExtra * horaExtraTotal)) * 12;
// console.log(`Jeferson trabalha ${horaNormalTotal}h por dia, mais ${horaExtraTotal}h de horas extras.
// Mensalmente, Jeferson trabalha ${horaGeral} horas por dia. E anualmente recebe R$${salarioAnual}.`);

// 9. Elabore um programa em JS para que leia três números e mostre-os em ordem crescente.

let array = [5, 4, 3, 2, 10, 30];
console.log(array.sort());

const array1 = [5, 4, 3, 2, 10, 30];
array1.sort((a, b) => a - b);
console.log(array1);

// 10. Crie um programa de conversão entre as temperaturas Celsius, Farenheit e Kelvin usando funções para isso. 
// O programa deve ler a opção escolhida pelo usuário, que escolhe uma determinada conversão entre escalas termométricas e,
// em seguida, o programa solicita a temperatura a ser convertida. As opções de conversão são as seguintes: 
// utilize o switch case
// 1.	de Celsius para Fahrenheit.
// 2.	de Celsius para Kelvin.
// 3.	de Fahrenheit para Celsius.
// 4.	de Fahrenheit para Kelvin.
// 5.	de Kelvin para Celsius.
// 6.	de Kelvin para Fahrenheit.

const readline = require("readline-sync")
const Celsius = parseFloat(readline.question("Digite a temperatura em Celsius: "));
const Fahrenheit = parseFloat(readline.question("Digite a temperatura em Fahrenheit: "));
const Kelvin = parseFloat(readline.question("Digite a temperatura em Kelvin"));




















