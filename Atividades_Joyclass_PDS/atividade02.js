class Veiculo {
  constructor(modelo, marca, cor, numeroRodas) {
    this.modelo = modelo;
    this.marca = marca;
    this.cor = cor;
    this.numeroRodas = numeroRodas;
  }

  clone() {
    const proto = Object.getPrototypeOf(this);
    const cloned = Object.create(proto);
    return Object.assign(cloned, this);
  }

  represent() {
    return `Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Número de Rodas: ${this.numeroRodas}`;
  }
}

class Carro extends Veiculo {
  constructor(modelo, marca, cor, numeroRodas, numeroPortas) {
    super(modelo, marca, cor, numeroRodas);
    this.numeroPortas = numeroPortas;
  }

  represent() {
    return `${super.represent()}, Número de Portas: ${this.numeroPortas}`;
  }
}

class Moto extends Veiculo {
  constructor(modelo, marca, cor, numeroRodas, cilindradas) {
    super(modelo, marca, cor, numeroRodas);
    this.cilindradas = cilindradas;
  }

  represent() {
    return `${super.represent()}, Cilindradas: ${this.cilindradas}`;
  }
}


class Aplicacao {
  static criarVeiculos() {
    const veiculos = [];
    const carroPrototype = new Carro('Modelo Carro', 'Marca Carro', 'Azul', 4, 4);
    const motoPrototype = new Moto('Modelo Moto', 'Marca Moto', 'Vermelha', 2, 250);

    for (let i = 0; i < 3; i++) {
      veiculos.push(carroPrototype.clone());
    }

    for (let i = 0; i < 3; i++) {
      veiculos.push(motoPrototype.clone());
    }

    return veiculos;
  }

  static cloneVeiculos(veiculos) {
    const clones = [];
    for (const veiculo of veiculos) {
      clones.push(veiculo.clone());
    }
    return clones;
  }
}


const veiculos = Aplicacao.criarVeiculos();
const clones = Aplicacao.cloneVeiculos(veiculos);

for (const clone of clones) {
  console.log(clone.represent());
}
