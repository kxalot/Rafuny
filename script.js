
document.getElementById("startBtn").addEventListener("click", function() {
    const player1 = document.getElementById("player1").value.trim();
    const player2 = document.getElementById("player2").value.trim();
    if (!player1 || !player2) {
        alert("Introduce el nombre de ambos jugadores.");
        return;
    }
    alert(`¡Bienvenidos ${player1} y ${player2} al Castillo!`);
    // Aquí se cargaría el juego real con las pruebas
});
