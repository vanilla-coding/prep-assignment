"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Board = _interopRequireDefault(require("../board/Board"));

var _BoardRepository = _interopRequireDefault(require("../board/BoardRepository"));

var _Status = _interopRequireDefault(require("../board/Status"));

var _Task = _interopRequireDefault(require("../board/Task/Task"));

var _SelectedDate = _interopRequireDefault(require("./SelectedDate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

var _monthBelongTo = new WeakMap();

var _yearBelongTo = new WeakMap();

var _number = new WeakMap();

var _monthNumber = new WeakMap();

var _yearNumber = new WeakMap();

var _board = new WeakMap();

var DateOfCalendar = /*#__PURE__*/function () {
  function DateOfCalendar(dateNumber, monthObject, yearObject) {
    _classCallCheck(this, DateOfCalendar);

    _monthBelongTo.set(this, {
      writable: true,
      value: void 0
    });

    _yearBelongTo.set(this, {
      writable: true,
      value: void 0
    });

    _number.set(this, {
      writable: true,
      value: void 0
    });

    _monthNumber.set(this, {
      writable: true,
      value: void 0
    });

    _yearNumber.set(this, {
      writable: true,
      value: void 0
    });

    _board.set(this, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _monthBelongTo, monthObject);

    _classPrivateFieldSet(this, _yearBelongTo, yearObject);

    _classPrivateFieldSet(this, _number, dateNumber);

    _classPrivateFieldSet(this, _yearNumber, yearObject.getNumber());

    _classPrivateFieldSet(this, _monthNumber, monthObject.getNumber());

    _classPrivateFieldSet(this, _board, _BoardRepository["default"].createAndGetNewBoard(this));
  }

  _createClass(DateOfCalendar, [{
    key: "getDateNumber",
    value: function getDateNumber() {
      return _classPrivateFieldGet(this, _number);
    }
  }, {
    key: "getDateObject",
    value: function getDateObject() {
      return new Date(_classPrivateFieldGet(this, _yearNumber), _classPrivateFieldGet(this, _monthNumber), _classPrivateFieldGet(this, _number));
    }
  }, {
    key: "getNumberListOfDateObject",
    value: function getNumberListOfDateObject() {
      return [_classPrivateFieldGet(this, _yearNumber), _classPrivateFieldGet(this, _monthNumber), _classPrivateFieldGet(this, _number)];
    }
  }, {
    key: "getBoard",
    value: function getBoard() {
      return _classPrivateFieldGet(this, _board);
    }
  }, {
    key: "handleClicked",
    value: function handleClicked() {
      if (_Board["default"].getVisibility()) {
        if (_SelectedDate["default"].isDateSameWithPreviousDate(this)) {
          _Board["default"].deleteSelfElementByDateObject(this);

          return;
        }
      }

      var board = new _Board["default"](this);

      if (_Board["default"].isDateSameWithPreviousDate(this)) {
        _Board["default"]["delete"]();

        return;
      }

      board.display();
      return;
    }
  }]);

  return DateOfCalendar;
}();

exports["default"] = DateOfCalendar;