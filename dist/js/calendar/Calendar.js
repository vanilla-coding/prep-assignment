"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Now = _interopRequireDefault(require("./Now"));

var _SelectedDate = _interopRequireDefault(require("./SelectedDate"));

var _YearRepository = _interopRequireDefault(require("./YearRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

var _yearRepository = new WeakMap();

var _getOrCreateYearRepository = new WeakSet();

var Calendar = /*#__PURE__*/function () {
  function Calendar() {
    _classCallCheck(this, Calendar);

    _getOrCreateYearRepository.add(this);

    _yearRepository.set(this, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _yearRepository, _classPrivateMethodGet(this, _getOrCreateYearRepository, _getOrCreateYearRepository2).call(this));
  }

  _createClass(Calendar, [{
    key: "getThisMonthInformation",
    value: function getThisMonthInformation() {
      var selectedDate = _SelectedDate["default"].getDateObject();

      var thisYear = _YearRepository["default"].getYearByDateObject(selectedDate);

      var thisMonth = thisYear.getMonth(selectedDate);
      var dayOfFirstDate = thisMonth.getDayOfFirstDate();
      var lastDateNumber = thisMonth.getLastDateNumber();
      return {
        thisMonth: thisMonth,
        dayOfFirstDate: dayOfFirstDate,
        lastDateNumber: lastDateNumber
      };
    }
  }, {
    key: "checkYearExistenceByDateObject",
    value: function checkYearExistenceByDateObject(dateObject) {
      return _YearRepository["default"].hasYearInRepository(dateObject.getFullYear());
    }
  }, {
    key: "createNewYearByDateObject",
    value: function createNewYearByDateObject(dateObject) {
      _YearRepository["default"].createNewYearByDateObject(dateObject);
    }
  }]);

  return Calendar;
}();

exports["default"] = Calendar;

var _getOrCreateYearRepository2 = function _getOrCreateYearRepository2() {
  if (!_YearRepository["default"].hasYearInRepository()) {
    _YearRepository["default"].createNewYearByDateObject(_Now["default"].getDateObject());
  }

  return _YearRepository["default"].getYearRepository();
};