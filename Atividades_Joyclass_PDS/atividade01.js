// Interface para os produtos (computadores)
class Computer {
    constructor(ram, hdd, cpu) {
      this.ram = ram;
      this.hdd = hdd;
      this.cpu = cpu;
    }
  
    toString() {
      return `RAM: ${this.ram}GB, HDD: ${this.hdd}GB, CPU: ${this.cpu}GHz`;
    }
  }
  
  // Classes concretas que implementam a interface
  class PC extends Computer {
    constructor(ram, hdd, cpu) {
      super(ram, hdd, cpu);
      this.type = 'PC';
    }
  }
  
  class Server extends Computer {
    constructor(ram, hdd, cpu) {
      super(ram, hdd, cpu);
      this.type = 'Server';
    }
  }
  
  // Fábrica para criar instâncias do tipo abstrato da interface
  class ComputerFactory {
    createComputer(type, ram, hdd, cpu) {
      if (type === 'PC') {
        return new PC(ram, hdd, cpu);
      } else if (type === 'Server') {
        return new Server(ram, hdd, cpu);
      } else {
        throw new Error('Tipo de computador não reconhecido.');
      }
    }
  }
  
  // Exemplo de uso:
  const factory = new ComputerFactory();
  const myPC = factory.createComputer('PC', 8, 512, 3.4);
  console.log(myPC.toString()); // Saída: RAM: 8GB, HDD: 512GB, CPU: 3.4GHz
  