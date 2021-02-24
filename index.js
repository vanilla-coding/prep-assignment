"use strict";

let DAYS = [
  "SUN",
  "MON",
  "TUE",
  "WED",
  "THU",
  "FRi",
  "SAT"
]
let MONTHS = [
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
  "DEC"
]

let selected = new Date();
let selectedMonth = selected.getMonth();
let selectedYear = selected.getFullYear();
let selectedDate = selected.getDate();
let selectedDay = selected.getDay();

const currentDay = document.querySelectorAll(".current-day p");
const calender = document.querySelectorAll("tbody td");

function buildCalender(today){
  let month = today.getMonth();
  let year = today.getFullYear();

  if (month !== selectedMonth || year !== selectedYear){
    today.setDate(1);
  }

  let date = today.getDate();
  let day = today.getDay();

  let lastDate = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

  let currentMonth = document.querySelector(".current-month");
  currentMonth.textContent = MONTHS[month] + ' ' + year;

  if (month === currentMonth && year === selectedYear){
    currentDay[0].textContent = DAYS[selectedDay];
    currentDay[1].textContent = selectedDate;
  } else {
    currentDay[0].textContent = DAYS[day];
    currentDay[1].textContent = 1;
  }

  for (let i = 0; i < calender.length; i++){
    calender[i].textContent = ''
  }

  var dayIndex = day;

  for (let i = 1; i < lastDate; i++){
    calender[dayIndex].textContent = i;
    calender[dayIndex].style.color = "black";

    if (i === date && year === selectedYear && month === selectedMonth) {
      calender[dayIndex].style.color = "red";
    }
    update(dayIndex, day);
    dayIndex ++;
  }
}

function update(index, firstDay){
  calender[index].addEventListener("click", (event) =>{
    if (!event.target.textContent){
      return;
    }
    if (index < 7) {
      currentDay[0].textContent = DAYS[index];
    } else {
      currentDay[0].textContent = DAYS[index % 7];
    }

    let newIndex = index - firstDay;
    currentDay[1].textContent = newIndex + 1;
  });
}

const prevBtn = document.querySelector('.btn.previous');
const nextBtn = document.querySelector('.btn.next');

prevBtn.addEventListener("click", function(){
  let currentMonth = selected.getMonth();
  selected.setMonth(currentMonth - 1);
  if (selected.getMonth() === selectedMonth && selected.getFullYear() === selectedYear) {
    selected = new Date();
  }

  buildCalender(selected);
});

nextBtn.addEventListener("click", function(){
  let currentMonth = selected.getMonth();
  selected.setMonth(currentMonth + 1);
  if (selected.getMonth() === selectedMonth && selected.getFullYear() === selectedYear) {
    selected = new Date();
  }

  buildCalender(selected);
});

buildCalender(selected);

