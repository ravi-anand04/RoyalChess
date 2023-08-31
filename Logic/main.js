let currentPlayer = 0,
  possibleMoves = [];

document.onreadystatechange = () => {
  initialSetup();
};

function initialSetup() {
  const items = document.getElementsByClassName("item");

  [...items].forEach((item) => {
    const ele = document.getElementById(item.id);
    // console.log(ele);
    ele.addEventListener("click", () => {
      console.log("Clicked on:", ele.id);
    });
  });
}
