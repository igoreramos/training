// var numero: number =  10;
// var boolean: boolean = true;
// var string: string = "Carreta";
// var nulo: null = null;

// var divisionByZero: string = !(10 / 0 == Infinity) ? "OK" : "NOT";
// console.log(divisionByZero);

// var obj: Object = new Object();
// var obj1: Object = {
//     nome: "Zeca",
//     idade: 101
// };
// console.log(obj);
// console.log(obj1);

// var array: Array<string> = ["gato", "cachorro"]
// console.log(array);

// var str: string = "Carro"
// console.log("aqui".lastIndexOf(str));

let veiculos: Array<string> = ["Caminhão", "Moto", "Carro", "Onibus"];
console.log(veiculos);

let veiculos2: Array<string> = ["Caminhão2", "Moto2", "Carro2", "Onibus2"]; 
console.log("Metodo Concat", veiculos2.concat(veiculos));

veiculos.push("Metro")
console.log("Metodo push", veiculos);

veiculos.pop();
console.log("Metodo pop", veiculos);

veiculos.shift();
console.log("Metodo shift", veiculos);

veiculos.unshift("Velocipede")
console.log("Metodo unshift", veiculos);

let veiculos3: string = veiculos.join("* ");
console.log("Metodo join --> ", veiculos3);

veiculos.slice();
console.log(veiculos);

veiculos.push("Bitrem");
console.log("Metodo push", veiculos);

veiculos.splice(1, 3)
console.log("Metodo Splice", veiculos);











