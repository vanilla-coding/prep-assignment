var randomnum_arr=[];
    
function Comnum() {
    for(var i=0; i <3; i++){
        var randomnum = Math.floor(Math.random()*10);
        randomnum_arr.push(randomnum);
    }
    alert("game start");
    return randomnum_arr;
    console.log(randomnum_arr)
}


function Entergame() {
    var playernum = document.getElementById("Answer").Value;
        count=0;
        strike=0;
        ball=0;
    while(count < 10) {
        var answer=prompt('');
        var answerArr=answer.split('');
        for (var j=0; j < 3; j++) {
            for (var q=0; q < 3; q++) {
                if(j === q) {
                    strike++;
                } else {
                    ball++;
                }
            }
            break;
        }
        if (strike === 4) {
            console.log('homerun');
            break;
        }
        else if (count >= 10) {
            console.log('you lose');
        }
        else {
            console.log(strike + 'strike' + ball + 'ball');
        }
    }
}

function Resetgame() {

}