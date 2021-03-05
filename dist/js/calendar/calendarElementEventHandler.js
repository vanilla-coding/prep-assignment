"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createHandleClickDateOfCalendar = exports.handleMoveMonthButton = void 0;

var _SelectedDate = _interopRequireDefault(require("./SelectedDate"));

var _elements = require("../elements");

var _Now = _interopRequireDefault(require("./Now"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CLASSNAME_PREVIOUS_MONTH_BUTTON = "previous-month-button";
var CLASSNAME_NEXT_MONTH_BUTTON = "next-month-button";

var handleMoveMonthButton = function handleMoveMonthButton(calendarController, event) {
  return function (event) {
    var clickedButton = event.target.classList[1];

    if (clickedButton === CLASSNAME_PREVIOUS_MONTH_BUTTON) {
      _SelectedDate["default"].setMonthOfDateObject(_SelectedDate["default"].getMonth() - 1);
    }

    if (clickedButton === CLASSNAME_NEXT_MONTH_BUTTON) {
      _SelectedDate["default"].setMonthOfDateObject(_SelectedDate["default"].getMonth() + 1);
    }

    _SelectedDate["default"].setDateNumberOfDateObject(1);

    _elements.$differenceWithClickedDate.textContent = "";
    calendarController.displaySelectedDateText();
    calendarController.displayCalendarContents();
  };
};

exports.handleMoveMonthButton = handleMoveMonthButton;
var SELECTED_DATE_TEXT_TODAY = "Today";
var CLASSNAME_CLICKED_DATE = "dateClicked";

var createHandleClickDateOfCalendar = function createHandleClickDateOfCalendar(dateOfCalendar, $dateElement, calendarController) {
  return function () {
    _SelectedDate["default"].setDateNumberOfDateObject(dateOfCalendar.getDateNumber());

    calendarController.displaySelectedDateText();
    var dateDifferenceFromSelectedDateToNow = calculateDateDifferenceFromSelectedDateToNow(dateOfCalendar);

    if (_Now["default"].isDateToday(_SelectedDate["default"].getDateObject())) {
      _elements.$differenceWithClickedDate.textContent = SELECTED_DATE_TEXT_TODAY;
    } else {
      printDateDifference(dateDifferenceFromSelectedDateToNow);
    }

    calendarController.displayCalendarContents();
    $dateElement.classList.add(CLASSNAME_CLICKED_DATE);
    var board = dateOfCalendar.getBoard();

    if (board.getVisibility()) {
      board.close();
    } else {
      board.display();
    }
  };
};

exports.createHandleClickDateOfCalendar = createHandleClickDateOfCalendar;

var calculateDateDifferenceFromSelectedDateToNow = function calculateDateDifferenceFromSelectedDateToNow(dateOfCalendar) {
  var now = _Now["default"].getDateObject();

  var ONE_DAY = 1000 * 60 * 60 * 24;
  return Math.ceil((dateOfCalendar.getDateObject() - now) / ONE_DAY);
};

var printDateDifference = function printDateDifference(dateDifferenceFromSelectedDateToNow) {
  _elements.$differenceWithClickedDate.textContent = "".concat(Math.abs(dateDifferenceFromSelectedDateToNow) < 2 ? "".concat(dateDifferenceFromSelectedDateToNow, " day") : "".concat(dateDifferenceFromSelectedDateToNow, " days"), " difference from Today");
};