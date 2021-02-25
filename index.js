const day = document.getElementById("js-day"),
 date = document.getElementById("js-date"),
 month = document.querySelector(".js-month");

 today = new Date(),
 MONTH = today.getMonth(),
 YEAR = today.getFullYear(),
 PAINTING = "painting";

// 현재 요일, 일자
function currentDay() {
    const week = new Array('SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT');
    day.innerText = week[today.getDay()];
    date.innerText = today.getDate()
}

//현재 월, 년
function currentMonth() {
    const months = new Array("JAN", "FEB", "MAR", "APR", "MAY", "JUN",
    "JUL", "AUG", "SEP", "OCT", "NOV", "DEC");
    const todayMonth = months[today.getMonth()];
    const todayYear = today.getFullYear();
    month.innerText = `${todayMonth} ${todayYear}`
}

// 달력 행&열 추가, 일자 채우기
function makeCalendar() {
    let lastDate = new Date(YEAR, MONTH+1, 0).getDate(); // 다음달 0번째 일
    let firstDay = new Date(YEAR, MONTH, 1).getDay(); //firstDay부터 일자 출력하기 위함
    let calendar = document.querySelector(".js-calendarBody");

    let row = calendar.insertRow();
    for(i = 0; i < firstDay; i++){
        cell = row.insertCell();
    } // 공백 만들기
    for(i=1; i <= lastDate; i++){
        if(firstDay != 7){
            cell = row.insertCell();
            cell.setAttribute('id', [i]);
            cell.innerHTML = [i];
            firstDay += 1;
        } else {
            row = calendar.insertRow();
            cell = row.insertCell();
            cell.setAttribute('id', [i]);
            cell.innerHTML = [i];
            firstDay = firstDay - 6;
        }
    }
}

function deleteCalendar() {
    const calendar = document.querySelector(".js-calendarBody");
    while(calendar.rows.length > 0) {
        calendar.deleteRow(calendar.rows.length -1);
    }
}

// 오늘 일자 색변경
function paintToday() {
    const id = document.getElementById([today.getDate()]);
//    today.getMonth() == MONTH)
    if(today.getMonth() == MONTH && today.getFullYear() == YEAR){
      id.classList.add(PAINTING);
    }
}

// 버튼 클릭시 월 이동
function prevMonth() {
    const months = new Array("JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC");
    // 현재 1월이면 update
    if(MONTH - 1 == -1) {
      MONTH = 11;
      YEAR -= 1
    } else {
      MONTH -= 1;
    }
    month.innerText = `${months[MONTH]} ${YEAR}`
    // day -> 그달의 첫째날로 변경
    const week = new Array('SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT');
    day.innerText = week[new Date(YEAR, MONTH, 1).getDay()];
    // date ->1일로 변경
    if(MONTH == new Date().getMonth() && YEAR == new Date().getFullYear()) {
        date.innerText = new Date().getDate();
    } else {
        date.innerText = new Date(YEAR, MONTH, 1).getDate();
    }
    // deleteCalendar함수 실행
    deleteCalendar();
    // makeCalendar함수 실행
    makeCalendar();
    paintToday();

}
function nextMonth() {
    const months = new Array("JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC");
    // 현재 1월이면 update
    if(MONTH + 1 == 12) {
      MONTH = 0;
      YEAR += 1
    } else {
      MONTH += 1;
    }
    month.innerText = `${months[MONTH]} ${YEAR}`
    // day -> 그달의 첫째날로 변경
    const week = new Array('SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT');
    day.innerText = week[new Date(YEAR, MONTH, 1).getDay()];
    // date ->1일로 변경
    if(MONTH == new Date().getMonth() && YEAR == new Date().getFullYear()) {
        date.innerText = new Date().getDate();
    } else {
        date.innerText = new Date(YEAR, MONTH, 1).getDate();
    }
    // deleteCalendar함수 실행
    deleteCalendar();
    // makeCalendar함수 실행
    makeCalendar();
    paintToday();
}

const prevBtn = document.getElementsByClassName("prevBtn")[0]; // array를 retun하므로 [0]입력
const nextBtn = document.getElementsByClassName("nextBtn")[0];
prevBtn.addEventListener('click', prevMonth);
nextBtn.addEventListener('click', nextMonth);

// 일자 click 기능
function clickedDate(event) {
    const clickedDate = event.target.innerText;
    const week = new Array('SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT');
    const thisMonth = new Date().getMonth;
    const thisYear = new Date().getFullYear;
    week.indexOf(day.innerText) // 1일의 요일
    day.innerText = week[(clickedDate - 1 + new Date(YEAR, MONTH, 1).getDay()) % 7];
    date.innerText = clickedDate;
}

const datesTable = document.querySelector("tbody");
datesTable.addEventListener('click', clickedDate);

function init() {
    currentDay();
    currentMonth();
    makeCalendar();
    paintToday();
}

init();