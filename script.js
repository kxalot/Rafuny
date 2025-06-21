
const pruebas = {
    1: [
        "Caricias suaves por todo el cuerpo durante 2 minutos.",
        "Masaje en los pies con aceite.",
        "Beso en el cuello mientras el otro está con los ojos cerrados.",
        "Miradas fijas durante 1 minuto sin hablar.",
        "Masaje sensual en la espalda durante 2 minutos."
    ],
    2: [
        "Desliza una pluma por su cuerpo durante 2 minutos.",
        "Lamer lentamente el cuello y orejas.",
        "Dale órdenes suaves y sensuales durante 3 minutos.",
        "Utiliza un antifaz para privar de la vista durante una ronda.",
        "Besa todo el torso evitando los genitales."
    ],
    3: [
        "Ata sus muñecas y juega con caricias y mordiscos.",
        "Prueba un consolador vibrador en una parte inesperada.",
        "Simula un interrogatorio sensual con castigos si no responde.",
        "Hazle gemir sin tocar los genitales.",
        "Cruza los cuerpos y juega con el calor de la piel."
    ],
    4: [
        "Suspensión ligera con cuerdas o gancho (si es seguro).",
        "Juega con la fusta marcando ritmo.",
        "Simula una escena de sumisión total.",
        "Utiliza el crucifijo para inmovilizar totalmente.",
        "Domina con lenguaje sucio y órdenes explícitas."
    ]
};

let currentLevel = 1;
let completedTests = [];
let mode = "lento";
let maxPerLevel = 10;

function startGame() {
    document.getElementById("form-container").classList.add("hidden");
    document.getElementById("game-container").classList.remove("hidden");
    mode = document.querySelector('input[name="mode"]:checked').value;
    maxPerLevel = mode === "rapido" ? 5 : 10;
    nextTest();
}

function nextTest() {
    const levelTests = pruebas[currentLevel].filter(t => !completedTests.includes(t));
    if (levelTests.length === 0) {
        currentLevel++;
        if (!pruebas[currentLevel]) {
            document.getElementById("level-title").innerText = "🎉 ¡Fin del juego! 🎉";
            document.getElementById("test-box").innerText = "";
            return;
        }
        completedTests = [];
    }
    const randomIndex = Math.floor(Math.random() * pruebas[currentLevel].length);
    const prueba = pruebas[currentLevel][randomIndex];
    if (!completedTests.includes(prueba)) {
        completedTests.push(prueba);
    }
    if (completedTests.length >= maxPerLevel) {
        currentLevel++;
        completedTests = [];
        if (!pruebas[currentLevel]) {
            document.getElementById("level-title").innerText = "🎉 ¡Fin del juego! 🎉";
            document.getElementById("test-box").innerText = "";
            return;
        }
    }
    document.getElementById("level-title").innerText = `Nivel ${currentLevel} - ¡Vamos allá!`;
    document.getElementById("test-box").innerText = prueba;
}
