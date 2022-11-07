let field = document.getElementsByClassName("tictac-grid-row-field");

for (let i = 0; i < field.length; i++) {
    field[i].id = "field"+i;
    field[i].setAttribute("onclick", "addPiece(event)");
}

function addPiece(event){
    if(isFieldEmpty(event)){
        let pieceX = document.createTextNode("X");
        document.getElementById(event.target.id).appendChild(pieceX);
    }
}

function isFieldEmpty(event){
    if (document.getElementById(event.target.id).hasChildNodes()){
        return false;
    }
    return true;
}



// field.addEventListener("click", (event) => {
//   field.textContent = `Click count: ${event.detail}`;
// });
