
const challenges = {
    1: ["Caricias lentas con los ojos cerrados", "Masaje con aceite caliente", "Desvestirse mutuamente con una sola mano", "Beso en el cuello sin usar las manos", "Soplar aire caliente en la piel desnuda"],
    2: ["Exploración con pluma", "Gemas de hielo en zonas sensibles", "Lamer lentamente el pecho", "Sujetar muñecas y besar profundamente", "Lamer sin tocar con las manos"],
    3: ["Atar al otro sin hablar", "Desafío visual sin tocar", "Sumisión: obedecer una orden sexy", "Dar palmadas suaves y provocadoras", "Provocar sin permitir tocar"],
    4: ["Juego con consolador", "Azotes con la fusta", "Desnudez obligatoria hasta el siguiente nivel", "Lengua y dedos: combinación prohibida", "Juego en el suelo atado/a"],
    5: ["Desafío libre", "El que pierde se queda atado/a", "Inmovilización completa", "Prueba de obediencia bajo presión", "Toque final del castillo"]
};

let state = {
    players: [],
    genders: [],
    mode: "rapido",
    level: 1,
    turn: 0,
    maxPerLevel: 5,
    history: {},
};

function startGame() {
    const p1 = document.getElementById("player1").value.trim();
    const g1 = document.getElementById("gender1").value;
    const p2 = document.getElementById("player2").value.trim();
    const g2 = document.getElementById("gender2").value;
    const mode = document.querySelector("input[name='mode']:checked").value;

    if (!p1 || !p2) return alert("Introduce ambos nombres.");

    state.players = [p1, p2];
    state.genders = [g1, g2];
    state.mode = mode;
    state.level = 1;
    state.turn = 0;
    state.maxPerLevel = mode === "lento" ? 10 : 5;
    state.history = {};

    document.getElementById("setup").classList.add("hidden");
    document.getElementById("game").classList.remove("hidden");

    nextChallenge();
}

function nextChallenge() {
    const level = state.level;
    if (!state.history[level]) state.history[level] = [];

    const pool = challenges[level].filter(c => !state.history[level].includes(c));
    if (pool.length === 0) {
        state.level++;
        if (!challenges[state.level]) {
            alert("¡Has completado el castillo!");
            return resetGame();
        }
        return nextChallenge();
    }

    const challenge = pool[Math.floor(Math.random() * pool.length)];
    state.history[level].push(challenge);

    const playerIndex = state.turn % 2;
    const name = state.players[playerIndex];

    document.getElementById("turnTitle").innerText = "Turno de...";
    document.getElementById("levelText").innerText = "Nivel " + level;
    document.getElementById("playerTurnText").innerText = "Turno de " + name;
    document.getElementById("challengeText").innerText = challenge;

    state.turn++;

    if (state.history[level].length >= state.maxPerLevel) {
        state.level++;
    }
}

function resetGame() {
    location.reload();
}
