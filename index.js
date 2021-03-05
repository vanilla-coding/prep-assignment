const HTML_CN = {
	disable: 'disable',
};

const selector = {
	start: document.querySelector('.start'),
	guess: document.querySelector('.guess'),
    input: document.querySelector('#input'),
	logoBox: document.querySelector('.image-box'),
	scoreBoard: document.querySelector('.scoreBoard'),
	status: document.querySelector('.status'),
	scoreBody: document.querySelector('tbody'),
};

const gameInfo = {
	answer: null,
	userGuess: null,
	trials: 0,
	maxTrial: 10,
	errorMSG: 'It is not a valid integer.',
	retryMSG: 'Retry?',
};

const statusMsg = {
	congratz: 'You guessed it. Great!',
	runout: 'You ran out of guesses ... The number is',
};

function anotherTry() {
	selector.start.classList.remove(HTML_CN.disable);
	selector.start.innerText = gameInfo.retryMSG;
	selector.guess.classList.add(HTML_CN.disable);
};

function showStatusMSG() {
	if (gameInfo.userGuess === gameInfo.answer) {
		selector.status.innerText = statusMsg.congratz;
		return anotherTry();
	} else if (gameInfo.trials >= gameInfo.maxTrial) {
		selector.status.innerHTML = `${statusMsg.runout} ${gameInfo.answer}.`;
		return anotherTry();
	};
};

function showScore(ball, strike) {
	const tr = document.createElement('tr');
	const count = document.createElement('td');
	const bScore = document.createElement('td');
	const sScore = document.createElement('td');
	const userNum = document.createElement('td');
	count.innerText = gameInfo.trials;
	bScore.innerText = ball;
	sScore.innerText = strike;
	userNum.innerText = gameInfo.userGuess;
	tr.appendChild(count);
	tr.appendChild(bScore);
	tr.appendChild(sScore);
	tr.appendChild(userNum);
	selector.scoreBody.appendChild(tr);
	return showStatusMSG();
};

function countBall(userBook, answerBook) {
	let ball = 0;
	let answerBookTemp = answerBook.slice();
	userBook.forEach((u) => {
		if (answerBookTemp.includes(u)) {
			ball += 1;

			// 유저 입력이 333, 답안이 311인 경우 ball 3을 방지하기 위해 ball이 나온 요소는 삭제
			answerBookTemp.splice(answerBookTemp.indexOf(u), 1);
		}

	});

	return ball;
};

function countStrike(userBook, answerBook) {
	let strike = 0;
	for (var i in userBook) {
		if (userBook[i] === answerBook[i]) {
			strike += 1;
		};
	};

	return strike;
};

function checkScore() {
	gameInfo.trials += 1;
	const userBook = Array.from(String(gameInfo.userGuess), Number);
	const answerBook = Array.from(String(gameInfo.answer), Number);
	const ball = countBall(userBook, answerBook);
	const strike = countStrike(userBook, answerBook);
	return showScore(ball, strike);
};

function isValid(num) {
	if (Number.isInteger(num)) {
		if (num >= 100 && num < 1000) {
			return true;
		};
	};

	return false;
};

function enterListener(event) {
	event.preventDefault();
	gameInfo.userGuess = Number(selector.input.value);
	selector.input.value = '';
	if (isValid(gameInfo.userGuess)){
		return checkScore();
	} else {
		return alert(gameInfo.errorMSG);
	};
};

function getRandomInt(min = 100, max = 1000) {
  return Math.floor(Math.random() * (max - min)) + min;
};

function resetGameInfo() {
	gameInfo.answer = getRandomInt(100, 1000);
	gameInfo.userGuess = null;
	gameInfo.trials = 0;
};

function resetTable() {
	selector.scoreBody.innerText = '';
};

function resetStatus() {
	selector.status.innerText = '';
}

function reset() {
	resetGameInfo();
	resetTable();
	resetStatus();
};

function startListener() {
	selector.start.classList.add(HTML_CN.disable);
	selector.logoBox.classList.add(HTML_CN.disable);
	selector.guess.classList.remove(HTML_CN.disable);
	selector.scoreBoard.classList.remove(HTML_CN.disable);
	return reset();
};

function init() {
	selector.start.addEventListener("click", startListener);
	selector.guess.addEventListener("submit", enterListener);
};

init();
