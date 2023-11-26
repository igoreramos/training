// Interface Galinha
class Galinha {
  cacarejar() {}
  bicar() {}
}

// Implementação de Pato
class Pato {
  grasnar() {
    console.log("Quack! Quack!");
  }

  voar() {
    console.log("Estou voando!");
  }
}

// Adaptador para permitir que um Pato seja usado como Galinha
class AdaptadorPato extends Galinha {
  constructor(pato) {
    super();
    this.pato = pato;
  }

  cacarejar() {
    this.pato.grasnar();
  }

  bicar() {
    this.pato.voar();
  }
}

// Classe para demonstrar o uso do AdaptadorPato
class AdaptadorPatoDemo {
  static testarAdaptador() {
    const meuPato = new Pato();
    const adaptador = new AdaptadorPato(meuPato);

    console.log("Vamos fazer o pato agir como uma galinha:");
    adaptador.cacarejar();
    adaptador.bicar();
  }
}

// Testando o adaptador
AdaptadorPatoDemo.testarAdaptador();
