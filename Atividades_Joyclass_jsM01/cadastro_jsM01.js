class Pessoa {
    constructor(nome, salario, idade, possuiDiploma) {
      this.nome = nome;
      this.salario = salario;
      this.idade = idade;
      this.possuiDiploma = possuiDiploma;
    }
  }  
  
  const pessoa1 = new Pessoa("João", 3000.50, 30, true);
  const pessoa2 = new Pessoa("Maria", 2500.75, 25, false);  

  console.log("Dados da Pessoa 1:");
  console.log("Nome:", pessoa1.nome);
  console.log("Salário:", pessoa1.salario);
  console.log("Idade:", pessoa1.idade);
  console.log("Possui Diploma:", pessoa1.possuiDiploma);

  console.log();  
  
  console.log("Dados da Pessoa 2:");
  console.log("Nome:", pessoa2.nome);
  console.log("Salário:", pessoa2.salario);
  console.log("Idade:", pessoa2.idade);
  console.log("Possui Diploma:", pessoa2.possuiDiploma);
  

