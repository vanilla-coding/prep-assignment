/* 필요한 객체 생성 */
const calToday = document.querySelector(".calendarToday");
const calDate = document.querySelector(".calendarDate");
const monthYear = document.querySelector(".calendarMonthYear")

/* 현재의 날짜 */
const today = new Date();
const monthList = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
const dayList = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function enToday() {
  calToday.innerText = dayList[today.getDay()];
}

function enDate() {
  calDate.innerText = today.getDate();
}

function enMonthYear() {
  monthYear.innerText = monthList[today.getMonth()] + " " + today.getFullYear();
}

function calendar(){
  let firstDate = new Date(today.getFullYear(), today.getMonth(), 1);
  let lastDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  let mainCalendar = document.querySelector(".mainCalendar");
  let row = mainCalendar.insertRow();
  let count = 0;

  while (mainCalendar.rows.length > 2) {
    mainCalendar.deleteRow(mainCalendar.rows.length-1);
  }

  for (i = 0; i < firstDate.getDate(); i++) {
    cell = row.insertCell();
    count = count + 1;
  }

  for (i = 1; i <= lastDate.getDate(); i++) {
    cell = row.insertCell();
    cell.innerHTML = i;
    count = count + 1;
    
    if(count % 7 === 1) {
      cell.innerHTML = i;
    }
    if(count % 7 === 0) {
      cell.innerHTML = i;
      row = mainCalendar.insertRow();
    }
  }
}

enToday();
enDate();
enMonthYear();
calendar();