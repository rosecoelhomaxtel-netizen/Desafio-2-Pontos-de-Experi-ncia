// Desafio de Código: A Jornada do Herói (DIO)

function jornadaDoHeroi(posicaoInicial, totalPassos) {
    const posicaoFinal = posicaoInicial + totalPassos;
    return `Posicao final do heroi: ${posicaoFinal}`;
}

// Exemplos de teste no Node.js
console.log(jornadaDoHeroi(2, 3));   // Posicao final do heroi: 5
console.log(jornadaDoHeroi(15, 3));  // Posicao final do heroi: 18
console.log(jornadaDoHeroi(10, 6));  // Posicao final do heroi: 16