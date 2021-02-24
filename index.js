let DAYS = ['SUN','MON','TUE','WED','THU','FRI','SAT'];

let MONTHS = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];

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

