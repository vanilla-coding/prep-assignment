let DAYS = [
  'SUN',
  'MON',
  'TUE',
  'WED',
  'THU',
  'FRI',
  'SAT'
];

let MONTHS = [
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
let d = new Date();
let nowYear = d.getFullYear();
let nowMonth = d.getMonth();
let nowDate = d.getDate();
let nowDay = d.getDay();

let calendarDates = document.querySelectorAll('tbody td');
let currentDay = document.querySelectorAll('.current-day p');

function displayCalendar(today) {
  let month = today.getMonth();
  let year = today.getFullYear();

  if (month !== nowMonth || year !== nowYear) {
    today.setDate(1);
  }
 
  let date = today.getDate();
  let day = today.getDay();

  let lastDate = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

  let currentMonth = document.querySelector('.current-month');

  currentMonth.textContent = MONTHS[month] + ' ' + year;

  let dayIndex = day;

  if (month === nowMonth && year === nowYear) {
    currentDay[0].textContent = DAYS[nowDay];
    currentDay[1].textContent = nowDate;
  } else {
    currentDay[0].textContent = DAYS[day];
    currentDay[1].textContent = 1;
  }

  for (let i = 0; i < calendarDates.length; i++) {
    calendarDates[i].textContent = '';
  }

  for (let i = 1; i <= lastDate; i++) {
    calendarDates[dayIndex].textContent = i;
    calendarDates[dayIndex].style.color = 'black';

   
    updateSelectedDay(dayIndex, day);

    dayIndex++;
  }
}

function updateSelectedDay(currentIndex, firstDay) {
  calendarDates[currentIndex].addEventListener('click', function (event) {
    if (!event.target.textContent) {
      return;
    }

    if (currentIndex < 7) {
      currentDay[0].textContent = DAYS[currentIndex];
    } else {
      currentDay[0].textContent = DAYS[currentIndex % 7];
    }

   
  });
}

let prevButton = document.querySelector('.button.prev');
let nextButton = document.querySelector('.button.next');

prevButton.addEventListener('click', function () {
  let currentMonth = d.getMonth();
  d.setMonth(currentMonth - 1);
  displayCalendar(d);
});

nextButton.addEventListener('click', function () {
  let currentMonth = d.getMonth();
  d.setMonth(currentMonth + 1);

  displayCalendar(d);
});



displayCalendar(d);
