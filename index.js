const initAnswer = () => {
    const flags = Array(10).fill(false);
  
    let answer = '';
    while (answer.length < 4) {
      const random = parseInt(Math.random() * 10);
  
      if (!flags[random]) {
        answer += random;
        flags[random] = true;
      }
    }
    return answer;
  }
  
  const gameObject = {
    answer: initAnswer(),
    attempts: 0,
    isClear: false,
    end: false
  };

const isFourDigits = (number) => {
    return number.length === 3;
  }

const isCorrect = (number, answer) => {
    return number == answer;
  }
  
const findStrikes = (number, answer) => {
    let strikes = 0;
    const digits = number.split('');
  
    digits.map((digit, index) => {
      if (digit === answer[index]) {
        strikes++;
      }
    })
    return strikes;
  }
const findBalls = (number, answer) => { 
    let balls = 0; 
    const digits = number.split('');
    const flags = Array(10).fill(false);
  
    answer.split('').map(digit => {
      flags[parseInt(digit)] = true;
    });
  
    digits.map((digit, index) => {
      if (answer[index] !== digit && flags[parseInt(digit)]) {
        balls++;
      }
    });
    return balls;
  }

const giveHint = (number, answer) => {
    if (isCorrect(number, answer)) {
      gameClaer();
      return '정답입니다!';
    }
  
    const strikes = findStrikes(number, answer);
    const balls = findBalls(number, answer);
    return 'S: ' + strikes + ',B: ' + balls;
  }

const isValidToAttempt = (attempts) => {
    return attempts < 10;
   }