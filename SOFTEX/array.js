// const array1 = [3, 7, 9, 1, 0];
// console.log(array1);

// // push adiciona em ultimo.
// array1.push(10)
// console.log(array1);

// // pop retira o ultimo item
// array1.pop()
// console.log(array1);

// // shift retira o primeiro item
// array1.shift();
// console.log(array1);

// // splice retira o (indice, numeros apos o indice)
// array1.splice(0, 1)
// console.log(array1);





// const meuArray = [10, 20, 30, 40, 50];
// console.log(meuArray[1]);
// const segundoElemento = meuArray[1];
// console.log(segundoElemento);

// const frutas = ["maçã", "banana", "laranja", "uva", "manga"];
// console.log(frutas);
// console.log(frutas.length);

// frutas.push ("pera");
// console.log(frutas);

// frutas.splice (0, 1)
// console.log(frutas);

// const numeros = [10, 20, 30, 40, 50];
// console.log(numeros);
// const num1 = 25;
// const num_s = numeros.includes (num1);
// console.log(num_s);

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [1, 2, 3, 4, 5];
// const array3 = array1.concat(array2);
// console.log(array3);

// const arraytotal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const arraypares = arraytotal.filter((number) => number % 2 === 0);
// console.log(arraypares);

// const arraycresc = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
// arraycresc.sort((a,b) => a - b);
// console.log(arraycresc);

// const arrayfruit = ["maçã", "banana", "laranja", "uva", "manga"];
// const arrayfruit2 = arrayfruit.indexOf("laranja")
// console.log(arrayfruit2);

// function verificarSeArray(parametro) {
//     if (Array.isArray(parametro)) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//   console.log(verificarSeArray([1, 2, 3, 4]));
//   console.log(verificarSeArray("Olá mundo"));

// Array utilizando for...in and for...of

// Exercícios 

// 1. 

// const numeros = [
//   {numero: 3},
//   {numero: 7},
//   {numero: 2},
//   {numero: 9},
//   {numero: 5},
// ];

// for (const numero of numeros) {
//   console.log(numero.numero);
//   console.log();
// };

  // const numeros = [
  //   {numero: 3},
  //   {numero: 7},
  //   {numero: 2},
  //   {numero: 9},
  //   {numero: 5},
  // ];

  // for (let item in numeros){
  //   console.log(numeros[item]);
  //   console.log();
  // }

  // 2.

  // const numeros = {a:10, b:20, c:30, d:40};
  // let soma = 0

  // for (let item in numeros) {
  //   if(numeros.hasOwnProperty(item)) {
  //     soma += numeros[item]
  //   }     

  //   console.log(numeros[item]);
  //   console.log();     
  // }  
  // console.log("A soma dos números do array é:", soma)  

  // 3.

  // const arrayGeral = [12, 5, 8, 21, 16, 7];
  // const arrayPar = [];

  // for (const numeros of arrayGeral) {
  //   if (numeros % 2 === 0) {
  //     arrayPar.push(numeros);
  //   }       
  // }
  // console.log(arrayGeral);
  // console.log("Os números pares contidos no array anterior são:", arrayPar);

  // 4.

  // const estudantes = { Alice: 18, Bob: 20, Carol: 19, David: 21 };  

  // for (const nome in estudantes) {
  //   if (estudantes[nome] === 19) {
  //     console.log(`A estudante ${nome} tem ${estudantes[nome]} anos`);   
  //   }
  // }

  // 5.

  const pontos = [ 
    [2, 5, 8], 
    [3, 9, 12], 
    [4, 6, 10]
  ];

  let soma = 0;
  for (const linha of pontos) {
   for (const coluna of linha) {
    soma += coluna;
   }  
  }
  console.log(pontos);
  console.log("A soma de todos os ítens é:", soma);

 




