const DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const MONTHS = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

let pageRefreshed = true;
let currentDateObject = new Date();
const now = currentDateObject;

function handleMoveMonthButton(event) {
  pageRefreshed = false;
  const clickedButton = event.target.className;
  if (clickedButton === "previous-month-button") {
    currentDateObject.setMonth(now.getMonth() - 1);
  }
  if (clickedButton === "next-month-button") {
    currentDateObject.setMonth(now.getMonth() + 1);
  }
  displayCalendar(currentDateObject);
}

function displayCalendarToday() {
  const bigDay = document.getElementById("jsBigDay");
  const bigDate = document.getElementById("jsBigDate");
  bigDay.textContent = DAYS[now.getDay()];
  bigDate.textContent = now.getDate();
}

function resetCalendarDates(allDatesInCalendar) {
  const totalCalendarCells = allDatesInCalendar.length;
  for (let i = 0; i < totalCalendarCells; i++) {
    allDatesInCalendar[i].textContent = "";
  }
}

function displayCalendarDates(firstDay, lastDate) {
  const allDatesInCalendar = document.querySelectorAll(
    "#jsCalendarTable > tbody td"
  );

  resetCalendarDates(allDatesInCalendar);

  for (let i = 1, indexForDate = firstDay; i <= lastDate; i++) {
    allDatesInCalendar[indexForDate].textContent = i;
    indexForDate += 1;
  }
}

function displayCalendarTitle(year, month) {
  const calendarTitleMonth = document.getElementById("jsCalendarTitleMonth");
  const calendarTitleYear = document.getElementById("jsCalendarTitleYear");
  calendarTitleYear.textContent = year;
  calendarTitleMonth.textContent = MONTHS[month];
}

function getLastDate(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1).getDay();
}

function displayCalendar(newDateObject) {
  const year = newDateObject.getFullYear();
  const month = newDateObject.getMonth();
  const date = newDateObject.getDate();
  const day = newDateObject.getDay();
  const firstDay = getFirstDayOfMonth(year, month);
  const lastDate = getLastDate(year, month);
  displayCalendarTitle(year, month);
  displayCalendarDates(firstDay, lastDate);
  if (pageRefreshed) {
    displayCalendarToday(day, date);
  }
}

function initialize() {
  displayCalendar(now);
  const previousMonthButton = document.getElementById("jsPreviousMonthButton");
  const nextMonthButton = document.getElementById("jsNextMonthButton");
  previousMonthButton.addEventListener("click", handleMoveMonthButton);
  nextMonthButton.addEventListener("click", handleMoveMonthButton);
}

initialize();
