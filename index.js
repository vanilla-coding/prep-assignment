const currentDay = document.querySelector(".current-day");
const currentDate = document.querySelector(".current-date");
const currentMonth = document.querySelector(".current-month");
const currentYear = document.querySelector(".current-year");
const tbody = document.querySelector("tbody");
const leftChevron = document.querySelector(".left-chevron i");
const rightChevron = document.querySelector(".right-chevron i");

const currDate = new Date();
let moveDate = new Date();

const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const month = [
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

function printDayContainer(currDay) {
  currentDay.innerHTML = `${week[currDay.getDay()]}`;
  currentDate.innerHTML = `${currDay.getDate()}`;
  currentMonth.innerHTML = `${month[currDay.getMonth()]}`;
  currentYear.innerHTML = `${currDay.getFullYear()}`;
}

function printCalendar(currDay) {
  let dayIdx = 1;
  const firstDate = new Date(currDay.getFullYear(), currDay.getMonth(), 1);
  const lastDate = new Date(currDay.getFullYear(), currDay.getMonth() + 1, 0);

  for (var i = 0; i < 5; i++) {
    const tr = document.createElement("tr");
    tbody.appendChild(tr);
    for (var j = 0; j < week.length; j++) {
      const td = document.createElement("td");
      tr.appendChild(td);

      if (
        (dayIdx > 1 && dayIdx <= lastDate.getDate()) ||
        (i === 0 && j === firstDate.getDay())
      ) {
        td.innerHTML = dayIdx;
        if (
          dayIdx === currDay.getDate() &&
          currDay.getFullYear() === currDate.getFullYear() &&
          currDay.getMonth() === currDate.getMonth()
        ) {
          td.style.color = "red";
        }
        dayIdx++;
      }
    }
  }
}

function clickLeftChevron(event) {
  tmpDate = new Date(moveDate.getFullYear(), moveDate.getMonth() - 1);
  while (tbody.hasChildNodes()) {
    tbody.removeChild(tbody.firstChild);
  }

  if (
    tmpDate.getFullYear() === currDate.getFullYear() &&
    tmpDate.getMonth() === currDate.getMonth()
  ) {
    tmpDate = currDate;
  }

  printDayContainer(tmpDate);
  printCalendar(tmpDate);
  moveDate = tmpDate;
}

function clickRightChevron(event) {
  tmpDate = new Date(moveDate.getFullYear(), moveDate.getMonth() + 1);
  while (tbody.hasChildNodes()) {
    tbody.removeChild(tbody.firstChild);
  }

  if (
    tmpDate.getFullYear() === currDate.getFullYear() &&
    tmpDate.getMonth() === currDate.getMonth()
  ) {
    tmpDate = currDate;
  }

  printDayContainer(tmpDate);
  printCalendar(tmpDate);
  moveDate = tmpDate;
}

function init() {
  printDayContainer(currDate);
  printCalendar(currDate);
  leftChevron.addEventListener("click", clickLeftChevron);
  rightChevron.addEventListener("click", clickRightChevron);
}

init();
