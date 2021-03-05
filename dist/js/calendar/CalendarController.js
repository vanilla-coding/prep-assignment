"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _TaskController = _interopRequireDefault(require("../board/Task/TaskController"));

var _elements = require("../elements");

var _calendarElementEventHandler = require("./calendarElementEventHandler");

var _day = require("./day");

var _Month = _interopRequireDefault(require("./Month"));

var _Now = _interopRequireDefault(require("./Now"));

var _SelectedDate = _interopRequireDefault(require("./SelectedDate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

var _calendar = new WeakMap();

var _dateOfCalendarClickEventListenerRepository = new WeakMap();

var _addEventListenerToMoveButton = new WeakSet();

var _printHeader = new WeakSet();

var _printTodayText = new WeakSet();

var _displayDates = new WeakSet();

var _resetDates = new WeakSet();

var _printDates = new WeakSet();

var _createAndAddNotificationOnDate = new WeakSet();

var CalendarController = /*#__PURE__*/function () {
  function CalendarController(calendar) {
    _classCallCheck(this, CalendarController);

    _createAndAddNotificationOnDate.add(this);

    _printDates.add(this);

    _resetDates.add(this);

    _displayDates.add(this);

    _printTodayText.add(this);

    _printHeader.add(this);

    _addEventListenerToMoveButton.add(this);

    _calendar.set(this, {
      writable: true,
      value: void 0
    });

    _dateOfCalendarClickEventListenerRepository.set(this, {
      writable: true,
      value: {}
    });

    _defineProperty(this, "CLASSNAME_DATE_INSIDE", "date-inside");

    _defineProperty(this, "CLASSNAME_IS_TODAY", "isToday");

    _defineProperty(this, "CLASSNAME_IS_NOT_TODAY", "isNotToday");

    _defineProperty(this, "CLASSNAME_TASK_NOTIFICATION", "task-notification");

    _classPrivateFieldSet(this, _calendar, calendar);

    _TaskController["default"].setCalendarController(this);
  }

  _createClass(CalendarController, [{
    key: "initialize",
    value: function initialize() {
      _classPrivateMethodGet(this, _addEventListenerToMoveButton, _addEventListenerToMoveButton2).call(this);

      _classPrivateMethodGet(this, _printHeader, _printHeader2).call(this);

      this.displayCalendarContents();
      this.displaySelectedDateText();
    }
  }, {
    key: "displayCalendarContents",
    value: function displayCalendarContents() {
      if (!_classPrivateFieldGet(this, _calendar).checkYearExistenceByDateObject(_SelectedDate["default"].getDateObject())) {
        _classPrivateFieldGet(this, _calendar).createNewYearByDateObject(_SelectedDate["default"].getDateObject());
      }

      _classPrivateMethodGet(this, _printTodayText, _printTodayText2).call(this);

      _classPrivateMethodGet(this, _displayDates, _displayDates2).call(this);
    }
  }, {
    key: "displaySelectedDateText",
    value: function displaySelectedDateText() {
      _elements.$selectedDayText.textContent = _day.DAYS[_SelectedDate["default"].getDay()];
      _elements.$selectedDateText.textContent = _SelectedDate["default"].getDateNumber();
      _elements.$selectedMonthText.textContent = _Month["default"].getNames()[_SelectedDate["default"].getMonth()];
      _elements.$selectedYearText.textContent = _SelectedDate["default"].getFullYear();
    }
  }]);

  return CalendarController;
}();

exports["default"] = CalendarController;

var _addEventListenerToMoveButton2 = function _addEventListenerToMoveButton2() {
  _elements.$previousMonthButton.addEventListener("click", (0, _calendarElementEventHandler.handleMoveMonthButton)(this));

  _elements.$nextMonthButton.addEventListener("click", (0, _calendarElementEventHandler.handleMoveMonthButton)(this));
};

var _printHeader2 = function _printHeader2() {
  var i = 0;

  _elements.$header.forEach(function (th) {
    th.textContent = _day.DAYS[i++];
  });
};

var _printTodayText2 = function _printTodayText2() {
  var now = _Now["default"].getDateObject();

  _elements.$todayDayText.textContent = _day.DAYS[now.getDay()];
  _elements.$todayDateText.textContent = now.getDate();
  _elements.$todayMonthText.textContent = _Month["default"].getNames()[now.getMonth()];
  _elements.$todayYearText.textContent = now.getFullYear();
};

var _displayDates2 = function _displayDates2() {
  _classPrivateMethodGet(this, _resetDates, _resetDates2).call(this);

  _classPrivateMethodGet(this, _printDates, _printDates2).call(this);
};

var _resetDates2 = function _resetDates2() {
  var totalCalendarCells = _elements.$allDatesInCalendar.length;

  for (var i = 0; i < totalCalendarCells; i++) {
    _elements.$allDatesInCalendar[i].textContent = "";
    _elements.$allDatesInCalendar[i].className = "";

    _elements.$allDatesInCalendar[i].removeEventListener("click", _classPrivateFieldGet(this, _dateOfCalendarClickEventListenerRepository)[i]);
  }
};

var _printDates2 = function _printDates2() {
  var _classPrivateFieldGet2 = _classPrivateFieldGet(this, _calendar).getThisMonthInformation(),
      thisMonth = _classPrivateFieldGet2.thisMonth,
      dayOfFirstDate = _classPrivateFieldGet2.dayOfFirstDate,
      lastDateNumber = _classPrivateFieldGet2.lastDateNumber;

  for (var i = 1, indexForDate = dayOfFirstDate; i <= lastDateNumber; i++, indexForDate++) {
    var $dateElement = _elements.$allDatesInCalendar[indexForDate];
    var dateOfCalendar = thisMonth.getDateOfCalendarByNumber(i);
    $dateElement.textContent = i;
    $dateElement.classList.add(this.CLASSNAME_DATE_INSIDE);

    if (_Now["default"].isDateToday(dateOfCalendar.getDateObject())) {
      $dateElement.classList.add(this.CLASSNAME_IS_TODAY);
    } else {
      $dateElement.classList.add(this.CLASSNAME_IS_NOT_TODAY);
    }

    var handleClickDateOfCalendar = (0, _calendarElementEventHandler.createHandleClickDateOfCalendar)(dateOfCalendar, $dateElement, this);
    $dateElement.addEventListener("click", handleClickDateOfCalendar);
    _classPrivateFieldGet(this, _dateOfCalendarClickEventListenerRepository)[indexForDate] = handleClickDateOfCalendar;

    _classPrivateMethodGet(this, _createAndAddNotificationOnDate, _createAndAddNotificationOnDate2).call(this, dateOfCalendar, $dateElement);
  }
};

var _createAndAddNotificationOnDate2 = function _createAndAddNotificationOnDate2(dateOfCalendar, $dateElement) {
  var taskLength = dateOfCalendar.getBoard().getTaskLength();

  if (taskLength > 0) {
    var $notification = document.createElement("div");
    $notification.classList.add(this.CLASSNAME_TASK_NOTIFICATION);
    $notification.textContent = taskLength;
    $dateElement.appendChild($notification);
  }
};