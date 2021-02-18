const start = document.querySelector(".js-start"),
  baseball = document.querySelector(".baseball"),
  restart = document.querySelector(".js-restart");
(numberForm = document.querySelector(".js-form")),
  (numberInput = numberForm.querySelector(".js-input")),
  (strike = document.querySelector(".js-strike")),
  (ball = document.querySelector(".js-ball")),
  (out = document.querySelector(".js-out")),
  (remaining = document.querySelector(".js-remaining")),
  (gameOver = document.querySelector(".js-gameOver")),
  (lose = document.querySelector(".js-lose")),
  (board = document.querySelector(".js-board"));

const displayNone = "display__none";
const displayBlock = "display__block";
const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let ranNum = [],
  strikeCount = 0,
  ballCount = 0,
  remainCount = 10;

function showOnBoard() {
  console.log(
    `strike Count is : ${strikeCount} and ball Count is : ${ballCount}`
  );
  strike.innerText = `스트라이크 카운트 :${strikeCount}`;
  ball.innerText = `볼 카운트 :${ballCount}`;

  strikeCount = 0;
  ballCount = 0;

  return strikeCount, ballCount;
}

function elemCheck(base, compare) {
  for (let i = 0; i < compare.length; i++) {
    for (let j = 0; j < base.length; j++) {
      if (
        compare[i] === base[j] &&
        compare.indexOf(compare[i]) === base.indexOf(base[j])
      ) {
        strikeCount++;
      } else if (
        compare[i] === base[j] &&
        compare.indexOf(compare[i]) !== base.indexOf(base[j])
      ) {
        ballCount++;
      }
    }
  }
  return strikeCount, ballCount;
}

function decrementRemain() {
  remainCount--;
  remaining.innerText = `남은 기회 : ${remainCount}`;
  if (remainCount === 0) {
    numberInput.disabled = true;
    lose.classList.add(displayBlock);
    restart.classList.add(displayBlock);
  }
}

function compareWithRanNum(inputValue) {
  // What i wanted to do is to make new array in which type of element is Number
  // then i can compare inputArray which have Number elements with randomArray, in this case : ranNum
  let comparedValue = Array.from(inputValue).map(function (item) {
    return parseInt(item, 10);
  });
  console.log(`the ranNum Value is ${ranNum}`);
  console.log(`the compared Value is ${comparedValue}`);

  if (JSON.stringify(comparedValue) === JSON.stringify(ranNum)) {
    // If The player wins this game
    numberInput.disabled = true;
    gameOver.classList.add(displayBlock);
    restart.classList.add(displayBlock);
  } else {
    elemCheck(ranNum, comparedValue);
  }

  // given that all of value are number, let us reduce player's opportunity
  decrementRemain();
}

function validateValue(e) {
  e.preventDefault();
  let currentValue = numberInput.value;
  if (isNaN(currentValue)) {
    alert("숫자를 입력하세요");
  } else {
    compareWithRanNum(currentValue);
  }
}

function genNumber() {
  start.classList.add(displayNone);

  numberForm.classList.remove(displayNone);
  numberForm.classList.add(displayBlock);

  board.classList.remove(displayNone);
  board.classList.add("board");

  while (ranNum.length < 3) {
    let extractor = numArr[Math.floor(Math.random() * 9)];
    ranNum.push(extractor);
  }
  return ranNum;
}

function reset() {
  lose.classList.remove(displayBlock);
  lose.classList.add(displayNone);
  gameOver.classList.remove(displayBlock);
  gameOver.classList.add(displayNone);
  restart.classList.remove(displayBlock);
  restart.classList.add(displayNone);

  numberInput.disabled = false;
  numberForm.reset();
  remainCount = 10;
  remaining.innerText = `남은 기회 : ${remainCount}`;
  ranNum = [];
  strike.innerText = `스트라이크 카운트 :`;
  ball.innerText = `볼 카운트 :`;
  genNumber();
}

function init() {
  start.addEventListener("click", genNumber);
  numberForm.addEventListener("submit", validateValue);
  numberForm.addEventListener("submit", showOnBoard);
  restart.addEventListener("click", reset);
}
init();
