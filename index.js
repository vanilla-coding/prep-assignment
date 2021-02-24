
// 게임 시작 및 랜덤 숫자 생성
let randomNumber = function (){
    var playBall =[];
    for(let i=0; i<3; i++){
        let num = Math.floor(Math.random()*10);
        let num2 = playBall.push(num);
    }
    return playBall;
};


var createNum = randomNumber();
console.log(createNum);



// 게임 재시작
let resetbtn = function(){
    let inputValue = document.querySelector("#play");
    document.querySelector('#result').innerText = "";
    inputValue.value ="";
    alert("게임이 재시작됩니다.")
};




// 숫자 자릿수 체크
let validCheck = function (){
    var insertNum = document.querySelector("#play").value;
    let answer = insertNum.split("");
        if(answer.length !== 3 ){
            alert('세자리 숫자를 입력하세요');
           }
};



// 스코어 찾기
let strike;
let ball;
    let findResultValue = function(){
            let first = document.querySelector("#play").value;
            let second = first.split("");
          strike =0;
          ball =0;
            for(let i=0; i<3; i++){
                for(let j=0; j<3; j++){
                        if(createNum[i] == second[j]){
                            if( i === j ){
                               strike++;
                            }else {
                                ball++;
                            }
                            break;
                        }
                    }
                }
            return document.querySelector('#result').innerText = `${strike}S ,${ball}B`;
        };


















