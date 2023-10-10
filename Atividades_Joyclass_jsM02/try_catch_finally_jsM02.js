const readline = require("readliny-sync")
  
try {
  const numero1 = parseFloat(readline.question("Informe o primeiro número:"));
  const numero2 = parseFloat(readline.question("Informe o segundo número:"));

  if (isNaN(numero1) || isNaN(numero2)) {
    throw new Error("Você deve fornecer números válidos.");
  }

  const resultado = numero1 / numero2;

  if (!isFinite(resultado)) {
    throw new Error("O resultado é indefinido ou infinito.");
  }

  console.log(`O resultado da divisão é: ${resultado}`);
} catch (erro) {
  
  console.error(`Ocorreu um erro: ${erro.message}`);
} finally {
  // Esta parte será executada independentemente de ocorrer uma exceção ou não
  console.log("Fim do programa.");
}
