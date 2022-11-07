let tablero = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];
let players = ["Player 1", "Player 2"];
let turno = players[0];
let infoTurno = document.createTextNode(players[0]);
document.getElementById("turno").appendChild(infoTurno);

// AÑADIR EL EVENTO A TODAS LAS CASILLAS
let fields = document.getElementsByClassName("tictac-grid-row-field");
for (let i = 0; i < fields.length; i++) {
    fields[i].id = "field"+i;
    fields[i].setAttribute("onclick", "addPiece(event)");
}

// AÑADIR FICHA SEGUN EL TURNO
function addPiece(event){
    if(isFieldEmpty(event)){    
        let pieceX = document.createTextNode("X");
        document.getElementById(event.target.id).appendChild(pieceX);
        changeTurn(turno);
    }
}
function addPieceO(event) {
  if (isFieldEmpty(event)) {
    let pieceO = document.createTextNode("O");
    document.getElementById(event.target.id).appendChild(pieceO);
  }
}

// COMPRUEBA Y DEVUELVE BOOLEANO SEGUN SI LA CASILLA ESTÁ VACIA
function isFieldEmpty(event){
    if (document.getElementById(event.target.id).hasChildNodes()){
        return false;
    }
    return true;
}
function changeTurn(turno){
    let updatedTurn = turno;
    if (turno === players[0]) {
      updatedTurn = document.createTextNode(players[1]);
    } else {
      updatedTurn = document.createTextNode(players[0]);
    }
    document.getElementById("turno").appendChild(updatedTurn);
}
