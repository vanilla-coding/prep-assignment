
console.log("hello, vanilla.");

//영문 월을 출력하는 함수
function get_month(n){
    switch(n){
        case 0:
            return "JAN";
        case 1:
            return "FEB";
        case 2:
            return "MAR";
        case 3:
            return "APR";
        case 4:
            return "MAY";
        case 5:
            return "JUN";
        case 6:
            return "JUL";
        case 7:
            return "AUG";
        case 8:
            return "SEP";
        case 9:
            return"OCT";
        case 10:
            return "NOV";
        case 11:
            return "DEC";
    }
}

// 영문 요일명 저장하는 함수(0:일요일 ~ 6:토요일)
function get_week(n) {
    switch(n) {
        case 0 :
            return "SUN";
        case 1 :
            return "MON";
        case 2 :
            return "TUE";
        case 3 :
            return "WED";
        case 4 :
            return "THR";
        case 5 :
            return "FRI";
        case 6 :
            return "SAT";
    }
}

// 오늘 날짜 출력 함수(요일, 일)
function today(date){
    document.getElementById('today_week').innerText = get_week(date.getDay());
    document.getElementById('today_day').innerText = date.getDate();
}

// 달력 출력 함수
function calendar(year, month){
    document.getElementById('day_num1').innerHTML = ""; //초기화
    document.getElementById('day_num2').innerHTML = ""; //초기화
    document.getElementById('day_num3').innerHTML = ""; //초기화
    document.getElementById('day_num4').innerHTML = ""; //초기화
    document.getElementById('day_num5').innerHTML = ""; //초기화
    document.getElementById('week_name').innerHTML = ""; //초기화
    // 달력 상단에 월과 년도 출력
    document.getElementById('cal_month').innerText = get_month(month);
    document.getElementById('cal_year').innerText = year;
    // 달력에 요일 출력
    for(i= 0 ; i<7; i++){
        var week = document.createElement('th');
        var week_name = document.createTextNode(get_week(i));
        week.appendChild(week_name);
        document.getElementById('week_name').appendChild(week);
    }
    // 매 월 1일의 요일수를 first_week_num변수에 저장
    // 0:일요일 ~ 6:토요일
    var first_week_num = new Date(year, month, 1).getDay();
    // 1일의 요일수만큼 공백 셀 생성
    for(i=1; i<=first_week_num; i++){ //0이어야할 것 같은뎅
        var day = document.createElement('td');
        var day_num = document.createTextNode('');
        day.appendChild(day_num);
        document.getElementById('day_num1').appendChild(day);
    }
    // 달력에 날짜 출력
    // i는 1부터 매 월의 마지막 날 까지 반복
    var last_day = new Date(year, month+1, 0).getDate();
    for(i=1; i<=last_day; i++){
        // 날짜 선택하면 실행되는 이벤트 리스너 추가
        // document.getElementById(i).addEventListener('click',day_click);
        if(i<=7-first_week_num){
            var day = document.createElement('td');
            var day_num = document.createTextNode(i);
            day.appendChild(day_num);
            document.getElementById('day_num1').appendChild(day);
            day.id = i;
        } else if(i<=14-first_week_num){
            var day = document.createElement('td');
            var day_num = document.createTextNode(i);
            day.appendChild(day_num);
            document.getElementById('day_num2').appendChild(day);
            day.id = i;
        } else if(i<=21-first_week_num){
            var day = document.createElement('td');
            var day_num = document.createTextNode(i);
            day.appendChild(day_num);
            document.getElementById('day_num3').appendChild(day);
            day.id = i;
        } else if(i<=28-first_week_num) {
            var day = document.createElement('td');
            var day_num = document.createTextNode(i);
            day.appendChild(day_num);
            document.getElementById('day_num4').appendChild(day);
            day.id = i;
        } else if(i<=35-first_week_num) {
            var day = document.createElement('td');
            var day_num = document.createTextNode(i);
            day.appendChild(day_num);
            document.getElementById('day_num5').appendChild(day);
            day.id = i;
        } else {
            var day = document.createElement('td');
            var day_num = document.createTextNode(i);
            day.appendChild(day_num);
            document.getElementById('day_num6').appendChild(day);
            day.id = i;
        }
    }
    for(i=1; i<=last_day; i++){
        // 날짜(<td>태그)를 선택하면 실행되는 이벤트 리스너 추가
        document.getElementById(i).addEventListener('click',day_click);
    }
}

//클릭된 날짜를 화면에 표시하는 함수
function day_click(){
    my_date = new Date(my_date.getFullYear(),my_date.getMonth(),this.id);
    today(my_date);
}

// 왼쪽 버튼의 이벤트 정의하는 함수
function leftClick() {
    document.getElementById('left_btn').style.border = '1px solid black';
    // my_date에서 한 달 후의 달력 출력
    my_date.setMonth(my_date.getMonth()-1);
    calendar(my_date.getFullYear(), my_date.getMonth());
    my_date = new Date(my_date.getFullYear(),my_date.getMonth(),1);
    today(my_date);
}

// 오른쪽 버튼의 이벤트 정의하는 함수
function rightClick() {
    document.getElementById('right_btn').style.border = '1px solid black';
    // my_date에서 한 달 후의 달력 출력
    my_date.setMonth(my_date.getMonth()+1);
    calendar(my_date.getFullYear(), my_date.getMonth());
    // 바뀐 월의 1일의 날짜 정보출력
    my_date = new Date(my_date.getFullYear(),my_date.getMonth(),1);
    today(my_date);
}

// 오늘 날짜와 시간값을 가지는 인스턴스 값을 my_date변수에 저장
var my_date =  new Date();

// 화면 중앙에 오늘 날짜 출력
today(my_date);
// 오늘 달력 출력
calendar(my_date.getFullYear(), my_date.getMonth());

//왼쪽, 오른쪽 버튼에 이벤트 생성
document.getElementById('left_btn').addEventListener('click', leftClick);
document.getElementById('right_btn').addEventListener('click', rightClick);


