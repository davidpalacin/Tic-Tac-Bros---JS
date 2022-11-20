// guardar que modo de juego ha elegido el usuario
document.getElementById("themeSong").play();
let btnSinglePlayer = document.getElementById("btnSinglePlayer");
let btnDoublePlayer = document.getElementById("btnDoublePlayer");
let mute = document.getElementById("muteIcon");

btnSinglePlayer.addEventListener("click", () => {
  document.getElementById("coin").addEventListener("ended", () => {
    location.href = "index.html?gameMode=singlePlayer";
  });
  document.getElementById("coin").play();
});

btnDoublePlayer.addEventListener("click", () => {
  document.getElementById("coin").addEventListener("ended", () => {
    location.href = "index.html?gameMode=doublePlayer";
  });
  document.getElementById("coin").play();
});

mute.addEventListener("click", () => {
  if (document.getElementById("themeSong").paused){
    document.getElementById("themeSong").play();
  }else{
    document.getElementById("themeSong").pause();

  }
});
