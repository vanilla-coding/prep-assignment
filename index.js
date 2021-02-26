var days = [
    'SUN',
    'MON',
    'TUE',
    'WED',
    'THU',
    'FRI',
    'SAT'
];

var months = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC'
];

var monthdays = [31,28,31,30,31,30,31,31,30,31,30,31];

var t = new Date();
var tdate = t.getDate();
var tday = t.getDay();
var tmonth = t.getMonth();
var tyear = t.getFullYear();  // 앞에 t 붙어있는거 -> 현재 날짜 가져옴.

var d = tdate;
var m = tmonth;
var y = tyear;
var nday = new Date(y,m,d).getDay();
var arr = [];  // 날짜 저장

function showDays(){

    document.querySelector('.year').innerHTML = y;
    document.querySelector('.dal').innerHTML = months[m];
    document.querySelector('.date').innerHTML = d;
    document.querySelector('.days').innerHTML = days[nday];

    var lastday = monthdays[m];  // 이 달의 마지막 날
    var firstday = new Date(y,m).getDay(); // 이 달의 첫번째 요일, 요일수만큼 0이 앞에 생긴다.
    var count = "";

    for (j=0; j<firstday; j++){
        count += '<div class="zeros">&nbsp</div>';
        document.querySelector('.numbers').innerHTML = count;
        arr.push(0);
    }

    for (i=1; i<= lastday; i++){
         if(i==tdate && m==tmonth && y==tyear){
            count += '<div style="color:red" id =' + i + '>' + i + '</div>';
        }
        else{
            count += '<div id =' + i + '>' + i + '</div>';
        }
        document.querySelector('.numbers').innerHTML = count;
        arr.push(i);
    }
}

var u = document.querySelector('.numbers'); // 달력 클릭시 표시 날짜 바꾸기 // 구현안됨
u.addEventListener('click', function(event){
    var text = u.textContent;
    console.log(text);
    if(text !== '&nbsp'){
        d = text;
        nday = new Date(y,m,d).getDay();
    }

    document.querySelector('.date').innerHTML = d;
    document.querySelector('.days').innerHTML = days[nday];
});

var k = document.querySelector('.preM'); // 뒤로 가기 버튼연결
k.addEventListener('click', function(event){
    preM();
});

var v = document.querySelector('.nextM'); // 앞으로 가기 버튼연결
v.addEventListener('click', function(event){
    nextM();
});

function preM(){ // 뒤로 가기 버튼
    d = 1;
    if(m == 0){
        m = 11;
        y -= 1;
    }
    else{
        m  -= 1;
    }
    nday = new Date(y,m,d).getDay();
    showDays();
}

function nextM(){ // 앞으로 가기 버튼
    d = 1;
    if(m == 11){
        m = 0;
        y += 1;
    }
    else{
        m  += 1;
    }
    nday = new Date(y,m,d).getDay();
    showDays();
}

showDays();

