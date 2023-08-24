// Try catch

// try {
//     const pessoa = {
//       nome: "Maria",
//       idade: 30,
//     };
//     console.log(cliente.salario);
//   } catch (error) {
//     console.log("Usuário digitou errado");
//     console.log(error.message); 
//   }
  

// try {
//   const divisor = 0;
//   const resultado = 10 / divisor;
//   console.log("O resultado é:", resultado);
// } catch (error) {
//   console.error("Erro:", error.message);
// }

// const numeros = [345435, 1, 744, 78899, 3e500];
// let menor = Infinity;

// for (let i of numeros) {
//   if (i < menor) {
//     menor = i;
//   }
// }
// console.log(menor);

// try {
//   console.log("Iniciando calculadora...");
//   let input = 0;
//   if (input === 0) {
//     throw "Valor negado";
//   }
//   let result = 5 / input;
// } catch (erro) {
//   console.log("[Erro:] Divisão por zero não permitida");
// } finally {
//   console.log("Finalizando calculador...\n");
// }

// Exercícios

// 1. 

// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// readline.question('Digite um número: ', num => {
//   try {
//     const result = num / 0;
//     if (result) {
//       throw "";
//     }
//   } catch (error) {
//     console.log('Erro: Divisão por zero');
//     console.log(error.message);
//   }
//   readline.close();
// });

// 2.


  // const readline = require('readline').createInterface({
  //   input: process.stdin,
  //   output: process.stdout
  // });
  
  // readline.question('Digite um número: ', str => {
  //   try {
  //     const num = parseInt(str);
  //     if (isNaN(num)) {
  //       throw new Error('Erro: Conversão inválida');
  //     }
  //     console.log(num);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  //   readline.close();
  // });

  // 3.

  // try {
  // //   const pessoa = {
  // //     nome: "Carlos",
  // //     idade: 34,
  // //   };
  // //   console.log(cliente.salario);
  // // } catch (error) {
  // //   console.log("Usuário digitou errado");
  // //   console.log(error.message); 
  // // }

  // const readline = require('readline');

  // const rl = readline.createInterface({
  //   input: process.stdin,
  //   output: process.stdout
  // });
  
  //   rl.question("Digite um número: ", function(numero) {
  //     try {
  //       const resultado = parseFloat(numero) / 0;
  //       if (resultado >= 0) {
  //         throw "Errado"
  //       } 
  //       console.log("Resultado:", resultado);
  //     } catch (error) {
  //       console.log("Erro:", "Divisão por zero"); 
  //     } finally {
  //       rl.close()
  //     }
  //   });

//   const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// function converterStringParaNumero() {
//   rl.question("Digite um número: ", function(input) {
//     try {
//       const numero = parseInt(input);
      
//       if (isNaN(numero)) {
//         throw new Error("Conversão inválida");
//       }
      
//       console.log("Número convertido:", numero);
//     } catch (error) {
//       console.log("Erro:", error.message);
//     } finally {
//       rl.close();
//     }
//   });
// }

// converterStringParaNumero();

const readline = require('readline');
const { createBrotliCompress } = require('zlib');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite a idade de Carlos: ", (objetoStr) => {
  try {
    const pessoa = {
      nome: "Carlos",
      idade: 34,
    };    
    console.log(cliente.idade);
  } catch (error) {
    console.log("Erro: Propriedade não encontrada");
  } finally {
    rl.close();
  }
});



  
  
 
  



  


