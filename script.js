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

// function menu(numero) {
//   return numero < 10 ? `0${numero}` : numero;
// };

// const inicio = readline.question("Digite o horário de início (hh:mm:ss): ");
// const [inicioHora, inicioMinuto, inicioSegundo] = inicio.split(":").map(Number);
// const duracaoEmSegundos = parseInt(readline.question("Digite a duração em segundos: "));
// const segundosTotais = (inicioHora * 3600) + (inicioMinuto * 60) + inicioSegundo + duracaoEmSegundos;
// const terminoEmHoras = Math.floor(segundosTotais / 3600) % 24;
// const terminoEmMinutos = Math.floor((segundosTotais % 3600) / 60);
// const terminoEmSegundos = segundosTotais % 60;
// const horarioDoTermino = `${menu(terminoEmHoras)}:${menu(terminoEmMinutos)}:${menu(terminoEmSegundos)}`;
// console.log(`O horário de término da experiência é: ${horarioDoTermino}`);


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

// let array = [5, 4, 3, 2, 10, 30];
// console.log(array.sort());

// const array1 = [5, 4, 3, 2, 10, 30];
// array1.sort((a, b) => a - b);
// console.log(array1);

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


// function celsiusParaFahrenheit(celsius) {
//     return (celsius * 9/5) + 32;
// };

// function celsiusParaKelvin(celsius) {
//     return celsius + 273.15;
// };

// function fahrenheitParaCelsius(fahrenheit) {
//     return (fahrenheit - 32) * 5/9;
// };

// function fahrenheitParaKelvin(fahrenheit) {
//     return (fahrenheit + 459.67) * 5/9;
// };

// function kelvinParaCelsius(kelvin) {
//     return kelvin - 273.15;
// };

// function kelvinParaFahrenheit(kelvin) {
//     return (kelvin * 9/5) - 459.67;
// };

// const readline = require ("readline-sync");

// function menu() {
//     const opcoes = parseInt(readline.question(`Escolha uma opção:\n
//     1. de Celsius para Fahrenheit
//     2. de Celsius para Kelvin
//     3. de Fahrenheit para Celsius
//     4. de Fahrenheit para Kelvin
//     5. de Kelvin para Celsius
//     6. de Kelvin para Fahrenheit
//     Digite a opção aqui: `));
    
//     console.log();

//     if (opcoes == 0 || opcoes >= 7 || opcoes === String) {
//         console.log("****** Opção inexistente, digite apenas números de 1 a 6. ******");
//         console.log();
//         return menu();        
//     } else {

//        console.log();
   
//        const temperatura = parseFloat(readline.question("Digite a temperatura a ser convertida: "));
//        var resultado;

//        switch (opcoes) {
//           case 1:
//             resultado = celsiusParaFahrenheit(temperatura);
//             console.log();
//             console.log(`${temperatura}°C equivale a ${resultado.toFixed(2)}°F`);
//             break;
//           case 2:
//             resultado = celsiusParaKelvin(temperatura);
//             console.log();
//             console.log(`${temperatura}°C equivale a ${resultado.toFixed(2)}K`);
//             break;
//           case 3:
//             resultado = fahrenheitParaCelsius(temperatura);
//             console.log();
//             console.log(`${temperatura}°F equivale a ${resultado.toFixed(2)}°C`);
//             break;
//           case 4:
//             resultado = fahrenheitParaKelvin(temperatura);
//             console.log();
//             console.log(`${temperatura}°F equivale a ${resultado.toFixed(2)}K`);
//             break;
//           case 5:
//             resultado = kelvinParaCelsius(temperatura);
//             console.log();
//             console.log(`${temperatura}K equivale a ${resultado.toFixed(2)}°C`);
//             break;
//           case 6:
//             resultado = kelvinParaFahrenheit(temperatura);
//             console.log();
//             console.log(`${temperatura}K equivale a ${resultado.toFixed(2)}°F`);
//             break;
//           default:
//             console.log();
//             console.log("Temperatura não encontrada.");
//         };
//     };
// };

// menu();

// 11. Fazer uma função que recebe um mês e um ano como parâmetros e retorna o número de dias daquele mês daquele ano. 
// Dica: um ano é bissexto quando é múltiplo de 4 e não múltiplo de 100, ou também quando é múltiplo de 400.

// const readline = require("readline-sync")

// function main() {
//     const mes = parseInt(readline.question("Digite o número do mês (1 a 12):"));
//     const ano = parseInt(readline.question("Digite o ano:"));

//     const diasDoMes = diasNoMes(mes, ano);
//     if (diasDoMes === -1) {
//         console.log("Mês inválido");
//     } else {
//         console.log(`O mês ${mes} do ano ${ano} tem ${diasDoMes} dias.`);
//     }
// };

// function anoBissexto(ano) {
//     return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
// };

// function diasNoMes(mes, ano) {
//     const trintaEumDias = [1, 3, 5, 7, 8, 10, 12];
//     const trintaDias = [4, 6, 9, 11];

//     if (trintaEumDias.includes(mes)) {
//         return 31;
//     } else if (trintaDias.includes(mes)) {
//         return 30;
//     } else if (mes === 2) {
//         if (anoBissexto(ano)) {
//             return 29;
//         } else {
//             return 28;
//         }
//     } else {
//         return -1; 
//     }
// };
// main();

// 12. Faça uma função que recebe, por parâmetro, a hora de início e a hora de término de um jogo, ambas subdivididas em 2 valores distintos: horas e minutos. 
// A função deve retornar, a duração do jogo em minutos, considerando que o tempo máximo de duração de um jogo é de 24 horas e que o jogo pode começar em um dia e terminar no outro.

// const readline = require(`readline-sync`)

// function duracaoDoJogo() {
//     const inicioHoras = parseInt(readline.question("Hora de início (horas): "));
//     const inicioMinutos = parseInt(readline.question("Hora de início (minutos): "));

//     const fimHoras = parseInt(readline.question("Hora de término (horas): "));
//     const fimMinutos = parseInt(readline.question("Hora de término (minutos): "));

//     const inicioEmMinutos = inicioHoras * 60 + inicioMinutos;
//     const fimEmMinutos = fimHoras * 60 + fimMinutos;

//     let duracaoEmMinutos;
//     if (fimEmMinutos >= inicioEmMinutos) {
//         duracaoEmMinutos = fimEmMinutos - inicioEmMinutos;
//     } else {
//         duracaoEmMinutos = (24 * 60 - inicioEmMinutos) + fimEmMinutos;
//     };

//     return duracaoEmMinutos;
// };

// function main() {
//     const tempoDeJogo = duracaoDoJogo();
//     console.log(`A duração do jogo foi de ${tempoDeJogo} minutos.`)
// };

// main();

// 13. Escreva a função para cálculo do N-ésimo termo da série de Fibonacci utilizando recursividade.

// function fibonacci(n) {
//     if (n <= 0) {
//         return 0;
//     } else if (n === 1) {
//         return 1;
//     } else {
//         return fibonacci(n - 1) + fibonacci(n - 2);
//     }
// };

// // Sequência fibonnaci até o n-ésimo 17;  // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597

// const readline = require("readline-sync");

// function menu () {  
//   const n = parseInt(readline.question("Digite de 1 a 17 para saber o n-ésimo termo da sequência de Fibonnaci: "));
//   const resultado = fibonacci(n);
//   if (n < 1 || n >= 18) {
//     console.log("Digite apenas de 1 até 17.");
//     return menu()    
//   } else {  
//     console.log(`O ${n}-ésimo termo da sequência de Fibonacci é ${resultado}.`);
//   };
// };

// menu();

























