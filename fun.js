function exibirSaudacao(nome, dia, mes) {
    console.log("Bom dia " + nome + ", hoje é dia " + dia + " De " + mes + " de 2023")
}
exibirSaudacao("Igor", "08", "Agosto")

function saudar(nome, dia, mes) {
    const mensagem = `Olá ${nome}, hoje é dia ${dia} de ${mes} de 2023`
    console.log(mensagem);    
}
saudar("Igor", "08", "Agosto")

// exercícios

// 1.

function olaMundo() {
    console.log("Olá mundo")
}
olaMundo()

// 2.

function dobro(num) {
    console.log("O resultado é", num);
}
dobro("4" * 2)

// 3.

function mostrarNumeros(inicio, fim) {
    console.log("O resultado é", inicio + fim)
}
mostrarNumeros("1, 2, 3, 4, 5,", " 6, 7, 8, 9, 10")

// 4.

function verificarPar(numPar) {
    if (numPar % 2 === 0) {
      console.log(numPar + " é par");
    } else {
      console.log(numPar + " é ímpar");
    }
  }

  verificarPar(4)
  verificarPar(5)

  // 5.

  function imprimirLista(array) {     
        for (let i = 0; i < array.length; i++) {
          console.log(array[i]);
        }
      }
  imprimirLista(["carro", "moto" ,"caminhão"]);

  // 6.

  function calcularMedia(media1, media2, media3) {
    console.log(`${media1}  ${media2}  ${media3}`)    
  }
  calcularMedia((2 + 2 + 2) / 3)
 
  // 

  function exibirSaudacao1(nome, saudacao='Bom dia') {
    console.log(`${saudacao} ${nome}`);
  }
  exibirSaudacao1("Igor")

  // Exercícios

  // 1.

   function saudacao2(nome) {
    console.log(`Olá ${nome}`);
   }
   saudacao2("Igor")

   // 2.

   function calculadora(num1, num2) {
    return num1 + num2
   }
   console.log(calculadora(10, 10));
   // 3.

   function contagemRegressiva()