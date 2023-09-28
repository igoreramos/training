// Fila
class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(item) {
      this.items.push(item);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return "A fila está vazia.";
      }
      return this.items.shift();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
}
  
const fila = new Queue();
const array = [3, 7, 9, 1, 0];
  
array.forEach(item => {
   fila.enqueue(item);
 });
  
while (!fila.isEmpty()) {
    console.log(fila.dequeue());
  }
  

// Lista 

const lista = [];
const array1 = [3, 7, 9, 1, 0];

array1.forEach(item => {
  lista.push(item);
});

while (lista.length > 0) {
  console.log(lista.pop());
}

// Pilha

class Stack {
    constructor() {
      this.items = [];
    }
  
    push(item) {
      this.items.push(item);
    }
  
    pop() {
      if (this.isEmpty()) {
        return "A pilha está vazia.";
      }
      return this.items.pop();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  const pilha = new Stack();
  const array2 = [3, 7, 9, 1, 0];
  
  array2.forEach(item => {
    pilha.push(item);
  });
  
  while (!pilha.isEmpty()) {
    console.log(pilha.pop());
  }
  

  