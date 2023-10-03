// function function01(): void { // "Void" não permite que a função retorne um valor.
//     console.log("Minha primeira função em TypeScript");    
// }
// function01();

// function function02(): boolean {
//     // return "Minha segunda função"
//     return true;
// }
// function02();

// function function03(nome: string): void {
//     console.log("Bom dia " + nome);  
// }
// function03("Igor")

// function function04(num1: number, num2: number): number {
//     return num1 + num2    
// }
// console.log(function04(10.1, 7.3));

// Exercícios

// // 1.

function olaMundo(): void {
    console.log("Olá mundo")
}
olaMundo()

// // 2.

function dobro(num: number): number {
    return num * 2
}
console.log(dobro(4));

// // 3.

function mostrarNumeros(inicio: string, fim: string): string {
    return inicio + fim
}
console.log(mostrarNumeros("1, 2, 3, 4, 5, ", "6, 7, 8, 9, 10"));


// // 4.

function verificarPar(numPar: number): void {
    if (numPar % 2 === 0) {
      console.log(numPar + " é par");
    } else {
      console.log(numPar + " é ímpar");
    }
  }

  verificarPar(4)
  verificarPar(5)

//   // 5.

  function imprimirLista(array: Array<string>): void {     
        for (let i = 0; i < array.length; i++) {
          console.log(array[i]);
        }
      }
  imprimirLista(["carro", "moto" ,"caminhão"]);

//   // 6.

  function calcularMedia(media1: number, media2: number, media3: number): number {
    return (media1 + media2 + media3) / 3    
  }
  console.log(calcularMedia(10, 7, 8.7).toFixed(1))
 
//   // 7.

function maiorNumero(num1: number, num2: number, num3: number): number {
    return Math.max(num1, num2, num3);    
}
console.log(maiorNumero(101, 201, 190));

//   // 8.

  function contarVogais(texto: string): number {
    const vogais = "aeiouAEIOU";
    let contador = 0;

    for (let letra of texto) {
      if (vogais.includes(letra)) {
        contador++
      }
    }

    return contador;
  }
  console.log(contarVogais("abcdefghijklmnopqrstuvxzabcdefghijklmnopqrstuvxza"))

  //  // 9.

  function imprimirTabuada(): void {
    for(let i = 1; i <= 10; i++) {
        console.log(3 * i);       
    }    
  }
  imprimirTabuada();

  //  // 10. 

  function verificarPrimo(numero: number): void {
    if (numero <= 1) {
      console.log(numero + " não é um número primo.");
      return;
    }
  
    if (numero === 2) {
      console.log(numero + " é um número primo.");
      return;
    }
  
    if (numero % 2 === 0) {
      console.log(numero + " não é um número primo.");
      return;
    }
  
    for (let i = 3; i <= Math.sqrt(numero); i += 2) {
      if (numero % i === 0) {
        console.log(numero + " não é um número primo.");
        return;
      }
    }
  
    console.log(numero + " é um número primo.");
  }
  

  verificarPrimo(87);
  verificarPrimo(5);

  //  // 11.

     function contagemRegressiva(inicio: number = 10): void{
     let fim = inicio;
     while(fim >= 1) {
      console.log(fim);
      fim--;
    }
   }
   contagemRegressiva()

   // // 12. 

    function apresentacao(nome: string, idade: number, profissao: string): void {
     console.log(`Olá, eu sou ${nome}, tenho ${idade} anos e trabalho na ${profissao}`);
    }
   apresentacao("Igor", 27, "jogodeouro.bet")
  
//   // 13.
  
  function somar(num1: number, num2: number): number {
    return num1 + num2
  }
  console.log(somar(10, 15));

//   // 14.

  function ehPar(numPar: number): boolean {
    return numPar % 2 === 0
  }
  console.log(ehPar(10));

//   // 15.

  function maiorNumero1(num1: number, num2: number, num3: number): number {
        return Math.max(num1, num2, num3);    
  }
  console.log(maiorNumero1(101, 201, 190));
    

//   // 16.

  function calcularIMC(peso: number, altura: number): number {
    return peso / (altura * 2)
  }
  console.log(calcularIMC(81, 185).toFixed(2));

//   // 17.

  function contarVogais1(texto: string): number {
    const vogais = "aeiouAEIOU";
    let contador = 0;

    for (let letra of texto) {
      if (vogais.includes(letra)) {
        contador++
      }
    }

    return contador;
  }
  console.log(contarVogais1("aaaaaaaaa"))

//   // 18.

  function celsiusParaFahrenheit(celsius: number): number{
    return (celsius * 9) / 5 + 32;
  }
  console.log(celsiusParaFahrenheit(24))

//   // 19.

  function gerarSenha(tamanho: number): string {
    const caracteres = "abcdefghijklmnopqrstuvxzABCDEFGHIJKLMNOPQRSTUVXZ12345678910";
    let senha = "";

    for (let i  = 0; i < tamanho; i++) {
      const indice = Math.floor(Math.random() * caracteres.length);
      senha += caracteres.charAt (indice);
    }
    return senha;
  }
  console.log(gerarSenha(25));


  



