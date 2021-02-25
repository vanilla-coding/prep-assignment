console.log("hello, vanilla.");
function start() {
  const rand1 = Math.floor((Math.random()*(10-1)+1));
  const rand2 = Math.floor((Math.random()*(10-1)+1));
  const rand3 = Math.floor((Math.random()*(10-1)+1));
  goal = [rand1.toString() , rand2.toString() ,rand3.toString()];
  console.log(goal);
}

var c = 0;
function count(){
  c++;
  document.getElementById('try').innerHTML = c;
}

function enter() {
 data = document.getElementById("data").value;
 Data = Array.from(data);
 if ( c < 10){
var app = function answer () {
  if(data.length === 3) {
   if(Data[0] === goal[0] && Data[1] === goal[1] && Data[2] === goal[2]) {
    alert('정답 입니다!');
  } else if (true) {
    score();
    count();
  }
 } else {
  alert('세자리 숫자로 입력해주세요!')
 }
}
return app();
} else {
  alert('횟수는 10회로 제한 됩니다.')
}
}

function score() {
   var j = 0;
   var s = 0;
  for (var i=0 ; i<3; i++) {
  if( goal.indexOf(Data[i]) === -1 ){
    j++;
  }
   }
   if (j===3) {
     document.getElementById('out').innerHTML = "1"
     document.getElementById('strike').innerHTML = "0"
     document.getElementById('ball').innerHTML = "0"
   } else for ( var k = 0; k<3; k++ ) {
     document.getElementById('out').innerHTML = "0"
     if ( goal[k] === Data[k]) {
       s++
     }
   }
  if(j===0 && s===0) {
      document.getElementById('strike').innerHTML = "0"
      document.getElementById('ball').innerHTML = "3"
    } else if (j===0 && s===1) {
      document.getElementById('strike').innerHTML = "1"
      document.getElementById('ball').innerHTML = "2"
    } else if (j===1 && s===0) {
      document.getElementById('strike').innerHTML = "0"
      document.getElementById('ball').innerHTML = "2"
    } else if (j===1 && s===1) {
      document.getElementById('strike').innerHTML = "1"
      document.getElementById('ball').innerHTML = "1"
    } else if (j===1 && s===2) {
      document.getElementById('strike').innerHTML = "2"
      document.getElementById('ball').innerHTML = "0"
    } else if (j===2 && s===0) {
      document.getElementById('strike').innerHTML = "0"
      document.getElementById('ball').innerHTML = "1"
    } else if (j===2 && s===1) {
      document.getElementById('strike').innerHTML = "1"
      document.getElementById('ball').innerHTML = "0"
    }
}

function rst () {
document.getElementById('strike').innerHTML = 0;
document.getElementById('ball').innerHTML = 0;
document.getElementById('out').innerHTML = 0;
document.getElementById('try').innerHTML = 0;
c=0;
goal=null;
}
