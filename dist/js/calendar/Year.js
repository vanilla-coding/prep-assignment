"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Month = _interopRequireDefault(require("./Month"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

var _number = new WeakMap();

var _monthRepository = new WeakMap();

var _TOTAL_MONTH_LENGTH = new WeakMap();

var Year = /*#__PURE__*/function () {
  function Year(yearNumber) {
    _classCallCheck(this, Year);

    _number.set(this, {
      writable: true,
      value: void 0
    });

    _monthRepository.set(this, {
      writable: true,
      value: []
    });

    _TOTAL_MONTH_LENGTH.set(this, {
      writable: true,
      value: 12
    });

    _classPrivateFieldSet(this, _number, yearNumber);

    this.addMonthsToRepository();
  }

  _createClass(Year, [{
    key: "addMonthsToRepository",
    value: function addMonthsToRepository() {
      for (var i = 0; i < _classPrivateFieldGet(this, _TOTAL_MONTH_LENGTH); i++) {
        var newMonth = new _Month["default"](this, i);

        _classPrivateFieldGet(this, _monthRepository).push(newMonth);
      }
    }
  }, {
    key: "getMonth",
    value: function getMonth(dateObject) {
      return _classPrivateFieldGet(this, _monthRepository).find(function (month) {
        return month.getYearNumber() === dateObject.getFullYear() && month.getNumber() === dateObject.getMonth();
      });
    }
  }, {
    key: "getNumber",
    value: function getNumber() {
      return _classPrivateFieldGet(this, _number);
    }
  }]);

  return Year;
}();

exports["default"] = Year;