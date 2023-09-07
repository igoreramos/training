class Node {
    constructor(nome, idade, filho = null) {
      this.nome = nome;
      this.idade = idade;
      this.filho = filho;
    }
  }
  
  class ListaEncadeada {
    constructor() {
      this.head = null;
    }
  
    adicionarPessoa(nome, idade, filho) {
      const newNode = new Node(nome, idade, filho);
  
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.filho) {
          current = current.filho;
        }
        current.filho = newNode;
      }
    }
  
    listarPessoas() {
      let current = this.head;
      while (current) {
        console.log(`Nome: ${current.nome}, Idade: ${current.idade}`);
        current = current.filho;
      }
    }
  }
  
  const lista = new ListaEncadeada();
  
  // Adicionando pessoas à lista
  lista.adicionarPessoa("Carlos", 21);
  lista.adicionarPessoa("Marcos", 28);
  lista.adicionarPessoa("Marcio", 5);
  lista.adicionarPessoa("Aninha", 3);
  
  // Listando as pessoas na lista
  lista.listarPessoas();
  