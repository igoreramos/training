const banco = {
    conta: "123456",
    saldo: 1000,
    tipoDeConta: "Conta Corrente",
    agencia: "7890",

    buscarSaldo: function () {
        return this.saldo;
    },

    deposito: function (valor) {
        if (valor > 0) {
            this.saldo += valor;
            return `Depósito de ${valor} realizado com sucesso. Novo saldo: ${this.saldo}`;
        } else {
            return "Valor de depósito inválido";
        }
    },

    saque: function (valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            return `Saque de ${valor} realizado com sucesso. Novo saldo: ${this.saldo}`;
        } else {
            return "Saldo insuficiente ou valor de saque inválido";
        }
    },

    numeroDaConta: function () {
        return this.conta;
    },
};

console.log(`Conta: ${banco.numeroDaConta()}`);
console.log(`Saldo atual: ${banco.buscarSaldo()}`);
console.log(banco.deposito(500));
console.log(banco.saque(300));
