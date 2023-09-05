// import {
//   kingMoves,
//   queenMoves,
//   rookMoves,
//   bishopMoves,
//   knightMoves,
//   pawnMoves,
// } from "./moves";

let currentPlayer = "white",
  possibleMoves = [],
  prevPiece = null;

document.onreadystatechange = () => {
  initialSetup();
};

function initialSetup() {
  const items = document.getElementsByClassName("item");

  [...items].forEach((item) => {
    // const ele = document.getElementById(item.id);
    // console.log(ele);
    item.addEventListener("click", () => {
      if (!prevPiece) {
        prevPiece = item;
        checkPossibleMoves(item);
      } else {
        // Target item, check for move legality and piece reset
        prevPiece = null;
      }

      console.log("Clicked on:", item.id);
    });
  });
}

function checkPossibleMoves(ele) {
  //   console.log(ele);
  if (currentPlayer === "white") {
    if (ele.innerText == "♔") {
      kingMoves(ele);
    } else if (ele.innerText == "♕") {
      queenMoves(ele);
    } else if (ele.innerText == "♖") {
      console.log("Rook clicked");
      rookMoves(ele);
    } else if (ele.innerText == "♗") {
      bishopMoves(ele);
    } else if (ele.innerText == "♘") {
      knightMoves(ele);
    } else if (ele.innerText == "♙") {
      //   console.log("Pawned");
      pawnMoves(ele);
    }
  } else {
  }
}

function pawnMoves(ele) {
  const id = ele.id;
  const row = id[1]; // 2
  const column = id[0]; // a

  if (column == "a") {
    possibleMoves.push("a" + `${parseInt(id[1]) + 1}`);
    possibleMoves.push(
      String.fromCharCode("a".charCodeAt(0) + 1) + `${parseInt(id[1]) + 1}`
    );
  } else if (column == "h") {
    possibleMoves.push("h" + `${parseInt(id[1]) + 1}`);
    possibleMoves.push(
      String.fromCharCode("h".charCodeAt(0) - 1) + `${parseInt(id[1]) + 1}`
    );
  } else {
    possibleMoves.push(
      String.fromCharCode(column.charCodeAt(0) - 1) + `${parseInt(id[1]) + 1}`
    );
    possibleMoves.push(
      String.fromCharCode(column.charCodeAt(0)) + `${parseInt(id[1]) + 1}`
    );
    possibleMoves.push(
      String.fromCharCode(column.charCodeAt(0) + 1) + `${parseInt(id[1]) + 1}`
    );
  }
  console.log(possibleMoves);
}

function rookMoves(ele) {
  const id = ele.id;
  const column = id[0]; // a
  const row = parseInt(id[1]); // 2
  const columnAscii = column.charCodeAt(0);
  //   console.log(columnAscii);
  const temp = document.getElementById(`${id}`);
  console.log(temp);

  // check empty grids and add to possibleMoves, and stop when non-empty grid is found

  // Bottom
  for (let i = 1; i < row; i++) {
    const currentGrid = column + `${i}`;
    // console.log(currentGrid);
  }
  // Top
  for (let i = row + 1; i <= 8; i++) {
    const currentGrid = column + `${i}`;
    // console.log(currentGrid);
  }
  // Left
  for (let i = 97; i < columnAscii; i++) {
    const currentGrid = String.fromCharCode(i) + `${parseInt(id[1])}`;
    // console.log(currentGrid);
  }
  // Right
  for (let i = columnAscii + 1; i <= 104; i++) {
    const currentGrid = String.fromCharCode(i) + `${parseInt(id[1])}`;
    // console.log(currentGrid);
  }
}

function kingMoves(ele) {}

function queenMoves(ele) {}

function bishopMoves(ele) {
  const id = ele.id;
  const column = id[0]; // a
  const row = parseInt(id[1]); // 2
  const columnAscii = column.charCodeAt(0);
  const temp = document.getElementById(`${id}`);
  console.log(temp);

  // check empty grids and add to possibleMoves, and stop when non-empty grid is found

  // Bottom
  for (let i = 1; i < row; i++) {
    const currentGrid = column + `${i}`;
    // console.log(currentGrid);
  }
  // Top
  for (let i = row + 1; i <= 8; i++) {
    const currentGrid = column + `${i}`;
    // console.log(currentGrid);
  }
  // Left
  for (let i = 97; i < columnAscii; i++) {
    const currentGrid = String.fromCharCode(i) + `${parseInt(id[1])}`;
    // console.log(currentGrid);
  }
  // Right
  for (let i = columnAscii + 1; i <= 104; i++) {
    const currentGrid = String.fromCharCode(i) + `${parseInt(id[1])}`;
    // console.log(currentGrid);
  }
}

function knightMoves(ele) {
    
}

function obstacleScenario() {}
