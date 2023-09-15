// Seu código JavaScript existente vai aqui

document.addEventListener("DOMContentLoaded", function () {
    const listarClientesBtn = document.getElementById("listarClientesBtn");
    const cadastrarClienteBtn = document.getElementById("cadastrarClienteBtn");
  
    listarClientesBtn.addEventListener("click", function () {
      listarClientes(); // Chama a função para listar clientes quando o botão for clicado
    });
  
    cadastrarClienteBtn.addEventListener("click", function () {
      cadastrarCliente(); // Chama a função para cadastrar um novo cliente quando o botão for clicado
    });
  });
  
  class Cliente {
    constructor(nome, cpf, saldo) {
      this.nome = nome;
      this.cpf = cpf;
      this.agencia = "3205"; // Agência fixa
      this.conta = this.gerarContaAleatoria();
      this.saldo = saldo;
      this.transacoes = [];
    }
  
    sacar(valor) {
      if (!validarValor(valor)) {
        console.log("Valor de saque inválido.");
        return;
      }
  
      if (valor <= this.saldo) {
        this.saldo -= valor;
        this.transacoes.push(`Saque de R$ ${valor.toFixed(2)}`);
        console.log(`Saque de R$ ${valor.toFixed(2)} realizado com sucesso.`);
      } else {
        console.log("Saldo insuficiente.");
      }
    }
  
    depositar(valor) {
      if (!validarValor(valor)) {
        console.log("Valor de depósito inválido.");
        return;
      }
  
      this.saldo += valor;
      this.transacoes.push(`Depósito de R$ ${valor.toFixed(2)}`);
      console.log(`Depósito de R$ ${valor.toFixed(2)} realizado com sucesso.`);
    }
  
    gerarContaAleatoria() {
      const numeroConta = Math.floor(10000 + Math.random() * 90000);
      return numeroConta.toString().slice(0, 4) + "-" + numeroConta.toString().slice(-1);
    }
  
    formatarCPF() {
      return this.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }
  
    listarTransacoes() {
      console.log("Histórico de Transações:");
      for (const transacao of this.transacoes) {
        console.log(transacao);
      }
    }
  }
  
  const clientes = {};
  
  function exibirMenu() {
    console.clear();
    console.log("=== SISTEMA BANCÁRIO ===");
    console.log("========== MENU ==========");
    console.log("1 - Listar todos os clientes");
    console.log("2 - Cadastrar um novo cliente");
    console.log("3 - Buscar um cliente");
    console.log("0 - Sair do sistema");
    console.log("==========================");
  }
  
  function validarNome(nome) {
    return /^[A-Za-z\s]+$/.test(nome);
  }
  
  function validarCPF(cpf) {
    return /^[0-9]{11}$/.test(cpf);
  }
  
  function validarValor(valor) {
    return !isNaN(valor) && valor > 0;
  }
  
  function excluirCliente(cpf) {
    delete clientes[cpf];
  }
  
  function cadastrarCliente() {
    console.clear();
    console.log("=== CADASTRAR CLIENTE ===");
    let nomeCliente = prompt("Digite seu nome completo: ");
  
    // Verifica se o nome já existe na lista de clientes
    for (const cpf in clientes) {
      const cliente = clientes[cpf];
      if (cliente.nome === nomeCliente) {
        console.log("Cliente com o mesmo nome já cadastrado.");
        readline.keyInPause();
        return; // Sai da função sem cadastrar o cliente
      }
    }
  
    while (!validarNome(nomeCliente)) {
      console.log("Nome inválido. Use apenas letras e espaços.");
      nomeCliente = prompt("Digite seu nome completo: ");
    }
  
    let cpfCliente = prompt("Digite seu CPF (11 dígitos numéricos): ");
  
    // Verifica se o CPF já existe na lista de clientes
    if (clientes[cpfCliente]) {
      console.log("Cliente com o mesmo CPF já cadastrado.");
      readline.keyInPause();
      return; // Sai da função sem cadastrar o cliente
    }
  
    while (!validarCPF(cpfCliente)) {
      console.log("CPF inválido. Deve conter 11 dígitos numéricos.");
      cpfCliente = prompt("Digite seu CPF (11 dígitos numéricos): ");
    }
  
    let saldoCliente = parseFloat(prompt("Digite o saldo que deseja depositar: "));
  
    while (!validarValor(saldoCliente)) {
      console.log("Saldo inválido. Deve ser um valor positivo.");
      saldoCliente = parseFloat(prompt("Digite o saldo que deseja depositar: "));
    }
  
    const novoCliente = new Cliente(nomeCliente, cpfCliente, saldoCliente);
    clientes[cpfCliente] = novoCliente;
    console.log("Cliente cadastrado com sucesso!");
    readline.keyInPause();
  }
  
  function listarClientes() {
    console.clear();
    console.log("=== LISTAR CLIENTES ===");
  
    let clienteIndex = 1;
    const clientesListados = [];
  
    for (const cpf in clientes) {
      const cliente = clientes[cpf];
      console.log(`${clienteIndex} - ${cliente.nome}`);
      clientesListados.push(cliente);
      clienteIndex++;
    }
  
    if (clientesListados.length === 0) {
      console.log("Nenhum cliente cadastrado.");
      readline.keyInPause();
      return;
    }
  
    const escolha = promptInt("Digite o número correspondente ao cliente para ver os detalhes (ou 0 para voltar): ");
  
    if (escolha >= 1 && escolha <= clientesListados.length) {
      // Redireciona para a função buscarCliente com o cliente selecionado.
      buscarCliente(clientesListados[escolha - 1]);
    } else if (escolha !== 0) {
      console.log("Escolha inválida.");
      readline.keyInPause();
    }
  }
  
  function buscarCliente(clienteSelecionado) {
    let continua = true;
    while (continua) {
      console.clear();
      console.log("=== DETALHES DO CLIENTE ===");
      console.log(`Nome: ${clienteSelecionado.nome}`);
      console.log(`CPF: ${clienteSelecionado.formatarCPF()}`);
      console.log(`Agência: ${clienteSelecionado.agencia}`);
      console.log(`Conta: ${clienteSelecionado.conta}`);
      console.log(`Saldo: R$ ${clienteSelecionado.saldo.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
      console.log("============================");
      console.log("Opções:");
      console.log("1 - Sacar Dinheiro");
      console.log("2 - Depositar Dinheiro");
      console.log("3 - Ver Registro de Alterações");
      console.log("4 - Excluir Cliente");
      console.log("5 - Voltar ao menu principal");
  
      let opcao = promptInt("Escolha uma opção: ");
      switch (opcao) {
        case 1:
          let valorSaque = parseFloat(prompt("Digite o valor a sacar: "));
          while (!validarValor(valorSaque)) {
            console.log("Valor de saque inválido. Digite um número positivo.");
            valorSaque = parseFloat(prompt("Digite o valor a sacar: "));
          }
          clienteSelecionado.sacar(valorSaque);
          readline.keyInPause();
          break;
        case 2:
          let valorDeposito = parseFloat(prompt("Digite o valor a depositar: "));
          while (!validarValor(valorDeposito)) {
            console.log("Valor de depósito inválido. Digite um número positivo.");
            valorDeposito = parseFloat(prompt("Digite o valor a depositar: "));
          }
          clienteSelecionado.depositar(valorDeposito);
          readline.keyInPause();
          break;
        case 3:
          console.clear();
          console.log("=== REGISTRO DE ALTERAÇÕES ===");
          for (const transacao of clienteSelecionado.transacoes) {
            console.log(transacao);
          }
          console.log("===============================");
          readline.keyInPause();
          break;
        case 4:
          if (confirmarExclusao()) {
            const cpfCliente = clienteSelecionado.cpf;
            excluirCliente(cpfCliente);
            console.log("Cliente excluído com sucesso.");
            readline.keyInPause();
            continua = false;
          }
          break;
        case 5:
          continua = false;
          break;
        default:
          console.log("Opção inválida!");
      }
    }
  }
  
  function confirmarExclusao() {
    const confirmacao = readline.keyInYN("Tem certeza de que deseja excluir o cliente? (S/N): ");
    return confirmacao;
  }
  
  function main() {
    let loop = true;
    while (loop) {
      exibirMenu();
      let opcao = promptInt("Escolha uma opção: ");
      switch (opcao) {
        case 1:
          listarClientes();
          break;
        case 2:
          cadastrarCliente();
          break;
        case 3:
          listarClientes();
          break;
        case 0:
          console.log("Saindo do sistema...");
          loop = false;
          break;
        default:
          console.log("Opção inválida!");
      }
    }
  }
  
  main();
  