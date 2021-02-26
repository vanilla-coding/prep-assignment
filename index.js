const start = document.querySelector('.start'),
  guess = document.querySelector('.guess'),
  guessNum = guess.querySelector('input'),
  logoBox = document.querySelector('.image-box'),
  scoreBoard = document.querySelector('.scoreBoard'),
  scoreBody = document.querySelector('tbody'),
  status = document.querySelector('.status');

const disable_CN = 'disable';
let answer; // 정답 숫자
let trials;  // 시도 횟수
const congratulations = 'You guessed it. Great!';
const runout = 'You ran out of guesses ... The number is';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

function isValid(userNum){
	const parsed = Number(userNum);
	if (Number.isInteger(parsed)) {
		if (parsed >= 100 && parsed < 1000){
			return true;
		}
	}
	return false;
}

function countBall(userBook, answerBook){
	let ball = 0;
	let answerBookTemp = answerBook.slice();
	for (var u of userBook){
		if (answerBookTemp.includes(u)){
			ball += 1;
			answerBookTemp.splice(answerBookTemp.indexOf(u), 1);
		}
	}
	return ball;
}

function anotherTry(){
	guess.classList.add(disable_CN);
	start.classList.remove(disable_CN);
	start.innerText = 'Retry?';
}

function countStrike(userBook, answerBook){
	let strike = 0;
	for (var i in userBook){
		if (userBook[i] === answerBook[i]){
			strike += 1;
		}
	}
	return strike;
}

function statusMSG(trials, num){
	if (num === answer){
		status.innerText = congratulations;
		anotherTry();
	} else if (trials >= 10) {
		status.innerHTML = `${runout} ${answer}.`;
		anotherTry();
	}
}

function showScore(ball, strike, num){
	if (scoreBoard.classList.contains(disable_CN)){
		scoreBoard.classList.remove(disable_CN)
	}
	const tr = document.createElement('tr');
	const count = document.createElement('td');
	const bScore = document.createElement('td');
	const sScore = document.createElement('td');
	const userNum = document.createElement('td');
	count.innerText = ++trials;
	bScore.innerText = ball;
	sScore.innerText = strike;
	userNum.innerText = num;
	tr.appendChild(count);
	tr.appendChild(bScore);
	tr.appendChild(sScore);
	tr.appendChild(userNum);
	scoreBody.appendChild(tr);
	return statusMSG(trials, num);
}

function checkScore(num){
	const userBook = Array.from(String(num), Number);
	const answerBook = Array.from(String(answer), Number);
	const ball = countBall(userBook, answerBook);
	const strike = countStrike(userBook, answerBook);
	return showScore(ball, strike, num);
}

function enterListener(event){
	event.preventDefault();
	const userNum = guessNum.value;
	guessNum.value = '';
	if (isValid(userNum)){
		checkScore(Number(userNum));
	} else {
		alert('It is not a valid integer.')
	}
}

function resetTable(){
	scoreBody.innerText = '';
}

function reset(){
	trials = 0;
	status.innerText = ``;
	resetTable();
}

function loadGame(){
	reset();  // 도전횟수 초기화
	answer = getRandomInt(100, 1000);
	guess.classList.remove(disable_CN);
	logoBox.classList.add(disable_CN);
}

function startListener(){
	start.classList.add(disable_CN);
	logoBox.classList.add(disable_CN);
	loadGame();
}

function init(){
	start.addEventListener("click", startListener);
	guess.addEventListener("submit", enterListener);
}

init();