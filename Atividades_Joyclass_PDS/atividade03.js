class SistemaSeguranca {
  constructor() {
    this.senhaBaseSecreta = 'senha123'; // Senha da Base Secreta
    this.acessoConcedido = false; // Controle de acesso
  }

  static getInstance() {
    if (!SistemaSeguranca.instance) {
      SistemaSeguranca.instance = new SistemaSeguranca();
    }
    return SistemaSeguranca.instance;
  }

  acessarBaseSecreta(senha) {
    if (senha === this.senhaBaseSecreta) {
      this.acessoConcedido = true;
      console.log('Acesso concedido à Base Secreta.');
    } else {
      this.acessoConcedido = false;
      console.log('Acesso negado à Base Secreta.');
    }
  }
}

// Programa principal
const agenteSecreto = SistemaSeguranca.getInstance();
agenteSecreto.acessarBaseSecreta('senha123'); // Tenta acessar com senha correta
// Saída: Acesso concedido à Base Secreta.

const outroAgente = SistemaSeguranca.getInstance();
outroAgente.acessarBaseSecreta('senha456'); // Tenta acessar com senha incorreta
// Saída: Acesso negado à Base Secreta.
