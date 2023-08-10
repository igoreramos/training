
const meuArray = [10, 20, 30, 40, 50];
console.log(meuArray[1]);
const segundoElemento = meuArray[1];
console.log(segundoElemento);

const frutas = ["maçã", "banana", "laranja", "uva", "manga"];
console.log(frutas);
console.log(frutas.length);

frutas.push ("pera");
console.log(frutas);

frutas.splice (0, 1)
console.log(frutas);

const numeros = [10, 20, 30, 40, 50];
console.log(numeros);
const num1 = 25;
const num_s = numeros.includes (num1);
console.log(num_s);

const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 2, 3, 4, 5];
const array3 = array1.concat(array2);
console.log(array3);

const arraytotal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arraypares = arraytotal.filter((number) => number % 2 === 0);
console.log(arraypares);

const arraycresc = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
arraycresc.sort((a,b) => a - b);
console.log(arraycresc);

const arrayfruit = ["maçã", "banana", "laranja", "uva", "manga"];
const arrayfruit2 = arrayfruit.indexOf("laranja")
console.log(arrayfruit2);

function verificarSeArray(parametro) {
    if (Array.isArray(parametro)) {
      return true;
    } else {
      return false;
    }
  }
  console.log(verificarSeArray([1, 2, 3, 4]));
  console.log(verificarSeArray("Olá mundo"));

