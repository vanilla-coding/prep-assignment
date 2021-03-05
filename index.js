const playButton = document.querySelector('.play-button');
const replayButton = document.querySelector('.replay-button');
const result = document.querySelector('.result-text');
const numberForm = document.querySelector('.number-form');
const input = numberForm.querySelector('input');

let answer = [];
let userInput = [];

function showResult(strike, ball) {
  const strikeNumber = document.querySelector('#strike');
  const ballNumber = document.querySelector('#ball');

  strikeNumber.textContent = `🏏${strike}`;
  ballNumber.textContent = `⚾${ball}`;

  if (ball === 0) {
    result.textContent = 'OUT';
  } else if (ball === 3 && strike === 3) {
    result.textContent = 'HOMERUN !';
  } else {
    result.textContent = '🙊';
  }
}

function compareAnswer() {
  let indexNumberSame = 0;
  let numberSame = 0;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (userInput[i] === answer[j]) {
        if (i === j) {
          indexNumberSame++;
        } else {
          numberSame++;
        }
      }
    }
  }

  const strike = indexNumberSame;
  const ball = numberSame + indexNumberSame;

  showResult(strike, ball);
}

function handleSubmit(e) {
  e.preventDefault();
  userInput = Array.from(input.value);

  if (userInput.length === 3) {
    compareAnswer();
    clickCount();
  } else {
    alert(`3자리의 숫자만 입력해주세요`);
    input.value = '';
  }
}

function makeRandomNumber() {
  answer.splice(0, 3);

  for (i = 0; i < 3; i++) {
    const element = String(Math.floor(Math.random() * 10));

    if (answer.indexOf(element, 0) !== -1) {
      i--;
    } else {
      answer.push(element);
    }
  }
}

function handleReplay(e) {
  window.location.reload();
}

function handlePlayClick(e) {
  makeRandomNumber();
  input.disabled = false;
  playButton.textContent = '';
  result.textContent = 'Come On !';
  replayButton.textContent = 'REPLAY';
  alert('3자리 숫자를 맞춰보세요🐸 \n(중복은 없습니다)');
}

let count = 0;

function clickCount() {
  count += 1;
  const lifeCount = document.querySelector('#life-count');
  lifeCount.textContent = 10 - count;

  if (count === 10) {
    alert('GAME OVER');
    window.location.reload();
  }
}

input.addEventListener('click', () => {
  if (input.value !== null) {
    input.value = '';
  }
});

numberForm.addEventListener('submit', handleSubmit);
replayButton.addEventListener('click', handleReplay);
playButton.addEventListener('click', handlePlayClick);
