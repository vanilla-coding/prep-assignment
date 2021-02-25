"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _calendarEventHandler = require("../calendarEventHandler");

var _CalendarViewer = _interopRequireDefault(require("./CalendarViewer"));

var _Now = _interopRequireDefault(require("./Now"));

var _element = require("../element");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

var _initialAddingEventListner = new WeakSet();

var CalendarController = /*#__PURE__*/function () {
  function CalendarController() {
    _classCallCheck(this, CalendarController);

    _initialAddingEventListner.add(this);

    _CalendarViewer["default"].display();

    _classPrivateMethodGet(this, _initialAddingEventListner, _initialAddingEventListner2).call(this);
  }

  _createClass(CalendarController, null, [{
    key: "isDateToday",
    value: function isDateToday(dateObject) {
      var now = _Now["default"].getDate();

      return dateObject.getDate() === now.getDate() && dateObject.getMonth() === now.getMonth() && dateObject.getFullYear() === now.getFullYear();
    }
  }]);

  return CalendarController;
}();

exports["default"] = CalendarController;

var _initialAddingEventListner2 = function _initialAddingEventListner2() {
  _element.previousMonthButton.addEventListener("click", _calendarEventHandler.handleMoveMonthButton);

  _element.nextMonthButton.addEventListener("click", _calendarEventHandler.handleMoveMonthButton);
};