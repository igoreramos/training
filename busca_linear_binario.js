function buscaLinear(array, alvo) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === alvo) {
        return i; 
      }
    }
    return -1; 
  }
  
  const array = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
  const valorAlvo = 20;
  
  const indiceEncontrado = buscaLinear(array, valorAlvo);
  
  if (indiceEncontrado !== -1) {
    console.log(`O valor ${valorAlvo} foi encontrado no índice ${indiceEncontrado}.`);
  } else {
    console.log(`O valor ${valorAlvo} não foi encontrado no array.`);
  }
  