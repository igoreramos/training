// Função tradicional sem parâmetros
function exibirMenu() {
    console.log("Selecione uma operação:");
    console.log("1. Soma");
    console.log("2. Subtração");
    console.log("3. Multiplicação");
    console.log("4. Divisão");
  }
  
  // Função tradicional com parâmetros e retorno de valor
  function calcular(operacao, numero1, numero2) {
    switch (operacao) {
      case 1:
        return numero1 + numero2;
      case 2:
        return numero1 - numero2;
      case 3:
        return numero1 * numero2;
      case 4:
        if (numero2 === 0) {
          return "Erro: Divisão por zero";
        }
        return numero1 / numero2;
      default:
        return "Operação inválida";
    }
  }
  
  // Arrow function com parâmetros e retorno de valor
  const mostrarResultado = (resultado) => {
    console.log(`O resultado da operação é: ${resultado}`);
  };
  
  exibirMenu();
  
  const operacaoSelecionada = 1; // Adição 
  const numeroA = 10;
  const numeroB = 5;
  
  const resultado = calcular(operacaoSelecionada, numeroA, numeroB);
  
  mostrarResultado(resultado);
  