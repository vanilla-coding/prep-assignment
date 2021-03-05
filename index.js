var dayTitle = document.querySelector(".t-day"),
	dateTitle = document.querySelector(".t-date"),
	monthTitle = document.querySelector(".month-year")
var today = new Date();
var days = [
	'SUN',
	'MON',
	'TUE',
	'WED',
	'THU',
	'FRI',
	'SAT'
]
var months = [
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
]
var currentDay = today.getDay();
dayTitle.innerText = `${days[currentDay]}`;
var currentDate = today.getDate();
dateTitle.innerText = `${currentDate}`;
var currentMonth = today.getMonth();
var currentYear = today.getFullYear();
monthTitle.innerText = `${months[currentMonth]} ${currentYear}`;

var tableDates = document.querySelectorAll("td");
function makeCalendar() {
	var lastMonthEnd = new Date(currentYear, currentMonth + 1, 0),
		lastDay = lastMonthEnd.getDay();
	for (i = 0; i <= lastDay; i++) {
		tableDates[i].innerText = "";
	}
	var howManyDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
	for (i = 1; i <= howManyDays[currentMonth]; i++) {
		tableDates[i].innerText = i;
	}
}
makeCalendar();
tableDates[currentDate].style.color = "red";

//날짜를 클릭했을 때 상단의 요일 및 날짜 변경을 아래와 같이 구현해보려고 했는데 작동이 안 됩니다. 이유를 잘 모르겠습니다ㅠㅠ
function handleClick(clickedDay) {
	if (clickedDay < 7) {
		dateTitle.innerText = days[clickedDay];
	} else {
		dateTitle.innerText = days[clickedDay % 7];
	}
}
function changeClickedDay() {
	tableDates[clickedDay].addEventListener("click", handleClick);
}
changeClickedDay();

//버튼도 이런 식으로 구현해보려고 했는데 작동이 안되네요.. 흑
var prevButton = document.querySelector(".prevMonth-Button"),
	nextButton = document.querySelector(".nextMonth-Button");
function prevMonth() {
	today.setDate(0);
	currentMonth = today.getMonth();
	currentYear = today.getFullYear();
	makeCalendar();
}
prevButton.addEventListener("click", prevMonth);