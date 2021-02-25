console.log("hello, vanilla.");

//랜덤한 세자리 숫자만들기
let number=[];
let randomNum = function(){
    for(let i=0; i<3; i++){
        let num1 = Math.floor(Math.random()*10);
        number.push(num1);
    }
    return number;
};
randomNum();

console.log(number);

//재시작버튼
let restart =function(){
    let inputValue=document.getElementById('num');
    let hintValue = document.getElementById('hint');
    inputValue.value="";
    hintValue.innerText="";
    alert("다시 시작합니다.");
}



//자리수 체크
//숫자 맞추기
let strike =0;
let ball=0;
let valid = function(){
    let insertNum = document.getElementById('num').value;
    let resultNum =insertNum.split("");
        if(resultNum.length!==3){
             alert('세자리 수를 입력해주세요!');
         }
        for(let i=0; i<3; i++){
            for(let j=0; j<3; i++){
                if(number[i] == resultNum[j]){
                    if(i === j){
                        strike++;
                    }else{
                        ball++;
                    }
                }
                break;
            }
        }
        return document.getElementById('hint').innerText=`${strike}strike,${ball}ball`;
};


