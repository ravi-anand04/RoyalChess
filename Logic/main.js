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
      console.log("Bishop clicked");
      bishopMoves(ele);
    } else if (ele.innerText == "♘") {
      console.log("Night");
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

function bishopMoves(ele) {
  const id = ele.id;
  const column = id[0]; // a
  const row = parseInt(id[1]); // 2
  const columnAscii = column.charCodeAt(0);
  const temp = document.getElementById(`${id}`);
  console.log(temp);

  // check empty grids and add to possibleMoves, and stop when non-empty grid is found

  // Top Right
  let x = column.charCodeAt(column) + 1;
  y = parseInt(row) + 1;
  console.log("Top Right");
  while (x <= 104 && y <= 8) {
    const currentGrid = String.fromCharCode(x) + y;
    x++;
    y++;
    console.log(currentGrid);
  }

  console.log("Top Left");
  // Top Left
  x = column.charCodeAt(column) + 1;
  y = parseInt(row) + 1;
  while (x >= 97 && y <= 8) {
    const currentGrid = String.fromCharCode(x) + y;
    x--;
    y++;
    console.log(currentGrid);
  }

  console.log("Bottom Right");
  // Bottom Right
  x = column.charCodeAt(column) + 1;
  y = parseInt(row) + 1;
  while (x <= 104 && y >= 1) {
    const currentGrid = String.fromCharCode(x) + y;
    x++;
    y--;
    console.log(currentGrid);
  }

  console.log("Bottom Left");
  // Bottom Left
  x = column.charCodeAt(column) + 1;
  y = parseInt(row) + 1;
  while (x >= 97 && y >= 1) {
    const currentGrid = String.fromCharCode(x) + y;
    x--;
    y--;
    console.log(currentGrid);
  }
}

function kingMoves(ele) {
    
}

function queenMoves(ele) {
  rookMoves(ele);
  bishopMoves(ele);
}

function knightMoves(ele) {
  const id = ele.id;
  const column = id[0]; // e
  const row = parseInt(id[1]); // 5
  const columnAscii = column.charCodeAt(0);

  // check empty grids and add to possibleMoves, and stop when non-empty grid is found

  // Top
  const top1 = `${String.fromCharCode(columnAscii - 1)}${row + 2}`;
  const top2 = `${String.fromCharCode(columnAscii + 1)}${row + 2}`;
  //   console.log(top1);
  //   console.log(top2);
  // Right
  const right1 = `${String.fromCharCode(columnAscii + 2)}${row + 1}`;
  const right2 = `${String.fromCharCode(columnAscii + 2)}${row - 1}`;
  //   console.log(right1);
  //   console.log(right2);
  // Bottom
  const bottom1 = `${String.fromCharCode(columnAscii - 1)}${row - 2}`;
  const bottom2 = `${String.fromCharCode(columnAscii + 1)}${row - 2}`;
  //   console.log(bottom1);
  //   console.log(bottom2);
  // Left
  const left1 = `${String.fromCharCode(columnAscii - 2)}${row + 1}`;
  const left2 = `${String.fromCharCode(columnAscii - 2)}${row - 1}`;
  //   console.log(left1);
  //   console.log(left2);

  knightMoveValidation(top1);
  knightMoveValidation(top2);
  knightMoveValidation(right1);
  knightMoveValidation(right2);
  knightMoveValidation(bottom1);
  knightMoveValidation(bottom2);
  knightMoveValidation(left1);
  knightMoveValidation(left2);

  console.log(possibleMoves);
}

function knightMoveValidation(ele) {
  const column = ele[0]; // e
  const row = parseInt(ele[1]); // 5
  const columnAscii = column.charCodeAt(0);

  if (
    columnAscii < 97 ||
    columnAscii > 104 ||
    row > 8 ||
    row < 1 ||
    ele.length > 2
  ) {
    return;
  }

  possibleMoves.push(ele);
}
