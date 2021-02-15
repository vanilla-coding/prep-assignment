console.log("hello, vanilla.");
var howmany = document.getElementById('try');
var flag = 0;
var startbtn = document.getElementById("startbtn");

var count=0;
var strike=0;
var ball=0;
var input=0;
var opportunity=10;

var answer; 

function setanswer(){
    const setting = new Set();
    while (setting.size < 3) {
        setting.add(Math.floor(Math.random() * 10));
    }
    answer = Array.from(setting);
    console.log(answer);
    howmany.textContent="게임이 시작되었습니다. 기회는 10번입니다.";
    count=0;
    opportunity=10;
    startbtn.value='다시하기';
    startbtn.style.visibility='hidden';
}

function enterkey(){
    if (window.event.keyCode == 13) {
        search_try();
   }
}

function search_try(){
    input=document.getElementById('user_answer').value;
    console.log(input);
    document.getElementById('user_answer').value = "";
    startgame();
};

function startgame(){
    if(answer == null){
        alert("게임시작 버튼을 눌러주세요!");
        return;
    }
    if(count > 9){
        alert("게임오버");
        howmany.textContent='정답 : ' + answer;
        startbtn.style.visibility='visible';
        return;
    }
    if(input.length != 3){
        alert('세자리 수를 입력해 주세요');
        return;
    }
    console.log(count);//기회 확인
    var answerList = input.split('');
    strike=0;
    ball=0;
    count++;
    opportunity--;
    for(let j = 0; j < 3 ; j++){
        for(let k = 0 ; k < 3 ; k++){
            if(answer[j] == answerList[k]){
                if(j===k){
                    strike++;
                }
                else{
                    ball++;
                }
                break;
            }
        }
    }
    if(strike === 3){
        howmany.textContent='홈런입니다! 정답:' + answer;
        console.log("홈런");
        startbtn.style.visibility='visible';
    }
    else{
        howmany.textContent='기회 : '+opportunity+' 스트라이크 :' + strike + ' ' + '볼 : ' +  ball;
        console.log('스트라이크 :' + strike + ' ' + '볼 : ' +  ball);
    }
}
