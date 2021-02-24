console.log("hello, vanilla.");
let random_num=-1
let count=0
function startButton_click(s) {
    random_num=String(Math.floor(Math.random()*999))
}
function resetButton_click(s) {
    count=0
    random_num=-1

}


function inputProcess() {
    const inputVal = document.getElementById('inputVal').value;
    if (inputVal.length!=3){
        alert( " 세자리 숫자를 입력하세요.");
    }
    else if (count ==10){
        alert( " 10회 시도가 완료되었습니다.");
    }
    else{
        let strike=0
        let ball=0
        count++
        for(let i=0;i<3;i++){
            if(random_num.indexOf(inputVal[i])==i){
                strike++
                console.log("strike증가")
            }else{
                ball++
                console.log("ball증가")
            }
        }
        document.getElementById("result").innerText = strike+"S,"+ball+"B, count:"+count;

    }
    }
    