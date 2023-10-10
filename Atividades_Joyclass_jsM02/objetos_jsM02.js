const meuCarro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2022,
  ligar() {
    console.log("O carro está ligado.");
  },
  desligar() {
    console.log("O carro está desligado.");
  },
  acelerar(velocidade) {
    console.log(`Acelerando para ${velocidade} km/h.`);
  },
};

const meuLivro = {
  titulo: "O Senhor dos Anéis",
  autor: "J.R.R. Tolkien",
  anoPublicacao: 1954,
  ler() {
    console.log("Lendo o livro...");
  },
  marcarPagina(pagina) {
    console.log(`Marcando a página ${pagina}.`);
  },
  fechar() {
    console.log("Fechando o livro.");
  },
};

const minhaConta = {
  saldo: 1000,
  numeroConta: "123456",
  titular: "João",
  depositar(quantia) {
    this.saldo += quantia;
  },
  sacar(quantia) {
    if (quantia <= this.saldo) {
      this.saldo -= quantia;
    } else {
      console.log("Saldo insuficiente.");
    }
  },
  consultarSaldo() {
    console.log(`Saldo atual: ${this.saldo}`);
  },
};

const meuAnimalDeEstimacao = {
  nome: "Rex",
  idade: 3,
  especie: "Cachorro",
  fazerSom() {
    console.log("Au au!");
  },
  alimentar() {
    console.log("Dando comida para o animal.");
  },
  brincar() {
    console.log("Brincando com o animal.");
  },
};

meuCarro.ligar();
meuLivro.ler();
minhaConta.depositar(500);
meuAnimalDeEstimacao.fazerSom();
