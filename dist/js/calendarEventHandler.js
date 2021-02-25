"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleDateClick = exports.previousClickedDateObject = exports.handleMoveMonthButton = void 0;

var _CalendarController = _interopRequireDefault(require("./calendar/CalendarController"));

var _CalendarViewer = _interopRequireDefault(require("./calendar/CalendarViewer"));

var _Now = _interopRequireDefault(require("./calendar/Now"));

var _SelectedDate = _interopRequireDefault(require("./calendar/SelectedDate"));

var _element = require("./element");

var _boardEventHandler = require("./boardEventHandler");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var handleMoveMonthButton = function handleMoveMonthButton(event) {
  var clickedButton = event.target.classList[1];
  (0, _boardEventHandler.removeBoard)();

  if (clickedButton === "previous-month-button") {
    _SelectedDate["default"].setMonthOfDateObject(_SelectedDate["default"].getMonth() - 1);
  }

  if (clickedButton === "next-month-button") {
    _SelectedDate["default"].setMonthOfDateObject(_SelectedDate["default"].getMonth() + 1);
  }

  _SelectedDate["default"].setDateOfDateObject(1);

  _element.differenceWithClickedDate.textContent = "";

  _CalendarViewer["default"].display();
};

exports.handleMoveMonthButton = handleMoveMonthButton;
var previousClickedDateObject;
exports.previousClickedDateObject = previousClickedDateObject;

var handleDateClick = function handleDateClick(dateOfCalendar, dateElement) {
  return function () {
    exports.previousClickedDateObject = previousClickedDateObject = _SelectedDate["default"].getDateObject();

    _SelectedDate["default"].setDateOfDateObject(dateOfCalendar.getNumber());

    handleTodayClick(dateOfCalendar);
    handleClickDifferentDate(dateOfCalendar, dateElement);
    (0, _boardEventHandler.handleBoardViewWhenDateClick)(dateOfCalendar);
  };
};

exports.handleDateClick = handleDateClick;

var handleTodayClick = function handleTodayClick(dateOfCalendar) {
  if (_CalendarController["default"].isDateToday(dateOfCalendar.getDate())) {
    _CalendarViewer["default"].display();

    _element.differenceWithClickedDate.textContent = "Today";
    return;
  }
};

var handleClickDifferentDate = function handleClickDifferentDate(dateOfCalendar, dateElement) {
  var now = _Now["default"].getDate();

  var ONE_DAY = 1000 * 60 * 60 * 24;
  var dateDifferenceFromNow = Math.ceil((dateOfCalendar.getDate() - now) / ONE_DAY);

  _CalendarViewer["default"].display();

  if (dateDifferenceFromNow) {
    displayClickedResult(dateElement, dateDifferenceFromNow);
  }
};

var displayClickedResult = function displayClickedResult(dateElement, dateDifferenceFromNow) {
  dateElement.style.color = "blue";
  dateElement.style.fontWeight = 1000;
  _element.differenceWithClickedDate.textContent = "".concat(Math.abs(dateDifferenceFromNow) < 2 ? "".concat(dateDifferenceFromNow, " day") : "".concat(dateDifferenceFromNow, " days"), " difference from Today");
};