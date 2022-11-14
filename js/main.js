let gridGame = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
let miContainer = document.getElementsByClassName("container");
let players = [
  {
    nombre: "Mario",
    ficha:
      "https://raw.githubusercontent.com/davidpalacin/proyectoSemana3/0cb02f92ecc4e5e7cf59fca7ce86dcd715a390b3/assets/img/redchampi.png",
    imagen:
      "https://raw.githubusercontent.com/davidpalacin/proyectoSemana3/ccc8939e3c11d63e5187be4d7bc993fb01b0860a/assets/img/mario.svg",
    color: "#c32828",
  },
  {
    nombre: "Luigi",
    ficha:
      "https://raw.githubusercontent.com/davidpalacin/proyectoSemana3/0cb02f92ecc4e5e7cf59fca7ce86dcd715a390b3/assets/img/greenchampi.png",
    imagen:
      "https://raw.githubusercontent.com/davidpalacin/proyectoSemana3/ccc8939e3c11d63e5187be4d7bc993fb01b0860a/assets/img/luigi.svg",
    color: "#4fc300",
  },
];
let turn = players[Math.round(Math.random())];
document.getElementById('turno').innerHTML = `¡Es tu turno, ${turn.nombre}!`;
changeGameColor(turn);

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
    if (checkVictory(gridGame, turn)) {
      showWiningScreen(turn);
    }else if(isGridFull()){
      showReplayScreen();
    }else{
      turn = changeTurn(turn);
      changeGameColor(turn);
    }
  }
}

function changeTurn(turn) {
  turn == players[0] ? (turn = players[1]) : (turn = players[0]);
  document.getElementById("turno").innerHTML = `¡Es tu turno, ${turn.nombre}!`;
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
  const piece = document.createElement('span');
  piece.className = 'ficha';
  piece.innerHTML = "<img alt='ficha del jugador' src='"+turn.ficha+"'/>";
  return piece;
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
function checkVictory(gridGame, turn) {
  let isWin = false;
  // Victorias en horizontal de team:
  gridGame.forEach((row) => {
    if (row.every((thisPiece) => thisPiece === turn.ficha)) {
      isWin = true;
    }
  });
  // Victorias en vertical y diagonal de turn.ficha
  if (
    gridGame[0][0] == turn.ficha &&
    gridGame[1][0] == turn.ficha &&
    gridGame[2][0] == turn.ficha
  ) {
    isWin = true;
  } else if (
    gridGame[0][1] == turn.ficha &&
    gridGame[1][1] == turn.ficha &&
    gridGame[2][1] == turn.ficha
  ) {
    isWin = true;
  } else if (
    gridGame[0][2] == turn.ficha &&
    gridGame[1][2] == turn.ficha &&
    gridGame[2][2] == turn.ficha
  ) {
    isWin = true;
  } else if (
    gridGame[0][0] == turn.ficha &&
    gridGame[1][1] == turn.ficha &&
    gridGame[2][2] == turn.ficha
  ) {
    isWin = true;
  } else if (
    gridGame[0][2] == turn.ficha &&
    gridGame[1][1] == turn.ficha &&
    gridGame[2][0] == turn.ficha
  ) {
    isWin = true;
  }
  return isWin;
}

function showWiningScreen(turn){
  document.getElementById("victory-text").innerHTML = `¡Enhorabuena, ${turn.nombre}!`;
  document.getElementById("win-screen").style.backgroundColor = turn.color;
  document.getElementById('playerImage').style.backgroundImage = `url("${turn.imagen}")`;
  document.getElementById('win-screen').style.display = 'flex';
  miContainer[0].style.display = "none";
}
function showReplayScreen(){
  document.getElementById("victory-text").innerHTML = '¡Oops, habéis quedado en tablas! ¿Un desempate?';
  document.getElementById('replay-screen').style.display = 'flex';
}

// Para comenzar una partida nueva, reestablecer el tablero a vacío, esconder la pantalla de victoria, mostrar el container de nuevo, establecer un turno a un jugador aleatorio.
function replay(){
  for (let i = 0; i < fields.length; i++) {
    fields[i].innerHTML = '';
  }
  gridGame = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  document.getElementById("win-screen").style.display = "none";
  // miContainer[0].style.display = "flex";
  turn = players[Math.round(Math.random())];
  document.getElementById("turno").innerHTML = `¡Es tu turno, ${turn.nombre}!`;
  changeGameColor(turn);
  miContainer[0].style.display = "flex";
}

function changeGameColor(turn){
  document.body.style.backgroundColor = turn.color;
}