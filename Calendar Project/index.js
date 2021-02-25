
/* 필요한 객체 생성 */
const month = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const calToday = document.getElementById("#calenderToday");
const calDate = document.getElementById("#calendarDate");
const calMonthYear = document.getElementById("#calendarMonthYear");
const mainCalendar = document.getElementById("#mainCalendar");
const tablebody = document.getElementById("#tableBody");
const prevBtn = document.getElementById("#prevBtn");
const nextBtn = document.getElementById("#nextBtn");

/* 현재의 날짜 */
const DAY = new Date();

/*요일 출력 함수 */
function day() { 
  calToday.innerText = week[DAY.getDay()];
}

/*날짜 출력 함수 */
function date() {
  calDate.innerText = DAY.getDate();
}

/* 달과 연도 출력 함수 */
function monthYear() {
  calMonthYear.innerText = month[DAY.getMonth()] +" "+DAY.getFullYear();
}

/* 월별 마지막날 */
function lastDays() {
  let lastDay;
  let month = DAY.getMonth();
    switch (month) {
      case 1:
        lastDay = 28;
        break;
      case 3: case 5: case 8: case 10:
        lastDay = 30;
        break;
      case 0: case 2: case 4: case 6: case 7: case 9: case 11:
        lastDay = 31;
        break;
}

/* 날짜 클릭 시 날짜와 요일 출력 함수 */
function dateClick(change) {
  if (change > 0) {
    DAY.setDate(change)
    calDate.innerText = change;
    calToday.innerText = week[DAY.getDay()];
  }

/* 달력에 공백 셀 생성 */
function createCalendar() {
  const tr = document.createElement("tr");
    for (const a = 0; a < 7; a++){
      const td = document.createElement("td");
      tr.appendChild(td)
      td.setAttribute("onclick", "dateClick(innerText)")
      tablebody.appendChild(tr)
    }
  }

/* 달력을 완성하지 못해 죄송합니다.
일주일동안 달력을 완성하기 위해 많이 찾아보고 뜯어보면서 구현해보려고 했으나 달력 출력에 대한 부분은 아직까지 자바스크립트 기초지식과 이해가 부족하여,
달력을 구현하지 못했습니다. 빠른시일 내에 자바스크립트 실력을 끌어올려 완성하도록 하겠습니다. */

function start() {
    day();
    date();
    monthYear();
}
start();