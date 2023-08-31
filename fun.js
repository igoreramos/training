// function exibirSaudacao(nome, dia, mes) {
//     console.log("Bom dia " + nome + ", hoje é dia " + dia + " De " + mes + " de 2023")
// }
// exibirSaudacao("Igor", "08", "Agosto")

// function saudar(nome, dia, mes) {
//     const mensagem = `Olá ${nome}, hoje é dia ${dia} de ${mes} de 2023`
//     console.log(mensagem);    
// }
// saudar("Igor", "08", "Agosto")

// // exercícios

// // 1.

// function olaMundo() {
//     console.log("Olá mundo")
// }
// olaMundo()

// // 2.

// function dobro(num) {
//     console.log("O resultado é", num);
// }
// dobro("4" * 2)

// // 3.

// function mostrarNumeros(inicio, fim) {
//     console.log("O resultado é", inicio + fim)
// }
// mostrarNumeros("1, 2, 3, 4, 5,", " 6, 7, 8, 9, 10")

// // 4.

// function verificarPar(numPar) {
//     if (numPar % 2 === 0) {
//       console.log(numPar + " é par");
//     } else {
//       console.log(numPar + " é ímpar");
//     }
//   }

//   verificarPar(4)
//   verificarPar(5)

//   // 5.

//   function imprimirLista(array) {     
//         for (let i = 0; i < array.length; i++) {
//           console.log(array[i]);
//         }
//       }
//   imprimirLista(["carro", "moto" ,"caminhão"]);

//   // 6.

  // function calcularMedia(media1, media2, media3) {
  //   return (media1 + media2 + media3) / 3    
  // }
  // console.log(calcularMedia(10, 7, 8.7))
 
//   // 

//   function exibirSaudacao1(nome, saudacao='Bom dia') {
//     console.log(`${saudacao} ${nome}`);
//   }
//   exibirSaudacao1("Igor")

//   // Exercícios

//   // 1.

//    function saudacao2(nome) {
//     console.log(`Olá ${nome}`);
//    }
//    saudacao2("Igor")

//    // 2.

//    function calculadora(num1, num2) {
//     return num1 + num2
//    }
//    console.log(calculadora(10, 10));

//    // 3.

//    function contagemRegressiva(inicio=10) {
//     let fim = inicio;
//     while(fim >= 1) {
//       console.log(fim);
//       fim--;
//     }
//    }
//    contagemRegressiva()

//    // 4.

//    function apresentacao(nome, idade, profissao) {
//     console.log(`Olá, eu sou ${nome}, tenho ${idade} anos e sou ${profissao}`);
//    }
//    apresentacao("Igor", "26", "Gamer")

//    // 5. 

//    function mensagemPersonalizada(texto, estilo = "normal") {
//     switch (estilo) {
//       case "normal":
//         console.log(texto);
//         break;
//       case "negrito":
//         console.log("%c" + texto, "font-weight: bold;");
//         break;
//       case "itálico":
//         console.log("%c" + texto, "font-style: italic;");
//         break;
//       default:
//         console.log(texto);
//     }
  // }
  // mensagemPersonalizada("Texto")

  //

  // function criarMensagemDeSaudacao(nome) {
  //   const mensagem = `Bom dia ${nome}, gostaria de tomar um café?`;
  //   return mensagem
  // }
  // console.log(criarMensagemDeSaudacao("Markus Götzil"));

  // Exercícios
  
  // 1.
  
  function somar(num1, num2) {
    return num1 + num2
  }
  console.log(somar(10, 15));

  // 2.

  function ehPar(numPar) {
    return numPar % 2 === 0
  }
  console.log(ehPar(15));

  // 3.

  function maiorNumero(num1, num2, num3) {
        return Math.max(num1, num2, num3);    
  }
  console.log(maiorNumero(101, 201, 190));
    

  // 4.

  function calcularIMC(peso, altura) {
    return peso / (altura * 2)
  }
  console.log(calcularIMC(81, 185));

  // 5.

  function contarVogais(texto) {
    const vogais = "aeiouAEIOU";
    let contador = 0;

    for (let letra of texto) {
      if (vogais.includes(letra)) {
        contador++
      }
    }

    return contador;
  }
  console.log(contarVogais("aaaaaaaaa"))

  // 6.

  function celsiusParaFahrenheit(celsius){
    return (celsius * 9) / 5 + 32;
  }
  console.log(celsiusParaFahrenheit(24))

  // 7.

  function gerarSenha(tamanho) {
    const caracteres = "abcdefghijklmnopqrstuvxzABCDEFGHIJKLMNOPQRSTUVXZ12345678910";
    let senha = "";

    for (let i  = 0; i < tamanho; i++) {
      const indice = Math.floor(Math.random() * caracteres.length);
      senha += caracteres.charAt (indice);
    }
    return senha;
  }
  console.log(gerarSenha(25));

  

