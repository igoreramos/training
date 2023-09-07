const readline = require("readline-sync")
let gerador_matricula = 3

console.log("========== ESCOLA ==========");
console.log("========== MENU ==========");
console.log(" 1 - LISTAR TODOS OS ALUNOS");
console.log(" 2 - CADASTRAR NOVOS ALUNOS");
console.log(" 3 - BUSCAR UM ALUNO");
console.log(" 4 - ALTERAR OS ALUNOS");
console.log(" 0 - SAIR DO SISTEMA");

const aluno1 = {
    nome:"Galeto Jr.",
    notas: [8.1, 7.8, 9.5],
    matricula: 1,
};

const aluno2 = {
    nome: "Cremoso Filho",
    notas: [9.1, 7.2, 3],
    matricula: 2,
};

const aluno3 = {
    nome: "Danone Neto",
    notas: [4.7, 10, 9.5],
    matricula: 3,
};

const alunos = [aluno1, aluno2, aluno3];

var loop = true;
var matriculas;

while (loop) {
    let opcoes = readline.questionInt("Digite uma opção: ");
    switch (opcoes) {
        case 1: 
          console.log("Listando todos os Alunos");
          console.log("------------------------");
           for (const a of alunos) {
             let soma = 0;
             console.log();
             console.log(`Nome: ${a.nome}`);
             console.log(`Matrícula: ${a.matricula}`);
             console.log();
             for (let i = 0; i < a.notas.length; i++) {
                 console.log(`\t- Nota ${i + 1}: ${a.notas[i]}`);
                 soma += a.notas[i];
                };
             let media = soma / a.notas.length;
             console.log();
             console.log(`\t- Média: ${media.toFixed(1)}`);
             if (media > 7) {
                  console.log();
                  console.log(`*** Parabéns, você passou de ano! ***`);
                  console.log();
                } else {
                   console.log();
                   console.log("### VOCÊ FOI REPROVADO, SE ESFORCE MAIS ANO QUE VEM! ###");
                   console.log();
                };
            };
        break;

        case 2:
          let nomeAluno = readline.question("Digite o nome do aluno: ");
          let notasAluno = [];
          for (let i = 0; i < 3; i++){
            notasAluno[i] = readline.questionFloat(`Digite as notas ${i + 1}: `)
          };
          const aluno = {
            nome: nomeAluno,
            nota: notasAluno,
           };
           alunos.push(aluno);
        break;

        case 3:
            matriculas = readline.questionInt("Digite a matrícula do aluno: ");
            for (let m of alunos) {
               if (m.matricula === matriculas) {
                console.log(m.nome);
               };
            };
        break;

        case 4:
           matriculas = readline.questionInt("Digite a matrícula do aluno que deseja alterar: ");
           for (const a of alunos) {
            if (a.matricula === matriculas) {
                console.log(a.nome);
                a.nome = readline.question("Digite o nome do aluno: ");
                for (let i = 0; i < a.notas.length; i++) {
                    a.notas[i] = readline.questionFloat(`Digite a nota ${i + 1}: `);
                }
                console.log("Aluno alterado com sucesso!");
            };
           };                     
        break;
        
        case 0: 
          console.log("Saindo do sistema...");
          loop = false;
        break;

        default:
            console.log("Opção inválida");     
    };
    break;   
};
