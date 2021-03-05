

function randomNumber() {
    
    var numberlist = [1,2,3,4,5,6,7,8,9];
    var picknumber = [];
    for (var i = 0; i < 3; i++){
        var tnum = [];
        tnum = numberlist.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        picknumber.push(tnum);
    }
    console.log(picknumber);
}

document.getElementById("start").addEventListener('click', function() {
    randomNumber();
});


//값 입력
function inGame() {

var strike = 0;
var ball = 0;
var answer = document.getElementById("answer");


for(var n = 0; n < 3; n++){
    if(answer[n] === randomNumber[n])
    strike++;

    for(var n2 = 0; n2 < 3; n2++){
        if((n != n2) && (answer[n] === randomNumber[n2])){
            ball++;
        }
    }
}; 
    console.log(inGame);
}


document.getElementById("run").addEventListener('click', function() {
    inGame();
});

