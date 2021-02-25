"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _day = require("./day");

var _Month = _interopRequireDefault(require("./Month"));

var _SelectedDate = _interopRequireDefault(require("./SelectedDate"));

var _YearRepository = _interopRequireDefault(require("./YearRepository"));

var _calendarEventHandler = require("../calendarEventHandler");

var _CalendarController = _interopRequireDefault(require("./CalendarController"));

var _element = require("../element");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classStaticPrivateMethodGet(receiver, classConstructor, method) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } return method; }

var CalendarViewer = /*#__PURE__*/function () {
  function CalendarViewer() {
    _classCallCheck(this, CalendarViewer);
  }

  _createClass(CalendarViewer, null, [{
    key: "display",
    value: function display() {
      _classStaticPrivateMethodGet(CalendarViewer, CalendarViewer, _displayHeader).call(CalendarViewer);

      _classStaticPrivateMethodGet(CalendarViewer, CalendarViewer, _displayToday).call(CalendarViewer);

      _classStaticPrivateMethodGet(CalendarViewer, CalendarViewer, _displaySelectedCalendar).call(CalendarViewer);
    }
  }]);

  return CalendarViewer;
}();

exports["default"] = CalendarViewer;

var _createAndAddNotificationOnDate = function _createAndAddNotificationOnDate(dateOfCalendarInstance, dateElement) {
  var taskLength = dateOfCalendarInstance.getTaskLength();

  if (taskLength > 0) {
    var notification = document.createElement("div");
    notification.classList.add("task-notification");
    notification.textContent = taskLength;
    dateElement.appendChild(notification);
  }
};

var _printCalendarDates = function _printCalendarDates() {
  var thisYear = _YearRepository["default"].getYear(_SelectedDate["default"].getDateObject());

  var thisMonth = thisYear.getMonth(_SelectedDate["default"].getDateObject());
  var dayOfFirstDate = thisMonth.getDayOfFirstDate();
  var lastDate = thisMonth.getLastDate();

  for (var i = 1, indexForDate = dayOfFirstDate; i <= lastDate; i++, indexForDate++) {
    var dateElement = _element.allDatesInCalendar[indexForDate];
    var dateOfCalendarInstance = thisMonth.getDateByNumber(i);
    dateElement.textContent = i;
    dateElement.classList.add("date-inside");

    if (_CalendarController["default"].isDateToday(dateOfCalendarInstance.getDate())) {
      dateElement.style.color = "red";
      dateElement.style.fontWeight = 1000;
    } else {
      dateElement.style.color = "black";
    }

    var clickCallBack = (0, _calendarEventHandler.handleDateClick)(dateOfCalendarInstance, dateElement);
    dateElement.addEventListener("click", clickCallBack);

    _classStaticPrivateMethodGet(CalendarViewer, CalendarViewer, _createAndAddNotificationOnDate).call(CalendarViewer, dateOfCalendarInstance, dateElement);

    _classStaticPrivateFieldSpecGet(this, CalendarViewer, _dateEventListenerRepository)[indexForDate] = clickCallBack; // 이벤트 리스너 지우기 위해 따로 저장
  }
};

var _resetCalendarDates = function _resetCalendarDates() {
  var totalCalendarCells = _element.allDatesInCalendar.length;

  for (var i = 0; i < totalCalendarCells; i++) {
    _element.allDatesInCalendar[i].textContent = "";
    _element.allDatesInCalendar[i].style.fontWeight = "normal";
    _element.allDatesInCalendar[i].className = "";

    _element.allDatesInCalendar[i].removeEventListener("click", _classStaticPrivateFieldSpecGet(this, CalendarViewer, _dateEventListenerRepository)[i]);
  }
};

var _displaySelectedDates = function _displaySelectedDates() {
  if (!_YearRepository["default"].hasYearInRepository(_SelectedDate["default"].getFullYear())) {
    _YearRepository["default"].createNewYear(_SelectedDate["default"]);
  }

  _classStaticPrivateMethodGet(this, CalendarViewer, _resetCalendarDates).call(this);

  _classStaticPrivateMethodGet(this, CalendarViewer, _printCalendarDates).call(this);
};

var _displaySelectedDateText = function _displaySelectedDateText() {
  _element.selectedDayText.textContent = _day.DAYS[_SelectedDate["default"].getDay()];
  _element.selectedDateText.textContent = _SelectedDate["default"].getDate();
  _element.selectedMonthText.textContent = _Month["default"].getNames()[_SelectedDate["default"].getMonth()];
  _element.selectedYearText.textContent = _SelectedDate["default"].getFullYear();
};

var _displaySelectedCalendar = function _displaySelectedCalendar() {
  _classStaticPrivateMethodGet(this, CalendarViewer, _displaySelectedDateText).call(this);

  _classStaticPrivateMethodGet(this, CalendarViewer, _displaySelectedDates).call(this);
};

var _displayToday = function _displayToday() {
  var now = new Date();
  document.getElementById("jsTodayDay").textContent = _day.DAYS[now.getDay()];
  document.getElementById("jsTodayDate").textContent = now.getDate();
  document.getElementById("jsTodayMonth").textContent = _Month["default"].getNames()[now.getMonth()];
  document.getElementById("jsTodayYear").textContent = now.getFullYear();
};

var _displayHeader = function _displayHeader() {
  var header = document.querySelectorAll("table tbody tr th");
  var i = 0;
  header.forEach(function (th) {
    th.textContent = _day.DAYS[i++];
  });
};

var _dateEventListenerRepository = {
  writable: true,
  value: {}
};