const input = document.querySelector('#input');
const checkBtn = document.querySelector('#check');
const current = document.querySelector('#current');
const history = document.querySelector('#history');
const popup = document.querySelector('#popup-container');
const finalMessage = document.querySelector('#final-message');
const playAgainBtn = document.querySelector('#play-button');

let randomArray = getRandomNumberArray();
let count = 1;

// Check Ball
function checkBall(array1, array2) {
  let countBall = 0;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (array1[i] == array2[j]) {
        countBall += 1;
      }
    }
  }
  return countBall;
}

// Check Strike
function checkStrike(array1, array2) {
  let countStrike = 0;
  for (let i = 0; i < 4; i++) {
    if (array1[i] == array2[i]) {
      countStrike += 1;
    }
  }
  return countStrike;
}

// 랜덤 숫자 설정
function getRandomNumberArray() {
  let numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let randomArray = [];
  for (let i = 0; i < 4; i++) {
    let randomNum = Math.floor(Math.random() * numberArray.length);
    randomArray[i] = numberArray.splice(randomNum, 1)[0];
  }
  return randomArray;
}

// Play Game
function playGame() {
  let inputArray = input.value.split('');
  let inputNumArray = inputArray.map((el) => +el);

  let strikeNum = checkStrike(randomArray, inputNumArray);
  let ballNum = checkBall(randomArray, inputNumArray) - strikeNum;

  current.innerHTML = `You tried ${count} times</><p>You've entered ${inputNumArray} <p>
  ${strikeNum} strike, ${ballNum} ball`;

  let record = document.createElement('p');
  record.innerHTML = `Try ${count}:  ${inputNumArray} - ${strikeNum} strike, ${ballNum} ball`;
  history.appendChild(record);
  count += 1;

  if (strikeNum == 4) {
    finalMessage.innerText = 'Congratulations, You win!';
    popup.style.display = 'flex';
    playAgainBtn.textContent = 'Play again';
    return;
  }

  if (count > 10) {
    finalMessage.innerText = "Unfortunately you've lost";
    popup.style.display = 'flex';
    playAgainBtn.textContent = 'Play again';
    return;
  }
}

// 중복 체크
function checkTwice() {
  let inputArray = input.value.split('');
  for (let i = 0; i < 4; i++) {
    for (let j = i + 1; j < 4; j++) {
      if (inputArray[i] === inputArray[j]) {
        alert("You can't use the same number twice");
        return true;
      }
    }
  }
  return false;
}

// Check 4 Digits
function checkCondition() {
  if (input.value.length !== 4) {
    alert('Please Enter 4-digit number');
  } else if (!checkTwice()) {
    playGame();
    input.value = '';
  }
}

// Event Listener
checkBtn.addEventListener('click', checkCondition);
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    checkCondition();
  }
});

playAgainBtn.addEventListener('click', () => {
  randomArray = getRandomNumberArray();
  count = 1;
  console.log(randomArray);

  popup.style.display = 'none';
  strikeNum = 0;
  ballNum = 0;

  current.innerHTML = '';
  history.innerHTML = '';
});
