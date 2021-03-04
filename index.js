// 안녕하세요. 프렙 10기 오세명이라고 합니다.
// 저의 과제를 보느라 시간을 써주셔서 감사합니다.
// 아직은 미숙하지만, 정말로 재미있게 했습니다.
// 1주차 강의를 듣고 혼자 공부해보면서 수정하고싶은 부분이 생겨 전면 수정하였습니다.
// 그럼에도 불구하고 여전히 중복해서 사용되는 코드들이 많네요.. 😂
// 과제를 하면서 (1) 코드 로직이 자연스럽게 구현되었는지, (2) 보시기에 아쉬운 점은 무엇인지, (3) 어떤 부분을 더욱 신경써서 고치면 좋을지
// 허심탄회하게 피드백 해주시면 더할나위 없이 감사하겠습니다..

/* 
 HTML COMPONENT
 */
const start = document.querySelector(".js-start");
const form = document.querySelector(".js-form");
const input = document.querySelector(".js-input");
const strike = document.querySelector(".js-strike");
const ball = document.querySelector(".js-ball");
const remainder = document.querySelector(".js-remainder");
const win = document.querySelector(".js-win");
const lose = document.querySelector(".lose");
const restart = document.querySelector(".js-restart");
const condition = document.querySelector(".game__board");
/* 
 CSS CLASS MANIPULATION
*/

const DISPLAY_NONE = "display__none";
const DISPLAY_BLOCK = "display__block";
const display = {
  none: function (component) {
    component.classList.add(DISPLAY_NONE);
    component.classList.remove(DISPLAY_BLOCK);
  },
  block: function (component) {
    component.classList.add(DISPLAY_BLOCK);
    component.classList.remove(DISPLAY_NONE);
  },
};

const you = {
  win: function () {
    input.disabled = true;
    display.block(win);
    display.block(restart);
    restart.addEventListener("click", function () {
      baseArray = [];
      genArray();
      input.value = null;
      board.strike(0);
      board.ball(0);
      board.remainCounter = 10;
      remainder.innerText = `남은 기회 : ${board.remainCounter}`;
      display.none(win);
      display.none(restart);
      input.disabled = false;
    });
  },
  lose: function () {
    input.disabled = true;
    display.block(lose);
    display.block(restart);
    restart.addEventListener("click", function () {
      baseArray = [];
      genArray();
      input.value = null;
      board.strike(0);
      board.ball(0);
      board.remainCounter = 10;
      remainder.innerText = `남은 기회 : ${board.remainCounter}`;
      display.none(lose);
      display.none(restart);
      input.disabled = false;
    });
  },
};

const board = {
  strike: function (strikeCount) {
    strike.innerHTML = `스트라이크 카운트 : ${strikeCount}`;
  },
  ball: function (ballCount) {
    ball.innerHTML = `볼 카운트 : ${ballCount}`;
  },
  remainCounter: 10,
};

function compareEachElementOf(baseArray, comparedArray) {
  let strikeCount = 0;
  let ballCount = 0;
  for (let i = 0; i < baseArray.length; i++) {
    for (let j = 0; j < comparedArray.length; j++) {
      if (
        baseArray[i] === comparedArray[j] &&
        baseArray.indexOf(baseArray[i]) ===
          comparedArray.indexOf(comparedArray[j])
      ) {
        ++strikeCount;
      } else if (
        baseArray[i] === comparedArray[j] &&
        baseArray.indexOf(baseArray[i]) !==
          comparedArray.indexOf(comparedArray[j])
      ) {
        ++ballCount;
      }
    }
  }
  board.strike(strikeCount);
  board.ball(ballCount);
}

function decreaseRemainder() {
  board.remainCounter--;
  remainder.innerText = `남은 기회 : ${board.remainCounter}`;
  if (!board.remainCounter) you.lose();
}

function checkNum(e) {
  e.preventDefault();
  const currentValue = input.value;
  const comparedArray = Array.from(currentValue).map(function (item) {
    return parseInt(item, 10);
  });

  if (isNaN(currentValue)) {
    alert("숫자를 입력하세요");
  } else {
    (function baseCompareWith(base, target) {
      if (JSON.stringify(base) === JSON.stringify(target)) {
        you.win();
      } else {
        compareEachElementOf(base, target);
      }
    })(baseArray, comparedArray);
  }
  decreaseRemainder();
}

// ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️
let baseArray = [];
// ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️

function genArray() {
  //  !undefined
  if (!display.none(start)) {
    display.none(start);
    display.block(form);
    display.block(condition);
  }
  const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; baseArray.length < 3; i++) {
    let extractor = numArr[Math.floor(Math.random() * 9)];
    baseArray.push(extractor);
  }
  return baseArray;
}

function init() {
  start.addEventListener("click", genArray);
  form.addEventListener("submit", checkNum);
}

init();
