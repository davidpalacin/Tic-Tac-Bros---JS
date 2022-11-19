// guardar que modo de juego ha elegido el usuario
btnSinglePlayer = document.getElementById("btnSinglePlayer");
btnDoublePlayer = document.getElementById("btnDoublePlayer");

btnSinglePlayer.addEventListener("click", () => {
  location.href = "../index.html?gameMode=singlePlayer";
});
btnDoublePlayer.addEventListener("click", () => {
  location.href = "../index.html?gameMode=doublePlayer";
});
