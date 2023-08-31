// Objetos

// Exercícios

// 1. Como você cria um objeto vazio, chamado pessoa em JavaScript?
// 2. Como você adiciona a propriedade "nome" com o valor "João" a um objeto chamado "pessoa"?

const pessoa = new Object ()
pessoa.nome = "João"
console.log(pessoa.nome);
console.log(pessoa["nome"]);

// 3. Como você acessa o valor da propriedade "idade" de um objeto chamado "usuario"?

const usuario = new Object ()
usuario.idade = 52
console.log(usuario.idade);
console.log(usuario["idade"]);

// 4. Suponha que você tenha um objeto "produto" com a propriedade "preco" definida como 50. Como você altera o valor dessa propriedade para 75?

const produto = {
    preco: 50
}
console.log(produto.preco);
produto.preco = 75
console.log(produto.preco);

// 5. Como você remove a propriedade "email" de um objeto chamado "contato"?

const contato = {
    email: "asd@asd.com"
}
console.log(contato.email);
delete contato.email
console.log(contato.email);

// 6. Como você adiciona uma propriedade "endereco" com o valor "Rua A, 123" a um objeto existente chamado "cliente"?

const cliente = new Object ()
console.log(cliente);
cliente.endereco = "Rua A, 123"
console.log(cliente.endereco);

// 7. Se você tem um objeto "empresa" com uma propriedade "departamentos", como você acessa o nome do primeiro departamento?

const empresa = {
    departamentos: ["rh", "dp", "copa"]
}
console.log(empresa.departamentos[0]);

// 8. Suponha que você tenha um objeto "aluno" com a propriedade "notas" contendo [85, 90, 78]. Como você altera a segunda nota para 95?

const aluno = {
    notas: [85, 90, 78]
}
console.log(aluno);
aluno.notas[1] = 95
console.log(aluno);

// 9. Se você tem um objeto "dados" com uma propriedade "valores" contendo [10, 20, 30], como você remove o segundo valor (20) desse array?

const dados = {
    valores: [10, 20, 30]
};
console.log(dados);
dados.valores.splice(1, 1)
console.log(dados);

// 10. Como você cria um objeto com as propriedades "titulo" (com o valor "Livro") e "autor" (com o valor "Maria")?

const livro = new Object
livro.titulo = "Livro"
livro.autor = "Maria"
console.log(livro);

// 11. 

const agendamento = {
    Segunda: "Segunda-feira",
    Terca: "Terça-feira",
    Quarta: "Quarta-feira",
    Quinta: "Quinta-feira",
    Sexta: "Sexta-feira",
    Sabado: "Sábado",
    Domingo: "Domingo"
};

console.log(agendamento);

// 12.

const GodOfWar = {
    inimigoPesado: "Barbaro",
    inimigoLeve: "Mercenario",
    inimigoMagico: "Mago",
    inimigoArqueiro: "Arqueiro",
    
};

console.log(GodOfWar);
console.log("Para matar um", GodOfWar.inimigoLeve, "você precisa usar o gap.");

// 13.

const passagens = {
    Economica: 389.89,
    Executiva: 879.99,
    PrimeiraClasse: 2.589
};
console.log(passagens);

// 14.

const tarefas = {
    Trabalho: "Gamer",
    Estudo: "Programação",
    Lazer: "Jogar bola"
};
console.log(tarefas);

// 15.

const ecommerce = {
    EmProcessamento: "Aguardando pagamento",
    Enviado: "Pagamento confirmado, pedido enviado",
    Entregue: "Pedido entregue ao destinatário"
};
console.log();;


