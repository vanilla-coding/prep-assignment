var DAYS = [ 'SUN','MON', 'TUE', 'WED','THU', 'FRI', 'SAT'];
var MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

var calendarDates = document.querySelectorAll('tbody td');
var currentDay = document.querySelectorAll('.current-day p');

var d = new Date();
var nowYear = d.getFullYear();
var nowMonth = d.getMonth();
var nowDate = d.getDate();
var nowDay = d.getDay();
var firstDay = new Date(nowYear, nowMonth, 1);
var lastDay = new Date(nowYear, nowMonth + 1, 0);
var markToday;

function addZero(num) {
    if(num < 10) {
        return ('0' + num);
    }
    else {
        return num;
    }
}

function displayCalendar(){
    let trtd = '';
    let startCount;
    let countDay = 0;
    for (let i = 0; i < 6; i++) {
      trtd += '<tr>';
      for (let j = 0; j < 7; j++) {
        if (i === 0 && !startCount && j === firstDay.getDay()) {
          startCount = 1;
        }
        if (!startCount) {
          trtd += '<td>'
        } else {
          let fullDate = nowYear + '.' + init.addZero(nowMonth + 1) + '.' + init.addZero(countDay + 1);
          trtd += '<td class="day';
          trtd += (markToday && markToday === countDay + 1) ? ' today" ' : '"';
          trtd += ` data-date="${countDay + 1}" data-fdate="${fullDate}">`;
        }
        trtd += (startCount) ? ++countDay : '';
        if (countDay === lastDay.getDate()) { 
          startCount = 0; 
        }
        trtd += '</td>';
      }
      trtd += '</tr>';
    }
    $calBody.innerHTML = trtd;
}
