console.log("hello, vanilla.");


//재시작
function restart(){
    input.value="";
    start();
    alert("재시작합니다.")
}

//게임버튼 클릭시 랜덤 숫자 생성
let start = function(){
    let numberAll =[0,1,2,3,4,5,6,7,8,9];
    let ansNum=[];
    for(let i=0; i<3; i++){
        let num = numberAll[Math.floor(Math.random()*numberAll.length)];
        ansNum.push(num);
    }
    return ansNum;
};

let doNum = start();
console.log(doNum);

//입력값이 세자리 숫자가 아닌 경우 경고창 띄워주기
let form = document.querySelector("form"),
    input = document.querySelector("input");
let intNum =function (){
    let currentValue = input.value,
        resultNum =currentValue.split("");
        if(resultNum.length !== 3){
            alert('세자리수를 입력해주세요.');
        }
};

//입력값과 랜덤숫자값 비교하기 + 10회 제한
let strike;
let ball;
let count=10;
let chance=document.querySelector(".chance");

let retNum = function(){
    let resultAns = input.value;
    strike=0;
    ball=0;
    count--;
        for(let m=0; m<3; m++){
            for(let n=0; n<3; n++){
                if(doNum[m] == resultAns[n]){
                    if(m === n){
                        strike++;
                    }else{
                        ball++;
                    }
                    break;
                }
            }
            if(strike ===3){
                alert("정답입니다.");
            }
            if(count == 0){
                alert("모든 기회를 사용하셨습니다.");
            }
        }
        //결과값 출력
        return document.querySelector("#hint").innerHTML = `${strike}strike, ${ball}ball`;
};
