var DAYS = [
    'SUN',
    'MON',
    'TUE',
    'WED',
    'THU',
    'FRI',
    'SAT'
  ];
  
  var MONTHS = [
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
  
  var calendarDates = document.querySelectorAll('tbody td');
  var currentDay = document.querySelectorAll('.current-day p');
  
  function displayCalendar(today) {
    var month = today.getMonth();
    var year = today.getFullYear();
  
    if (month !== nowMonth || year !== nowYear) {
      today.setDate(1);
    }
  
    var date = today.getDate();
    var day = today.getDay();
  
    var lastDate = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  
    var currentMonth = document.querySelector('.current-month');
  
    currentMonth.textContent = MONTHS[month] + ' ' + year;
  
    var dayIndex = day;
  
    if (month === nowMonth && year === nowYear) {
      currentDay[0].textContent = DAYS[nowDay];
      currentDay[1].textContent = nowDate;
    } else {
      currentDay[0].textContent = DAYS[day];
      currentDay[1].textContent = 1;
    }
  
    for (var i = 0; i < calendarDates.length; i++) {
      calendarDates[i].textContent = '';
    }
  
    for (var i = 1; i <= lastDate; i++) {
      calendarDates[dayIndex].textContent = i;
      calendarDates[dayIndex].style.color = 'black';
  
      if (i === date && year === nowYear && month === nowMonth) {
        calendarDates[dayIndex].style.color = 'red';
      }
  
      updateSelectedDay(dayIndex, day);
  
      dayIndex++;
    }
  }
  
  function updateSelectedDay(currentIndex, firstDay) {
    calendarDates[currentIndex].addEventListener('click', function (ev) {
      if (!ev.target.textContent) {
        return;
      }
  
      if (currentIndex < 7) {
        currentDay[0].textContent = DAYS[currentIndex];
      } else {
        currentDay[0].textContent = DAYS[currentIndex % 7];
      }
  
      var newIndex = currentIndex - firstDay;
      currentDay[1].textContent = newIndex + 1;
    });
  }
  
  var prevButton = document.querySelector('.button.prev');
  var nextButton = document.querySelector('.button.next');
  
  prevButton.addEventListener('click', function () {
    var currentMonth = d.getMonth();
    d.setMonth(currentMonth - 1);
  
    if (d.getMonth() === nowMonth && d.getFullYear() === nowYear) {
      d = new Date();
    }
  
    displayCalendar(d);
  });
  
  nextButton.addEventListener('click', function () {
    var currentMonth = d.getMonth();
    d.setMonth(currentMonth + 1);
  
    if (d.getMonth() === nowMonth && d.getFullYear() === nowYear) {
      d = new Date();
    }
  
    displayCalendar(d);
  });
  
  var d = new Date();
  var nowYear = d.getFullYear();
  var nowMonth = d.getMonth();
  var nowDate = d.getDate();
  var nowDay = d.getDay();
  
  displayCalendar(d);
  
