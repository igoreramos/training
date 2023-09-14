// CADASTRO EM UM BANCO

const readline = require("readline-sync");

class Cliente {
  constructor(nome, cpf, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.agencia = "3205"; // Agência fixa
    this.conta = this.gerarContaAleatoria();
    this.saldo = saldo;
    this.transacoes = [];
  }

  gerarContaAleatoria() {
    // Gera um número aleatório de 5 dígitos com "-" antes do último dígito para a conta
    const numeroConta = Math.floor(10000 + Math.random() * 90000);
    return numeroConta.toString().slice(0, 4) + "-" + numeroConta.toString().slice(-1);
  }

  formatarCPF() {
    // Formata o CPF no estilo "000.000.000-00"
    return this.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

  depositar(valor) {
    if (valor > 0) {
      this.saldo += valor;
      this.transacoes.push(`Depósito de R$ ${valor.toFixed(2)}`);
      console.log(`Depósito de R$ ${valor.toFixed(2)} realizado com sucesso.`);
    } else {
      console.log("Valor de depósito inválido.");
    }
  }

  sacar(valor) {
    if (valor > 0 && valor <= this.saldo) {
      this.saldo -= valor;
      this.transacoes.push(`Saque de R$ ${valor.toFixed(2)}`);
      console.log(`Saque de R$ ${valor.toFixed(2)} realizado com sucesso.`);
    } else {
      console.log("Valor de saque inválido ou saldo insuficiente.");
    }
  }

  listarTransacoes() {
    console.log("Histórico de Transações:");
    for (const transacao of this.transacoes) {
      console.log(transacao);
    }
  }
}

const clientes = [];

let loop = true;

while (loop) {
  console.clear();
  console.log("=== SISTEMA BANCÁRIO ===");
  console.log("========== MENU ==========");
  console.log("0 - Sair do sistema");
  console.log("1 - Listar todos os clientes");
  console.log("2 - Cadastrar um novo cliente");
  console.log("3 - Alterar cadastro do Cliente");
  console.log("4 - Buscar um cliente");
  console.log("5 - Ver saldo bancário");
  console.log("6 - Sacar dinheiro");
  console.log("7 - Depositar dinheiro");
  console.log("8 - Listar transações do cliente");
  console.log("==========================");
  let opcao = readline.questionInt("Escolha uma opção: ");

  switch (opcao) {
    case 1:
      console.log("Listando todos os clientes");
      for (const cliente of clientes) {
        console.log("------------------------");
        console.log(`Nome: ${cliente.nome}`);
        console.log(`CPF: ${cliente.formatarCPF()}`);
        console.log(`Agência: ${cliente.agencia}`);
        console.log(`Conta: ${cliente.conta}`);
        console.log(`Saldo: R$ ${cliente.saldo.toFixed(2)}`);
      }
      console.log("------------------------");
      readline.keyInPause();
    break;

    case 2:
      let nomeCliente = readline.question("Digite seu nome completo: ");
      let cpfCliente = readline.question("Digite seu CPF: ");
      let saldoCliente = readline.questionFloat("Digite o saldo que deseja depositar: ");
      // Verifique se o CPF já está cadastrado
      const cpfExistente = clientes.find((cliente) => cliente.cpf === cpfCliente);
      if (cpfExistente) {
        console.log("Esse CPF já está cadastrado.");
      } else {
        // Se o CPF não estiver cadastrado, crie um novo cliente
        const novoCliente = new Cliente(nomeCliente, cpfCliente, saldoCliente);
        clientes.push(novoCliente);
        console.log("Cliente cadastrado com sucesso!");
      }
      readline.keyInPause();
    break;   
    
      case 3:
        let buscarCPF1 = readline.question("Digite o CPF do cliente a ser alterado: ");
        let clienteEncontrado = false;
        for (const cliente of clientes) {
          if (buscarCPF1 === cliente.cpf) {
            console.log(`Cliente encontrado: ${cliente.nome}`);
            let novoCPF = readline.question("Digite o novo CPF do Cliente: ");
            let novoNome = readline.question("Digite o novo nome do Cliente: ");
            cliente.cpf = novoCPF;
            cliente.nome = novoNome;
            console.log("Informações do cliente atualizadas com sucesso!");
             clienteEncontrado = true;
             break;
          } else {
            console.log("Cliente não encontrado.");
          }
        }
          readline.keyInPause();
      break;


    case 4:
      let buscaCPF = readline.question("Digite o CPF do cliente que deseja buscar: ");
      for (const cliente of clientes) {
        if (cliente.cpf === buscaCPF) {
          console.log("Resultado da busca");
          console.log("------------------------");
          console.log(`Nome: ${cliente.nome}`);
          console.log(`CPF: ${cliente.formatarCPF()}`); // Formata o CPF antes de exibir
          console.log(`Agência: ${cliente.agencia}`);
          console.log(`Conta: ${cliente.conta}`);
          console.log(`Saldo: R$ ${cliente.saldo.toFixed(2)}`);
        }
      }
      readline.keyInPause();
      break;
   

    case 5:
      let buscaCPFSaldo = readline.question("Digite o seu CPF para ver o saldo: ");
      for (const cliente of clientes) {
        if (cliente.cpf === buscaCPFSaldo) {
          console.log(`Saldo do cliente ${cliente.nome}: R$ ${cliente.saldo.toFixed(2)}`);
        }
      }
      readline.keyInPause();
      break;
      

      case 6:
        let agenciaSaque = readline.question("Digite sua agência: ");
        let contaSaque = readline.question("Digite sua conta (no formato XXXX-X): ");
        for (const cliente of clientes) {
          if (cliente.agencia === agenciaSaque && cliente.conta === contaSaque) {
            let valorSaque = readline.questionFloat("Digite o valor a ser sacado: ");
            cliente.sacar(valorSaque);
            break; // Sair do loop após processar o saque para o cliente encontrado
          }
        }
        readline.keyInPause();
      break;     
     

    case 7:
      let agenciaDeposito = readline.question("Digite sua agência: ");
        let contaDeposito = readline.question("Digite sua conta (no formato XXXX-X): ");
        for (const cliente of clientes) {
          if (cliente.agencia === agenciaDeposito && cliente.conta === contaDeposito) {
            let valorDeposito = readline.questionFloat("Digite o valor a ser depositado: ");
            cliente.depositar(valorDeposito);
            break; // Sair do loop após processar o saque para o cliente encontrado
          }
        }
        readline.keyInPause();
    break;
    

    case 8: 
     let buscaCPFTransacoes = readline.question("Digite o CPF do cliente que deseja listar transações: ");
      for (const cliente of clientes) {
        if (cliente.cpf === buscaCPFTransacoes) {
          cliente.listarTransacoes();
        }
      }
      readline.keyInPause();
    break;

    case 0:
      console.log("Saindo do sistema...");
      loop = false;
    break;

    default:
      console.log("Opção inválida!");
  };
};
    
  

