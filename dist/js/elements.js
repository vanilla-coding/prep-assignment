"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$calendar = exports.$taskContentTextInput = exports.$differenceWithClickedDate = exports.$nextMonthButton = exports.$previousMonthButton = exports.$allDatesInCalendar = exports.$header = exports.$selectedYearText = exports.$selectedDayText = exports.$selectedMonthText = exports.$selectedDateText = exports.$todayYearText = exports.$todayMonthText = exports.$todayDateText = exports.$todayDayText = void 0;
var $todayDayText = document.getElementById("jsTodayDay");
exports.$todayDayText = $todayDayText;
var $todayDateText = document.getElementById("jsTodayDate");
exports.$todayDateText = $todayDateText;
var $todayMonthText = document.getElementById("jsTodayMonth");
exports.$todayMonthText = $todayMonthText;
var $todayYearText = document.getElementById("jsTodayYear");
exports.$todayYearText = $todayYearText;
var $selectedDateText = document.getElementById("jsSelectedDateText");
exports.$selectedDateText = $selectedDateText;
var $selectedMonthText = document.getElementById("jsSelectedMonthText");
exports.$selectedMonthText = $selectedMonthText;
var $selectedDayText = document.getElementById("jsSelectedDayText");
exports.$selectedDayText = $selectedDayText;
var $selectedYearText = document.getElementById("jsSelectedYearText");
exports.$selectedYearText = $selectedYearText;
var $header = document.querySelectorAll("table tbody tr th");
exports.$header = $header;
var $allDatesInCalendar = document.querySelectorAll("#jsCalendarTable > tbody td");
exports.$allDatesInCalendar = $allDatesInCalendar;
var $previousMonthButton = document.getElementById("jsPreviousMonthButton");
exports.$previousMonthButton = $previousMonthButton;
var $nextMonthButton = document.getElementById("jsNextMonthButton");
exports.$nextMonthButton = $nextMonthButton;
var $differenceWithClickedDate = document.getElementById("jsDifferenceWithClickedDate");
exports.$differenceWithClickedDate = $differenceWithClickedDate;
var $taskContentTextInput = document.getElementById("jsTaskContentTextInput");
exports.$taskContentTextInput = $taskContentTextInput;
var $calendar = document.querySelector(".calendar");
exports.$calendar = $calendar;