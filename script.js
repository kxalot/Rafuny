
document.getElementById("startButton").addEventListener("click", () => {
  document.getElementById("welcomeForm").style.display = "none";
  document.getElementById("gameContainer").style.display = "flex";
  iniciarNivel();
});

let nivelActual = 1;
let pruebasPorNivel = {
  1: [
    "Caricias suaves por todo el cuerpo durante 2 minutos.",
    "Masaje en espalda o cuello durante 3 minutos.",
    "Mirarse fijamente sin hablar durante 60 segundos.",
    "Besos lentos por el cuello.",
    "Rozar piel con pluma o tela suave durante 2 minutos."
  ],
  2: [
    "Atar manos a la espalda y besar sin usar las manos.",
    "Lamer lentamente el torso o espalda.",
    "Probar temperaturas (cubito de hielo o algo caliente).",
    "Desnudar lentamente una prenda sin hablar.",
    "Lamer con suavidad el lóbulo de la oreja mientras se susurra algo caliente."
  ],
  3: [
    "Utilizar juguete vibrador en cualquier parte del cuerpo durante 1 min.",
    "Lamer lentamente la parte interna del muslo sin tocar genitales.",
    "Dejar que uno se siente en el otro y se mueva a placer.",
    "Atar tobillos y besar desde los pies hacia arriba.",
    "Simular sexo oral sin llegar a tocar genitales (teasing)."
  ],
  4: [
    "Elige una postura sexual diferente y mantenerla 5 minutos.",
    "Practicar sexo oral sin reciprocidad durante 5 minutos.",
    "Atar al otro y explorar todo su cuerpo.",
    "Usar el gancho del techo o crucifixión con creatividad y seguridad.",
    "Cumple una orden dada sin rechistar. Cualquier orden."
  ]
};
let pruebasRestantes = [];
let velocidad = "rapido";

function iniciarNivel() {
  velocidad = document.querySelector("input[name='speed']:checked").value;
  const total = velocidad === "rapido" ? 5 : 10;
  pruebasRestantes = [...pruebasPorNivel[nivelActual]];
  mostrarPrueba();
}

function mostrarPrueba() {
  if (pruebasRestantes.length === 0) {
    nivelActual++;
    if (nivelActual > 4) {
      document.getElementById("gameContainer").innerHTML = "<h1>🔥 Has conquistado el castillo 🔥</h1>";
      return;
    } else {
      iniciarNivel();
      return;
    }
  }

  const index = Math.floor(Math.random() * pruebasRestantes.length);
  const prueba = pruebasRestantes.splice(index, 1)[0];

  document.getElementById("gameContainer").innerHTML = `
    <h2>Nivel ${nivelActual} - ¡Vamos allá!</h2>
    <p style="background: deeppink; padding: 15px; border-radius: 10px;">${prueba}</p>
    <button onclick="mostrarPrueba()" style="background: deeppink; padding: 10px 20px; border-radius: 10px; border: none; color: white; margin-top: 10px;">Siguiente prueba</button>
  `;
}
