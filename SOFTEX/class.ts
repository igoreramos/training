class Pessoa {
    nome: string;
    email: string;
    idade: number;
    constructor(nome: string, email: string, idade: number) {
        this.nome = nome;
        this.email = email;
        this.idade = idade;
    }
};

// class Aluno extends Pessoa {
//     matricula: number;
//     constructor(matricula: number) {
//         super(matricula,)
//         this.nome, 
//         this.email, 
//         this.idade
//         this.matricula = matricula
//     }
// }

class Retangulo {
    altura: number
    largura: number
    constructor(altura: number, largura: number) {
        this.altura = altura;
        this.largura = largura;
    }

    areaDoRetangulo() {
        return this.altura * this.largura
    }

    perimetroDoRetangulo() {
        return 2 * (this.altura + this.largura)
    }
}
const Altura = new Retangulo(10, 20)
console.log(Altura.areaDoRetangulo());
console.log(Altura.perimetroDoRetangulo());

class Circulo {
    raio: number
    constructor(raio: number) {
        this.raio = raio
    }

    areaDoCirculo() {
        return Math.PI * (this.raio * this.raio)
    }

    circunferenciaDoCirculo() {
        return 2 * (Math.PI * this.raio)
    }
}
const Area = new Circulo(10)
console.log(Area.areaDoCirculo().toFixed(2));
console.log(Area.circunferenciaDoCirculo().toFixed(2));

class ContaBancaria {
    saldo: number
    numeroConta: number
    constructor(saldo: number, numeroConta: number) {
        this.saldo = saldo;
        this.numeroConta = numeroConta;
    }

    depositar(valor) {
        return this.saldo += valor
    }

    sacar(valor) {
        return this.saldo -= valor
    }

    verificarSaldo() {
        console.log(`O saldo é ${this.saldo}`);

    }
}
const valor = new ContaBancaria(200, 4450)
console.log(valor.depositar(50));
console.log(valor.sacar(10));
valor.verificarSaldo();

class Invoice {
    itemFaturado: number
    descricao: string
    qntComprada: number
    precoUntItem: number
    constructor(itemFaturado: number, descricao: string, qntComprada: number, precoUntItem: number) {
        this.itemFaturado = itemFaturado;
        this.descricao = descricao;
        this.precoUntItem = precoUntItem;
        this.qntComprada = qntComprada;
    }
    set ItemFaturado(number) {
        this.itemFaturado = number;
    }

    get ItemFaturado() {
        return this.itemFaturado;
    }

    set Descricao(string) {
        this.descricao = string;
    }

    get Descricao() {
        return this.descricao
    }

    set PrecoUntItem(number) {
        this.PrecoUntItem = number
    }

    get PrecoUntItem() {
        return this.descricao
    }

    set QntComprada(number) {
        this.qntComprada = number
    }

    get QntComprada() {
        return this.QntComprada
    }

    getinvoiceAmount() {
        return (this.qntComprada * this.precoUntItem) * 2
    }
}

const Invoice2 = new Invoice(50, "carros", 100, 5.99)
console.log(Invoice2.getinvoiceAmount());













