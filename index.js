// random 숫자 만들기
let numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // 숫자 값 비교를 위한 숫자배열

let randomArr = []; // 게임시작 시, 세팅되는 랜덤숫자배열 ex) [1,2,3]
let wrongCount = 0; // 잘못된 횟수

// Get Dom
const resultElement = document.getElementById("result"); // 결과가 나오는 span tag
const inputElement = document.getElementById("input-number"); // 사용자가 숫자를 입력하는 input tag
const startButtonElement = document.getElementById("start-btn"); // 게임 시작 시, 랜덤 숫자배열 생성
const enterButtonElement = document.getElementById("enter-btn"); // 사용자 입력 enter
const restartButtonElement = document.getElementById("restart-btn"); // 재시작 버튼

function createRandomArray() {
  console.log("createRandomArray");
  randomArr = [];
  for (let i = 0; i < 3; i++) {
    // let draw = numberArr.pop();
    // let draw = numberArr.shift();
    let draw = numberArr.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    randomArr.push(draw);
  }

  //console.log(randomArr);
}

function initializeInput() {
  inputElement.value = "";
  inputElement.focus();
}

function gameStart() {
  let userAnswer = inputElement.value;
  // console.log(userAnswer, randomArr, userAnswer === randomArr);
  if (randomArr.length < 1) {
    alert("게임 시작을 먼저 눌러주세요!");
    return;
  }

  if (userAnswer.length !== 3) {
    alert("세 자리 숫자를 입력해 주세요");
    return;
  }

  if (userAnswer === randomArr.join("")) {
    //답을 맞출 경우
    resultElement.textContent = "HomeRun";
    initializeInput();

    createRandomArray();
    wrongCount = 0;
  } else {
    //답이 틀릴 경우
    let answerArr = userAnswer.split("");
    let strike = 0;
    let ball = 0;

    wrongCount += 1;
    if (wrongCount > 10) {
      // 초기화 하는 부분
      alert(
        "도전은 10번 까지만 가능합니다. 정답은" + randomArr.join(",") + "입니다"
      );
      initializeInput();
      // number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      createRandomArray();
      wrongCount = 0;
    } else {
      for (let i = 0; i < 2; i++) {
        if (Number(answerArr[i]) === randomArr[i]) {
          // 같은 자리인지 확인
          strike += 1;
        } else if (randomArr.indexOf(Number(answerArr[i])) > -1) {
          // 자리가 겹치지 않을 때 숫자가 겹치는지 확인
          ball += 1;
        }
      }

      resultElement.textContent = strike + "스트라이크" + ball + "볼입니다.";
      initializeInput();
    }
  }
}

function gameRestart() {
  initializeInput();
  createRandomArray();
  wrongCount = 0;
}

function gameStartKeyDown(event) {
  console.log(event);
  if (event.key === "Enter") {
    gameStart();
  }
}

// form.addEventListener("", function 비동기(이벤트) {
//   // 엔터를 쳤을 때
//   이벤트.preventDefault();

/* document.getElementById('enter-btn').addEventListener('click', createRandomArray); */

/*********************************** DOM EVENT BINDING *************************************************/
startButtonElement.addEventListener("click", createRandomArray);
enterButtonElement.addEventListener("click", gameStart);
// enterButtonElement.addEventListener("keydown", gameStartKeyDown);
inputElement.addEventListener("keydown", gameStartKeyDown);
restartButtonElement.addEventListener("click", gameRestart);
