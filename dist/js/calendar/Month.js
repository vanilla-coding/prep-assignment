"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _DateOfCalendar = _interopRequireDefault(require("./DateOfCalendar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

var _dateRepository = new WeakMap();

var _yearNumber = new WeakMap();

var _yearBelongTo = new WeakMap();

var _number = new WeakMap();

var _monthName = new WeakMap();

var _dayOfFirstDate = new WeakMap();

var _lastDate = new WeakMap();

var _addDatesToRepository = new WeakSet();

var Month = /*#__PURE__*/function () {
  // 첫 날의 요일
  function Month(yearObject, monthNumber) {
    _classCallCheck(this, Month);

    _addDatesToRepository.add(this);

    _dateRepository.set(this, {
      writable: true,
      value: []
    });

    _yearNumber.set(this, {
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

    _monthName.set(this, {
      writable: true,
      value: void 0
    });

    _dayOfFirstDate.set(this, {
      writable: true,
      value: void 0
    });

    _lastDate.set(this, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _yearBelongTo, yearObject);

    _classPrivateFieldSet(this, _yearNumber, yearObject.getNumber());

    _classPrivateFieldSet(this, _number, monthNumber);

    _classPrivateFieldSet(this, _monthName, _classStaticPrivateFieldSpecGet(Month, Month, _NAMES)[_classPrivateFieldGet(this, _number)]);

    _classPrivateFieldSet(this, _dayOfFirstDate, new Date(_classPrivateFieldGet(this, _yearNumber), monthNumber, 1).getDay());

    _classPrivateFieldSet(this, _lastDate, new Date(_classPrivateFieldGet(this, _yearNumber), monthNumber + 1, 0).getDate());

    _classPrivateMethodGet(this, _addDatesToRepository, _addDatesToRepository2).call(this);
  }

  _createClass(Month, [{
    key: "getDayOfFirstDate",
    value: function getDayOfFirstDate() {
      return _classPrivateFieldGet(this, _dayOfFirstDate);
    }
  }, {
    key: "getLastDateNumber",
    value: function getLastDateNumber() {
      return _classPrivateFieldGet(this, _lastDate);
    }
  }, {
    key: "getNumber",
    value: function getNumber() {
      return _classPrivateFieldGet(this, _number);
    }
  }, {
    key: "getYearNumber",
    value: function getYearNumber() {
      return _classPrivateFieldGet(this, _yearNumber);
    }
  }, {
    key: "getDateOfCalendarByNumber",
    value: function getDateOfCalendarByNumber(dateNumber) {
      return _classPrivateFieldGet(this, _dateRepository).find(function (dateOfCalendar) {
        return dateOfCalendar.getDateNumber() === dateNumber;
      });
    }
  }], [{
    key: "getNames",
    value: function getNames() {
      return _classStaticPrivateFieldSpecGet(this, Month, _NAMES);
    }
  }]);

  return Month;
}();

exports["default"] = Month;
var _NAMES = {
  writable: true,
  value: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
};

var _addDatesToRepository2 = function _addDatesToRepository2() {
  for (var i = 1; i <= _classPrivateFieldGet(this, _lastDate); i++) {
    var newDate = new _DateOfCalendar["default"](i, this, _classPrivateFieldGet(this, _yearBelongTo));

    _classPrivateFieldGet(this, _dateRepository).push(newDate);
  }
};