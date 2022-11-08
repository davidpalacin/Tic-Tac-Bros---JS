let tablero = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
let players = ["Player 1", "Player 2"];
let turno = players[0];
let infoTurno = document.createTextNode(players[0]);
document.getElementById("turno").appendChild(infoTurno);

// AÑADIR EL EVENTO A TODAS LAS CASILLAS
let fields = document.getElementsByClassName("tictac-grid-row-field");
for (let i = 0; i < fields.length; i++) {
  fields[i].id = "field" + i;
  fields[i].setAttribute("onclick", "addPiece(event)");
}

// AÑADIR FICHA SEGUN EL TURNO
function addPiece(event) {
  if (isFieldEmpty(event)) {
    if(turno == players[0]){
      console.log("Turno jugador 1");
      let pieceX = document.createTextNode("X");
      document.getElementById(event.target.id).appendChild(pieceX);
    }
    // else{
    //   let pieceO = document.createTextNode("O");
    //   document.getElementById(event.target.id).appendChild(pieceO);
    // }
    changeTurn(turno);
  }
}

// COMPRUEBA Y DEVUELVE BOOLEANO SEGUN SI LA CASILLA ESTÁ VACIA
function isFieldEmpty(event) {
  if (document.getElementById(event.target.id).hasChildNodes()) {
    return false;
  }
  return true;
}
function changeTurn(turno) {
  console.log("Se intenta cambiar el turno de " + turno);
  if (turno === players[0]) {
    console.log("confirmado el turno es de " + turno);
    let updatedTurn = document.createTextNode(players[1]);
    console.log("El turno nuevo seria de " + players[1]);
    console.log(document.getElementById("turno"));
    // let element = document.getElementById("turno").children[0];
    // element.replaceChild(updatedTurn, element.childNodes[0]);
  }
  //  else {
  //   const updatedTurn = document.createTextNode(players[0]);
  //   const element = document.getElementById("turno").children[0];
  //   element.replaceChild(updatedTurn, element.childNodes[0]);
  // }
}
