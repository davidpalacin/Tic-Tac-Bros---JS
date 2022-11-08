let tablero = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
let players = ["Player 1", "Player 2"];
let turn = players[0];
document.getElementById("nombreJugador").innerHTML = turn;

// AÑADIR EL EVENTO A TODAS LAS CASILLAS
let fields = document.getElementsByClassName("tictac-grid-row-field");
for (let i = 0; i < fields.length; i++) {
  fields[i].id = "field" + i;
  fields[i].setAttribute("onclick", "addPiece(event)");
}

// AÑADIR FICHA SI LA CASILLA ESTÁ VACÍA, Y PONE FICHA SEGÚN AL JUGADOR QUE LE TOQUE
function addPiece(event) {
  if (!document.getElementById(event.target.id).hasChildNodes()) {
    if (turn === players[0]) {
      let pieceX = createPiece("X");
      document.getElementById(event.target.id).appendChild(pieceX);
    } else {
      let pieceO = createPiece("O");
      document.getElementById(event.target.id).appendChild(pieceO);
    }
    // Cambia lavariable turno
    turn = changeTurn(turn);
  }
  // Miramos después de colocar la ficha si ahora el tablero sigue teniendo huecos vacíos o no
  if(isGridFull()){
    document.getElementById("nombreJugador").innerHTML = "EMPATE";
  }
  checkVictory();
}

function changeTurn(turn) {
  if (turn === players[0]) {
    turn = players[1];
    document.getElementById("nombreJugador").innerHTML = turn;
  } else {
    turn = players[0];
    document.getElementById("nombreJugador").innerHTML = turn;
  }
  return turn;
}

function isGridFull(){
  for (let i = 0; i < fields.length; i++) {
    if(!document.getElementById(fields[i].id).hasChildNodes()){
      return false;
    }
  }
  return true;
}
// Crea las piezas recibiendo si tiene que ser X o O 
function createPiece(typePiece){
  if(typePiece === "X"){
    let pieceX = document.createElement("img");
    pieceX.src = "../assets/img/pieceX.png";
    pieceX.alt = "ficha X";
    pieceX.className = "ficha";
    pieceX.dataset.team = 'X';
    return pieceX;
  }else if (typePiece === "O") {
    let pieceO = document.createElement("img");
    pieceO.src = "../assets/img/pieceO.png";
    pieceO.alt = "ficha X";
    pieceO.className = "ficha";
    pieceO.dataset.team = 'O';

    return pieceO;
  }
}

// Comprobar la victoria
function checkVictory(){
  console.log("A ver si alguien ha ganado...");
}