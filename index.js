const startButton = document.querySelector(".start-button");
const restartButton = document.querySelector(".restart-button");
const numberInput = document.querySelector(".number-input");
const tryCounter = document.querySelector(".try-counter");
const ballCounter = document.querySelector(".ball-counter");

// Start 클릭 시 시작 버튼 제거 및 숫자 입력칸, 안내판, 재시작 버튼 생성
startButton.addEventListener('click', () => {

    startButton.classList.add('dissapear');
    numberInput.classList.remove('dissapear');
    tryCounter.classList.remove('dissapear');
    ballCounter.classList.remove('dissapear');
    restartButton.classList.remove('dissapear');
    gameStart();
})

let enterCount = 10; // 시도 제한 횟수 : 10회

// Restart 클릭 시 초기화
restartButton.addEventListener('click', () => {

    (0 < enterCount && enterCount <= 10)
    ? enterCount = enterCount + (10 - enterCount)
    : enterCount = enterCount + 10;

    allNum.push(...answer);
    gameStart();
})

// 입력창 엔터키 사용 시 답안 판별
numberInput.addEventListener('keyup', (event) => {

    let numbers = numberInput.value;
    let strike = 0;
    let ball = 0;

    if (event.key === "Enter") {

        if (enterCount !== 0) {

            if (numbers.length !== 3) {
                alert("세 자리 숫자를 입력하세요.");

            } else {
                enterCount--;

                for (i=0; i<3; i++) {

                    if (answer[i] === Number(numbers[i])) {
                        strike++;

                    } else {

                        for (j=0; j<3; j++) {

                            if (answer[i] === Number(numbers[j])) {
                                ball++;
                            }
                        }
                    }
                }
                if (strike === 3) {
                    alert("정답입니다! 다시 시작하려면 재시작 버튼을 눌러주세요.");
                }
                tryCounter.textContent = `남은 횟수 : ${enterCount}회`;
                ballCounter.textContent = `${strike} 스트라이크, ${ball} 볼!`;
            }
        } else {
            alert(`게임 종료. 재시작 버튼을 눌러주세요.`);
        }
    }
})

function gameStart() {

    tryCounter.textContent = `${enterCount}회 안에 맞추면 승리!`;
    ballCounter.textContent = '3 스트라이크를 만들어 보세요!';

    makeRandomNum();
}

let allNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let answer = [];

function makeRandomNum() {

    for(i=0; i<3; i++) {
        const random = Math.floor(Math.random()*allNum.length);
        answer[i] = allNum.splice(random, 1)[0];
    }
    console.log(answer);
}