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
// isKingMoved = false,
// isLeftRookMoved = false,
// isRightRookMoved = false;

document.onreadystatechange = () => {
  initialSetup();
};

function initialSetup() {
  const items = document.getElementsByClassName("item");

  [...items].forEach((item) => {
    item.addEventListener("click", () => {
      // Clicking on empty square should not change the state of the application
      console.log(prevPiece);
      if (
        prevPiece == null &&
        !(
          item.classList.contains("whitePiece") ||
          item.classList.contains("blackPiece")
        )
      ) {
        return;
      }
      if (currentPlayer == "white") {
        if (!prevPiece && !item.classList.contains("blackPiece")) {
          prevPiece = item;
          whitePossibleMoves(item);
        } else if (prevPiece && prevPiece != item) {
          // Target item, check for move legality and piece reset
          console.log("2nd click");

          if (item.classList.contains("whitePiece")) {
            alert(
              "Well, that's an interesting strategy, sacrificing your own troops!"
            );
            prevPiece = "";
            possibleMoves = [];
            return;
          }

          if (possibleMoves.includes(item.id)) {
            item.innerText = `${prevPiece.innerText}`;
            prevPiece.innerText = "";
            prevPiece.classList.remove("whitePiece");
            // prevPiece.classList.add("disabled-div");
            item.classList.add("whitePiece");
          } else {
            alert("Move not possible");
            prevPiece = "";
            possibleMoves = [];
            return;
          }

          console.log("Clicked on:", currentPlayer);
          currentPlayer = currentPlayer === "white" ? "black" : "white";
          prevPiece = null;
          console.log(possibleMoves);
          possibleMoves = [];

          const whitePieces = document.getElementsByClassName("whitePiece");
          const blackPieces = document.getElementsByClassName("blackPiece");

          Array.from(whitePieces).forEach((piece) => {
            piece.classList.add("disabled-div");
          });

          Array.from(blackPieces).forEach((piece) => {
            piece.classList.remove("disabled-div");
          });
        }
      } else if (currentPlayer == "black") {
        console.log("black piece");
        if (!prevPiece && !item.classList.contains("whitePiece")) {
          prevPiece = item;
          blackPossibleMoves(item);
          console.log("Moves", possibleMoves);
        } else if (prevPiece != item && prevPiece != item) {
          if (item.classList.contains("blackPiece")) {
            alert(
              "Well, that's an interesting strategy, sacrificing your own troops!"
            );
            prevPiece = "";
            possibleMoves = [];
            return;
          }

          // Target item, check  for move legality and piece reset
          if (possibleMoves.includes(item.id)) {
            item.innerText = `${prevPiece.innerText}`;
            prevPiece.innerText = "";
            prevPiece.classList.remove("blackPiece");
            item.classList.add("blackPiece");
            console.log("Moves", possibleMoves);
          } else {
            alert("Move not possible");
            return;
          }

          console.log("Clicked on:", currentPlayer);
          currentPlayer = currentPlayer === "white" ? "black" : "white";
          prevPiece = null;
          console.log(possibleMoves);
          possibleMoves = [];

          const whitePieces = document.getElementsByClassName("whitePiece");
          const blackPieces = document.getElementsByClassName("blackPiece");

          Array.from(whitePieces).forEach((piece) => {
            piece.classList.remove("disabled-div");
          });

          Array.from(blackPieces).forEach((piece) => {
            piece.classList.add("disabled-div");
          });
        }
      }
    });
  });
}

function whitePossibleMoves(ele) {
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
    console.log("Night clicked");
    knightMoves(ele);
  } else {
    pawnMoves(ele);
  }
}

function blackPossibleMoves(ele) {
  if (ele.innerText == "♚") {
    kingMoves(ele);
  } else if (ele.innerText == "♛") {
    queenMoves(ele);
  } else if (ele.innerText == "♜") {
    console.log("Rook clicked");
    rookMoves(ele);
  } else if (ele.innerText == "♝") {
    console.log("Bishop clicked");
    bishopMoves(ele);
  } else if (ele.innerText == "♞") {
    console.log("Night clicked");
    knightMoves(ele);
  } else {
    pawnMoves(ele);
  }
}

function pawnMoves(ele) {
  const id = ele.id;
  const row = id[1]; // 2
  const column = id[0]; // a
  console.log(id);

  if (currentPlayer == "white") {
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
  } else {
    if (column == "a") {
      possibleMoves.push("a" + `${parseInt(id[1]) - 1}`);
      possibleMoves.push(
        String.fromCharCode("a".charCodeAt(0) + 1) + `${parseInt(id[1]) - 1}`
      );
    } else if (column == "h") {
      possibleMoves.push("h" + `${parseInt(id[1]) - 1}`);
      possibleMoves.push(
        String.fromCharCode("h".charCodeAt(0) - 1) + `${parseInt(id[1]) - 1}`
      );
    } else {
      possibleMoves.push(
        String.fromCharCode(column.charCodeAt(0) - 1) + `${parseInt(id[1]) - 1}`
      );
      possibleMoves.push(
        String.fromCharCode(column.charCodeAt(0)) + `${parseInt(id[1]) - 1}`
      );
      possibleMoves.push(
        String.fromCharCode(column.charCodeAt(0) + 1) + `${parseInt(id[1]) - 1}`
      );
    }
  }
}

function rookMoves(ele) {
  const id = ele.id;
  const column = id[0]; // a
  const row = parseInt(id[1]); // 2
  const columnAscii = column.charCodeAt(0);

  // check empty grids and add to possibleMoves, and stop when non-empty grid is found

  // Bottom
  for (let i = row - 1; i >= 1; i--) {
    const currentGridId = column + `${i}`;
    const currentGrid = document.getElementById(currentGridId);
    possibleMoves.push(currentGridId);
    if (currentGrid.innerText) break;
  }
  // Top
  for (let i = row + 1; i <= 8; i++) {
    const currentGridId = column + `${i}`;
    const currentGrid = document.getElementById(currentGridId);
    possibleMoves.push(currentGridId);
    if (currentGrid.innerText) break;
  }
  // Left
  for (let i = columnAscii - 1; i >= 97; i--) {
    const currentGridId = String.fromCharCode(i) + `${parseInt(id[1])}`;
    const currentGrid = document.getElementById(currentGridId);
    possibleMoves.push(currentGridId);
    if (currentGrid.innerText) break;
  }
  // Right
  for (let i = columnAscii + 1; i <= 104; i++) {
    const currentGridId = String.fromCharCode(i) + `${parseInt(id[1])}`;
    const currentGrid = document.getElementById(currentGridId);
    possibleMoves.push(currentGridId);
    if (currentGrid.innerText) break;
  }
}

function bishopMoves(ele) {
  const id = ele.id;
  const column = id[0]; // a
  const row = parseInt(id[1]); // 2
  // const columnAscii = column.charCodeAt(0);
  const temp = document.getElementById(id);
  console.log(temp);

  // check empty grids and add to possibleMoves, and stop when non-empty grid is found

  // Top Right
  let x = column.charCodeAt(column) + 1; // f
  let y = parseInt(row) + 1; // 4
  // console.log("Top Right");
  while (x <= 104 && y <= 8) {
    const currentGridId = String.fromCharCode(x) + y;
    x++;
    y++;
    const currentGrid = document.getElementById(currentGridId);
    possibleMoves.push(currentGridId);
    if (currentGrid.innerText) break;
  }

  // console.log("Top Left");
  // Top Left
  x = column.charCodeAt(column) - 1;
  y = parseInt(row) + 1;
  while (x >= 97 && y <= 8) {
    const currentGridId = String.fromCharCode(x) + y;
    x--;
    y++;
    const currentGrid = document.getElementById(currentGridId);
    possibleMoves.push(currentGridId);
    if (currentGrid.innerText) break;
  }

  // console.log("Bottom Right");
  // Bottom Right
  x = column.charCodeAt(column) + 1; //
  y = parseInt(row) - 1;
  while (x <= 104 && y >= 1) {
    const currentGridId = String.fromCharCode(x) + y;
    x++;
    y--;
    const currentGrid = document.getElementById(currentGridId);
    possibleMoves.push(currentGridId);
    if (currentGrid.innerText) break;
  }

  // console.log("Bottom Left");
  // Bottom Left
  x = column.charCodeAt(column) + 1;
  y = parseInt(row) + 1;
  while (x >= 97 && y >= 1) {
    x--;
    y--;
    const currentGridId = String.fromCharCode(x) + y;
    const currentGrid = document.getElementById(currentGridId);
    console.log("Grid ID:", currentGridId);
    possibleMoves.push(currentGridId);
    if (currentGrid.innerText) break;
  }
}

function kingMoves(ele) {
  const id = ele.id;
  const column = id[0]; // a
  const row = parseInt(id[1]); // 2
  const columnAscii = column.charCodeAt(0);

  // Right
  possibleMoves.push(
    String.fromCharCode(columnAscii + 1) + `${parseInt(id[1])}`
  );
  // Left
  possibleMoves.push(
    String.fromCharCode(columnAscii - 1) + `${parseInt(id[1])}`
  );
  // Top
  possibleMoves.push(
    String.fromCharCode(columnAscii) + `${parseInt(id[1]) + 1}`
  );
  // Bottom
  possibleMoves.push(
    String.fromCharCode(columnAscii) + `${parseInt(id[1]) - 1}`
  );

  // Top-right
  possibleMoves.push(
    String.fromCharCode(columnAscii - 1) + `${parseInt(id[1]) + 1}`
  );
  // Top-left
  possibleMoves.push(
    String.fromCharCode(columnAscii + 1) + `${parseInt(id[1]) + 1}`
  );
  // Bottom-left
  possibleMoves.push(
    String.fromCharCode(columnAscii - 1) + `${parseInt(id[1]) - 1}`
  );
  // Bottom-right
  possibleMoves.push(
    String.fromCharCode(columnAscii + 1) + `${parseInt(id[1]) - 1}`
  );

  //   console.log(possibleMoves);

  // CASTLE VALIDATION

  if (!isKingMoved && !isLeftRookMoved) {
    //   castleValidation(king, rook, true); ---TODO---
  } else if (!isKingMoved && !isRightRookMoved) {
    //   castleValidation(king, rook, false); ---TODO---
  }

  // King should not be moved to check position
}

function castleValidation(ele, isLeftMoved) {}

function queenMoves(ele) {
  rookMoves(ele);
  bishopMoves(ele);
}

function knightMoves(ele) {
  const id = ele.id;
  const column = id[0]; // e
  const row = parseInt(id[1]); // 5
  const columnAscii = column.charCodeAt(0);

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

  //   console.log(possibleMoves);
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
