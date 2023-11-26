// Interface Strategy
class Operacao {
  execute(numero1, numero2) {}
}

// Classe concreta para realizar a operação de Soma
class Soma extends Operacao {
  execute(numero1, numero2) {
    return numero1 + numero2;
  }
}

// Classe concreta para realizar a operação de Subtração
class Subtracao extends Operacao {
  execute(numero1, numero2) {
    return numero1 - numero2;
  }
}

// Classe concreta para realizar a operação de Multiplicação
class Multiplicacao extends Operacao {
  execute(numero1, numero2) {
    return numero1 * numero2;
  }
}

// Função para receber input do usuário
function calcular() {
  const numero1 = parseInt(prompt("Digite o primeiro número:"));
  const numero2 = parseInt(prompt("Digite o segundo número:"));
  const operacao = prompt("Digite a operação (+ para soma, - para subtração, * para multiplicação):");

  let strategy;

  // Definir qual estratégia será usada com base na operação informada
  switch (operacao) {
    case '+':
      strategy = new Soma();
      break;
    case '-':
      strategy = new Subtracao();
      break;
    case '*':
      strategy = new Multiplicacao();
      break;
    default:
      console.log("Operação inválida!");
      return;
  }

  // Executar a operação e imprimir o resultado
  const resultado = strategy.execute(numero1, numero2);
  console.log(`O resultado da operação é: ${resultado}`);
}

// Chamada da função para iniciar a calculadora
calcular();
