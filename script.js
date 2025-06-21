
const pruebasPorNivel = {
  1: [
    "Caricias suaves por todo el cuerpo durante 2 minutos.",
    "Besos en el cuello sin usar las manos.",
    "Masaje relajante en la espalda durante 3 minutos.",
    "Miradas fijas durante 1 minuto sin reírse.",
    "Juega con los dedos de tu pareja mientras susurras algo bonito."
  ],
  2: [
    "Venda los ojos de tu pareja y bésala en distintos lugares.",
    "Atar suavemente las muñecas y dar un masaje sensual.",
    "Lamer con hielo el lóbulo de la oreja.",
    "Jugar con plumas en la zona de los muslos.",
    "Simula un interrogatorio erótico con contacto suave."
  ],
  3: [
    "Azota suavemente con la fusta las zonas erógenas.",
    "Usa un vibrador en zonas no genitales primero.",
    "Desliza una cuerda por el cuerpo desnudo de tu pareja.",
    "Prueba el rol dominante con palabras y contacto.",
    "Haz que tu pareja permanezca quieta mientras la exploras."
  ],
  4: [
    "Crucifixión en palo con estimulación alterna.",
    "Uso del tentáculo en zona íntima durante 5 minutos.",
    "Suspensión suave en el gancho con besos.",
    "Escena completa de sumisión con palabra de seguridad.",
    "Juega con lubricante caliente y frío en los genitales."
  ]
};

let nivel = 1;
let indicePrueba = 0;
let pruebasNivelActual = [];

function iniciarJuego() {
  document.getElementById("pantallaInicio").style.display = "none";
  document.getElementById("pantallaJuego").style.display = "block";
  avanzarNivel();
}

function avanzarNivel() {
  pruebasNivelActual = [...pruebasPorNivel[nivel]];
  indicePrueba = 0;
  mostrarPrueba();
}

function mostrarPrueba() {
  if (indicePrueba >= pruebasNivelActual.length) {
    nivel++;
    if (!pruebasPorNivel[nivel]) {
      document.getElementById("nivelTitulo").innerText = "¡Has completado el castillo!";
      document.getElementById("pruebaTexto").innerText = "";
      return;
    }
    avanzarNivel();
    return;
  }

  document.getElementById("nivelTitulo").innerText = `Nivel ${nivel} - ¡Vamos allá!`;
  document.getElementById("pruebaTexto").innerText = pruebasNivelActual[indicePrueba];
}

function siguientePrueba() {
  indicePrueba++;
  mostrarPrueba();
}
