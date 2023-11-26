// Interface para os sanduíches
class Sanduiche {
  getDescricao() {}
  getCusto() {}
}

// Implementação do sanduíche base: Frango Assado
class FrangoAssado extends Sanduiche {
  getDescricao() {
    return "Sanduíche de frango assado";
  }

  getCusto() {
    return 4.50;
  }
}

// Decorator para adicionar pepperoni
class Pepperoni extends Sanduiche {
  constructor(sanduiche) {
    super();
    this.sanduiche = sanduiche;
  }

  getDescricao() {
    return this.sanduiche.getDescricao() + ", pepperoni";
  }

  getCusto() {
    return this.sanduiche.getCusto() + 0.99;
  }
}

// Decorator para adicionar queijo mussarela ralado
class QueijoMussarelaRalado extends Sanduiche {
  constructor(sanduiche) {
    super();
    this.sanduiche = sanduiche;
  }

  getDescricao() {
    return this.sanduiche.getDescricao() + ", queijo mussarela ralado";
  }

  getCusto() {
    return this.sanduiche.getCusto() + 2.00;
  }
}

// Criando o sanduíche de frango assado com os ingredientes adicionais
let meuSanduiche = new FrangoAssado();
meuSanduiche = new Pepperoni(meuSanduiche);
meuSanduiche = new QueijoMussarelaRalado(meuSanduiche);

// Obtendo a descrição e o custo total do sanduíche
console.log(meuSanduiche.getDescricao() + " custa $" + meuSanduiche.getCusto().toFixed(2));
