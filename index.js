let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#newGame-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let O = true;
const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (O) {
      box.innerText = "O";
      O = false;
    } else {
      box.innerText = "X";
      O = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const resetGame = () => {
  O = true;
  enbaleBoxes();
  msgContainer.classList.add("hide");
};

const displayWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const disableBoxes = () => {
  boxes.forEach((box) => (box.disabled = true));
};

const enbaleBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText=""
    }
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if ((pos1 != "" && pos2 != "", pos3 != "")) {
      if (pos1 === pos2 && pos2 === pos3) {
        console.log("Winner", pos1);
        displayWinner(pos1);
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
