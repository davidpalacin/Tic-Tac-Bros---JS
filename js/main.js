/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
let gridGame = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
let players = [
  {
    nombre: "Player 1",
    ficha: "X"
  },
  {
    nombre: "Player 2",
    ficha: "O"
  }
];
let turn = players[0];
document.getElementById('turno').innerHTML = 'Turno de: ' + turn.nombre;

// AÑADIR EL EVENTO A TODAS LAS CASILLAS
const fields = document.getElementsByClassName('tictac-grid-row-field');
for (let i = 0; i < fields.length; i++) {
  fields[i].id = 'field' + i;
  fields[i].setAttribute('onclick', 'addPiece(event)');
}

// AÑADIR FICHA SI LA CASILLA ESTÁ VACÍA, Y PONE FICHA SEGÚN AL JUGADOR QUE LE TOQUE
function addPiece(event) {
  if (!document.getElementById(event.target.id).hasChildNodes()) {
    const piece = createPiece(turn);
    document.getElementById(event.target.id).appendChild(piece);
    const field = event.target.id.split("field").pop();
    updateGridGame(field, turn.ficha);
    let isWin = checkVictory(gridGame, turn.ficha);
    if (isWin) {
      alert("Ha ganado " + turn.nombre)
    }else{
      turn = changeTurn(turn);
    }
    
  }
  // Miramos después de colocar la ficha si ahora el gridGame sigue teniendo huecos vacíos o no
  if (isGridFull()) {
    document.getElementById("turno").innerHTML = 'EMPATE';
  }
}

function changeTurn(turn) {
  turn == players[0] ? (turn = players[1]) : (turn = players[0]);
  document.getElementById("turno").innerHTML = "Turno de: " + turn.nombre;
  return turn;
}

function isGridFull() {
  for (let i = 0; i < fields.length; i++) {
    if (!document.getElementById(fields[i].id).hasChildNodes()) {
      return false;
    }
  }
  return true;
}
// Crea las piezas recibiendo si tiene que ser X o O
function createPiece(turn) {
  if (turn === players[0]) {
    const piece = document.createElement('span');
    piece.innerText = 'X';
    piece.alt = 'ficha X';
    piece.className = 'ficha';
    piece.dataset.team = 'X';

    return piece;
  } else {
    const piece = document.createElement('span');
    piece.innerText = 'O';
    piece.alt = 'ficha O';
    piece.className = 'ficha';
    piece.dataset.team = 'O';

    return piece;
  }
}

function updateGridGame(field, team) {
  if (field >= 0 && field <= 2) {
    gridGame[0][field] = team;
  } else if (field >= 3 && field <= 5) {
    if (field == 3) {
      gridGame[1][0] = team;
    }
    if (field == 4) {
      gridGame[1][1] = team;
    }
    if (field == 5) {
      gridGame[1][2] = team;
    }
  } else if (field >= 6 && field <= 8) {
    if (field == 6) {
      gridGame[2][0] = team;
    }
    if (field == 7) {
      gridGame[2][1] = team;
    }
    if (field == 8) {
      gridGame[2][2] = team;
    }
  }
}

// Comprobar la victoria
function checkVictory(gridGame, team) {
  let isWin = false;
  // Victorias en horizontal de team:
  gridGame.forEach((row) => {
    if (row.every((thisPiece) => thisPiece === team)) {
      isWin = true;
    }
  });
  // Victorias en vertical y diagonal de team
  if (
    gridGame[0][0] == team &&
    gridGame[1][0] == team &&
    gridGame[2][0] == team
  ) {
    isWin = true;
  } else if (
    gridGame[0][1] == team &&
    gridGame[1][1] == team &&
    gridGame[2][1] == team
  ) {
    isWin = true;
  } else if (
    gridGame[0][2] == team &&
    gridGame[1][2] == team &&
    gridGame[2][2] == team
  ) {
    isWin = true;
  } else if (
    gridGame[0][0] == team &&
    gridGame[1][1] == team &&
    gridGame[2][2] == team
  ) {
    isWin = true;
  } else if (
    gridGame[0][2] == team &&
    gridGame[1][1] == team &&
    gridGame[2][0] == team
  ) {
    isWin = true;
  }

  return isWin;
}
