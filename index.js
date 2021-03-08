let numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let randomArr = [];
let wrongCount = 0;

const ALERT_MESSAGE = {
  pressStart: "게임 시작을 먼저 눌러주세요!",
  invalidAnswerLength: "세 자리 숫자를 입력해 주세요",
};
const resultElement = document.getElementById("result");
const inputElement = document.getElementById("input-number");
const startButtonElement = document.getElementById("start-btn");
const enterButtonElement = document.getElementById("enter-btn");
const restartButtonElement = document.getElementById("restart-btn");

function createRandomArray() {
  randomArr = [];
  for (let i = 0; i < 3; i++) {
    let createThreeDigit = numberArr.splice(
      Math.floor(Math.random() * (9 - i)),
      1
    )[0];
    randomArr.push(createThreeDigit);
  }
}

function initializeInput() {
  inputElement.value = "";
  inputElement.focus();
}

function initializeGame() {
  initializeInput();
  createRandomArray();
  wrongCount = 0;
}

function startGame() {
  let userAnswer = inputElement.value;

  if (randomArr.length < 1) {
    return alert(ALERT_MESSAGE.pressStart);
  }

  if (inputElement.value.length !== 3) {
    return alert(ALERT_MESSAGE.invalidAnswerLength);
  }

  if (userAnswer === randomArr.join("")) {
    resultElement.textContent = "HomeRun";
    initializeGame();
  } else {
    let answerArr = userAnswer.split("");
    let strike = 0;
    let ball = 0;

    wrongCount += 1;
    if (wrongCount > 10) {
      alert(
        `도전은 10번 까지만 가능합니다. 정답은${randomArr.join(",")}입니다`
      );

      initializeGame();
    } else {
      for (let i = 0; i < 2; i++) {
        if (Number(answerArr[i]) === randomArr[i]) {
          strike += 1;
        } else if (randomArr.indexOf(Number(answerArr[i])) > -1) {
          ball += 1;
        }
      }

      resultElement.textContent = `${strike} 스트라이크 ${ball} 볼입니다.`;
      initializeInput();
    }
  }
}

function observeEnterKey(event) {
  if (event.key === "Enter") {
    startGame();
  }
}

startButtonElement.addEventListener("click", createRandomArray);
enterButtonElement.addEventListener("click", startGame);
inputElement.addEventListener("keydown", observeEnterKey);
restartButtonElement.addEventListener("click", initializeGame);
