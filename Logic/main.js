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

function kingMoves(ele) {}

function queenMoves(ele) {}

function rookMoves(ele) {}

function bishopMoves(ele) {}

function knightMoves(ele) {}

function obstacleScenario() {}
