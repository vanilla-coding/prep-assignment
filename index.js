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
const now = new Date();
let currentDateObject = new Date();

function handleDateClick(event) {
  const differenceWithClickedDate = document.getElementById(
    "jsDifferenceWithClickedDate"
  );
  const currentClickedDate = event.target;
  const ONE_DAY = 1000 * 60 * 60 * 24;
  const clickedDateObject = new Date(
    currentDateObject.getFullYear(),
    currentDateObject.getMonth(),
    parseInt(currentClickedDate.textContent)
  );

  if (isDateToday(clickedDateObject.getDate())) {
    displayCalendar(currentDateObject);
    differenceWithClickedDate.textContent = "";
  }

  const dateDifferenceFromNow = Math.ceil((clickedDateObject - now) / ONE_DAY);

  if (dateDifferenceFromNow) {
    displayCalendar(currentDateObject);
    differenceWithClickedDate.textContent =
      dateDifferenceFromNow + " day difference";
    currentClickedDate.style.color = "blue";
    currentClickedDate.style.fontWeight = 1000;
  }
}

function handleMoveMonthButton(event) {
  const clickedButton = event.target.className;
  if (clickedButton === "previous-month-button") {
    currentDateObject.setMonth(currentDateObject.getMonth() - 1);
  }
  if (clickedButton === "next-month-button") {
    currentDateObject.setMonth(currentDateObject.getMonth() + 1);
  }
  displayCalendar(currentDateObject);
}

function displayCalendarToday() {
  const bigDay = document.getElementById("jsBigDay");
  const bigDate = document.getElementById("jsBigDate");
  bigDay.textContent = DAYS[now.getDay()];
  bigDate.textContent = now.getDate();
}

function isDateToday(date) {
  return (
    date === now.getDate() &&
    currentDateObject.getMonth() === now.getMonth() &&
    currentDateObject.getFullYear() === now.getFullYear()
  );
}

function resetCalendarDates(allDatesInCalendar) {
  const totalCalendarCells = allDatesInCalendar.length;
  for (let i = 0; i < totalCalendarCells; i++) {
    allDatesInCalendar[i].textContent = "";
    allDatesInCalendar[i].style.fontWeight = "normal";
  }
}

function displayCalendarDates(firstDay, lastDate) {
  const allDatesInCalendar = document.querySelectorAll(
    "#jsCalendarTable > tbody td"
  );
  resetCalendarDates(allDatesInCalendar);

  for (let i = 1, indexForDate = firstDay; i <= lastDate; i++) {
    allDatesInCalendar[indexForDate].textContent = i;
    if (isDateToday(i)) {
      allDatesInCalendar[indexForDate].style.color = "red";
      allDatesInCalendar[indexForDate].style.fontWeight = 1000;
    } else {
      allDatesInCalendar[indexForDate].style.color = "black";
    }
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
  displayCalendarToday(day, date);
}

function initialize() {
  displayCalendar(now);
  const previousMonthButton = document.getElementById("jsPreviousMonthButton");
  const nextMonthButton = document.getElementById("jsNextMonthButton");
  const calenderTable = document.getElementById("jsCalendarTable");
  previousMonthButton.addEventListener("click", handleMoveMonthButton);
  nextMonthButton.addEventListener("click", handleMoveMonthButton);
  calenderTable.addEventListener("click", handleDateClick);
}

initialize();
