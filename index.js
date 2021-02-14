"use strict";

const startPage = document.querySelector(".page-start"),
    startBtn = startPage.querySelector(".startBtn-start");

const playingPage = document.querySelector(".page-playing"),
    digitForm = playingPage.querySelector(".form-playing"),
    digitInput = playingPage.querySelector(".input-playing"),
    scoreBoard = playingPage.querySelector(".scoreboard-playing");

const endPage = document.querySelector(".page-end"),
    leaderBoard = endPage.querySelector(".leaderBoard-end"),
    restartBtn = endPage.querySelector(".restartBtn-end");

const VAILD_DIGIT_LENGTH = 3;
const HIDING = "hiding";

let wholePage = [startPage, playingPage, endPage];

let ballCount,
    strikeCount,
    inningCount;

let invaildMatch = 0; //유효하지 않은 숫자 입력시 inningCount가 올라가는 것을 방지 1은 유효하지않은게임 0은 유효한 게임

let r3d = []; // 랜덤 숫자 3개
let i3d = []; // 입력받은 숫자 3개

function set3RandomDigit() {
    for (let i = 0; i < 3; i++) {
        r3d[i] = parseInt(Math.random() * 9);
    }
    if (r3d[0] === r3d[1] || r3d[0] === r3d[2] || r3d[1] === r3d[2]) {
        set3RandomDigit();
    }
    console.log(`랜덤 숫자는 ${r3d}`);
}

function checksVaildDigit(value) {
    const valueLength = value.length;
    invaildMatch = 0;
    if (valueLength !== VAILD_DIGIT_LENGTH) {
        alert("세자리 숫자를 입력해주세요.");
        digitInput.value = "";
        invaildMatch = 1;
    } else {
        for (let i = 0; i < 3; i++) {
            i3d[i] = value.charAt(i);
        }
    }
    return;
}

function compareDigit() {
    strikeCount[inningCount] = 0;
    ballCount[inningCount] = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (r3d[i] == i3d[j]) {
                if (i === j) {
                    strikeCount[inningCount]++;
                    continue;
                } else {
                    ballCount[inningCount]++;
                }
            }
        }
    }
}

function checkResult (inningC, scoreT) {
    if (strikeCount[inningC] == 3) {
        scoreT.innerText = `${inningC+1}R VICTORY`;
    } else if (strikeCount[inningC] == 0 && ballCount[inningC] == 0) {
            scoreT.innerText = `${inningC+1}R OUT`;
    } else {
        scoreT.innerText = `${inningC+1}R ${strikeCount[inningC]}S ${ballCount[inningC]}B`;
    }
}

function printCurretScore() {
    checkResult(inningCount, scoreBoard);
}

function printWholeScore() {
    for (let i = 0; i <= inningCount; i++) {
        const matchHistory = document.createElement("h3");
        checkResult(i, matchHistory);
        leaderBoard.appendChild(matchHistory);
    }
}

function initializeGame() {
    digitInput.value = "";
    ballCount = [];
    strikeCount = [];
    inningCount = 0;
    scoreBoard.innerText = "";
    leaderBoard.innerText = "";
}

function loadPage(pageName) {
    wholePage.forEach(page => {
        page.classList.add(HIDING);
    })
    pageName.classList.remove(HIDING);
}

function startGame() {
    initializeGame();
    set3RandomDigit();
    loadPage(playingPage);
}

function gameOver() {
    printWholeScore();
    loadPage(endPage);
}

function handlesubmit(event) {
    invaildMatch=0;
    event.preventDefault();
    const currentdigit = digitInput.value;
    checksVaildDigit(currentdigit);
    if (invaildMatch == 0) {
        compareDigit();
        printCurretScore();
        if (strikeCount[inningCount] === 3) {
            gameOver();
        }
        if (inningCount > 8) {
            gameOver();
        }
        inningCount++;
    }
}

function init() {
    startBtn.addEventListener("click", startGame);
    digitForm.addEventListener("submit", handlesubmit);
    restartBtn.addEventListener("click", startGame);
}

init();
