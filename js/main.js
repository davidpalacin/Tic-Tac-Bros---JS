let gridGame = [
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
      let field = event.target.id.split("field").pop();
      updateGridGame(field, "X");
    } else {
      let pieceO = createPiece("O");
      document.getElementById(event.target.id).appendChild(pieceO);
      let field = event.target.id.split("field").pop();
      updateGridGame(field, "O");
    }
    // Cambia la variable turno
    turn = changeTurn(turn);
  }
  // Miramos después de colocar la ficha si ahora el gridGame sigue teniendo huecos vacíos o no
  if(isGridFull()){
    document.getElementById("nombreJugador").innerHTML = "EMPATE";
  }
  checkVictory(gridGame);
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
    let pieceX = document.createElement("span");
    pieceX.innerText = "X";
    pieceX.alt = "ficha X";
    pieceX.className = "ficha";
    pieceX.dataset.team = 'X';

    return pieceX;
  }else if (typePiece === "O") {
    let pieceO = document.createElement("span");
    pieceO.innerText = "O";
    pieceO.alt = "ficha O";
    pieceO.className = "ficha";
    pieceO.dataset.team = 'O';

    return pieceO;
  }
}
function updateGridGame(field, team){
  if(team == "X"){
    if (field >= 0 && field <= 2) {
      gridGame[0][field] = "X";
    } else if (field >= 3 && field <= 5) {
      if(field == 3){
        gridGame[1][0] = "X";
      }
      if (field == 4) {
        gridGame[1][1] = "X";
      }
      if (field == 5) {
        gridGame[1][2] = "X";
      }
    } else if (field >= 6 && field <= 8) {
      if (field == 6) {
        gridGame[2][0] = "X";
      }
      if (field == 7) {
        gridGame[2][1] = "X";
      }
      if (field == 8) {
        gridGame[2][2] = "X";
      }
    }
  }else if(team == "O"){
    if (field >= 0 && field <= 2) {
      gridGame[0][field] = "O";
    } else if (field >= 3 && field <= 5) {
      if (field == 3) {
        gridGame[1][0] = "O";
      }
      if (field == 4) {
        gridGame[1][1] = "O";
      }
      if (field == 5) {
        gridGame[1][2] = "O";
      }
    } else if (field >= 6 && field <= 8) {
      if (field == 6) {
        gridGame[2][0] = "O";
      }
      if (field == 7) {
        gridGame[2][1] = "O";
      }
      if (field == 8) {
        gridGame[2][2] = "O";
      }
    }
  }
  console.log(gridGame);
}

// Comprobar la victoria
function checkVictory(gridGame){

}
