const btn = document.querySelector("button");
const body = document.querySelector("body");
const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const enterText = document.querySelector("input");
const textBox = document.querySelector("form");
const answer = document.createElement('h2');
body.append(answer);
const answer2 = document.createElement('h3');
body.append(answer2);

let result = [];
let limit = 0;

function textRefresh() {
  enterText.value = '';
  enterText.focus();
}

function handleText(event) {
  event.preventDefault();
  let enter = enterText.value;
  if (enter === result.join('')) { // 홈런
    alert('홈런! 축하합니다.');
    textRefresh();
    reGameSetting();
  } else { // 10번 틀린 경우
    let strike = 0;
    let ball = 0;
    limit++;
    if (limit > 9) {
      alert(`10회 이상 틀렸습니다. 정답은 ${result.join('')}입니다.`);
      textRefresh();
      reGameSetting();
    } else { // 10번 미만인 경우
    let enterArray = enter.split('');
    for (let i = 0; i < 3; i++) {
      if (Number(enterArray[i]) === result[i]) {
        strike++;
      } else if (result.indexOf(Number(enterArray[i])) > -1) {
        ball++;
      }
    }
    let textCount = enterText.value.length;
    if (textCount !== 3) { // 3자리 숫자를 입력하지 않은 경우
    alert("3자리 숫자를 입력해주세요.")
    limit--;
    } else {
    answer.textContent = `${strike} Strike, ${ball} Ball.`
    }
    answer2.textContent = `${10 - limit}의 기회가 남았습니다.`
    textRefresh();
    }
  }
}

function reGameSetting() {
  alert('다시 시작하시겠습니까?');
  result = [];
  limit = 0;
  answer.textContent = '';
  answer2.textContent = '';
  btn.style.display = "block";
  textBox.style.display = "none";
}

function gameSetting() {
  btn.style.display = "none";
  textBox.style.display = "block";
}

function baseballGame() {
  answer2.textContent = `${10 - limit}의 기회가 남았습니다.`
  for (let i = 0; i < 3; i++) {
    const random = Math.floor((Math.random()) * number.length);
    if (result.indexOf(random) === -1) {
      result.push(random);
    } else {
      i--;
    }
  }
  return result;
}

function init() {
  btn.addEventListener("click", baseballGame);
  btn.addEventListener("click", gameSetting);
  textBox.addEventListener("submit", handleText);
}

init();