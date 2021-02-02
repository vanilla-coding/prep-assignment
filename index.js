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

const previousMonthButton = document.getElementById("jsPreviousMonthButton");
const nextMonthButton = document.getElementById("jsNextMonthButton");

const now = new Date();

function colorDates() {}

function displayCalendarDates(firstDay, lastDate) {
  const allDatesInCalendar = document.querySelectorAll(
    "#jsCalendarTable > tbody td"
  );
  const totalCalendarCells = allDatesInCalendar.length;
  for (let i = 0; i < totalCalendarCells; i++) {
    if (i == now.getDate()) {
      allDatesInCalendar[i].style.color = "red";
      allDatesInCalendar[i].style.fontWeight = 1000;
    }
    if (firstDay <= i && i <= lastDate) {
      allDatesInCalendar[i].textContent = i;
      continue;
    }

    allDatesInCalendar[i].textContent = "";
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
}

function initialize() {
  displayCalendar(now);
  //   previousMonthButton.addEventListener("click", handleMoveMonthButton);
  //   nextMonthButton.addEventListener("click", handleMoveMonthButton);
}

initialize();
