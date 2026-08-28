// Desafio de Código: Pontos de Experiência (DIO)

function calcularXP(nivelMonstro, dificuldade) {
    const xpGanho = nivelMonstro * dificuldade * 100;
    return `Voce ganhou ${xpGanho} XP!`;
}

// Testes locais no Node.js
console.log(calcularXP(45, 40)); // Voce ganhou 180000 XP!
console.log(calcularXP(41, 38)); // Voce ganhou 155800 XP!
console.log(calcularXP(15, 20)); // Voce ganhou 30000 XP!