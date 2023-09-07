const readline = require("readline-sync")
function simularEleicao() {
    let votosCandidatoX = 0;
    let votosCandidatoY = 0;
    let votosCandidatoZ = 0;
    let votosBranco = 0;
    let votosNulo = 0;

    while (true) {

      console.log();                
      let voto = parseInt(readline.question(`Digite o número do seu voto \n
      1. Candidato X
      2. Candidato Y
      3. Candidato Z
      4. Voto Branco
      0. Encerrar Votação
      : `));

      if (voto === 0) {
         console.log("Votação encerrada.");
          break;  
        }

        switch (voto) {
          case 1:
          votosCandidatoX++;
          console.log();
          console.log("Você votou no Candidato X.");          
          console.log(`O Candidato X agora tem ${votosCandidatoX} votos.`);
          console.log();
          break;
          case 2:
          votosCandidatoY++;
          console.log();
          console.log("Você votou no Candidato Y.");          
          console.log(`O Candidato Y agora tem ${votosCandidatoY} votos.`);
          console.log();
          break;
          case 3:
          votosCandidatoZ++;
          console.log();
          console.log("Você votou no Candidato Z.");          
          console.log(`O Candidato Z agora tem ${votosCandidatoZ} votos.`);
          console.log();
          break;
          case 4:
          votosBranco++;
          console.log("Você votou em Branco."); 
          break;
          default:
          votosNulo++;
          alert("Voto nulo: número de candidato inválido.");
          break;
        }
         
    }

    const votosCandidatos = {
        candidato_X: votosCandidatoX,
        candidato_Y: votosCandidatoY,
        candidato_Z: votosCandidatoZ,
        branco: votosBranco,
        nulo: votosNulo
    };

    let vencedor = null;
    let maiorNumeroVotos = 0;

    for (let candidato in votosCandidatos) {
        if (votosCandidatos[candidato] > maiorNumeroVotos) {
            vencedor = candidato;
            maiorNumeroVotos = votosCandidatos[candidato];
        }
    }

    console.log("Resultado da eleição:");
    for (let candidato in votosCandidatos) {
        console.log(`${candidato}: ${votosCandidatos[candidato]} votos`);
    }

    console.log(`Vencedor: ${vencedor} com ${maiorNumeroVotos} votos.`);
}
simularEleicao();
