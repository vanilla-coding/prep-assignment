"use strict";

var _Calendar = _interopRequireDefault(require("./calendar/Calendar"));

var _CalendarController = _interopRequireDefault(require("./calendar/CalendarController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var calendar = new _Calendar["default"]();
var calendarController = new _CalendarController["default"](calendar);
calendarController.initialize();