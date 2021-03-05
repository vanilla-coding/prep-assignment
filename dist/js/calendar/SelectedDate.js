"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var SelectedDate = /*#__PURE__*/function () {
  function SelectedDate() {
    _classCallCheck(this, SelectedDate);
  }

  _createClass(SelectedDate, null, [{
    key: "getDateObject",
    value: function getDateObject() {
      return new Date(_classStaticPrivateFieldSpecGet(SelectedDate, SelectedDate, _date).valueOf());
    }
  }, {
    key: "getPreviousSelectedDate",
    value: function getPreviousSelectedDate() {
      return _classStaticPrivateFieldSpecGet(SelectedDate, SelectedDate, _previousSelectedDate);
    }
  }, {
    key: "setMonthOfDateObject",
    value: function setMonthOfDateObject(newMonthNumber) {
      _classStaticPrivateFieldSpecSet(SelectedDate, SelectedDate, _previousSelectedDate, new Date(_classStaticPrivateFieldSpecGet(SelectedDate, SelectedDate, _date).valueOf()));

      _classStaticPrivateFieldSpecGet(SelectedDate, SelectedDate, _date).setMonth(newMonthNumber);
    }
  }, {
    key: "setDateNumberOfDateObject",
    value: function setDateNumberOfDateObject(newDateNumber) {
      _classStaticPrivateFieldSpecSet(SelectedDate, SelectedDate, _previousSelectedDate, new Date(_classStaticPrivateFieldSpecGet(SelectedDate, SelectedDate, _date).valueOf()));

      _classStaticPrivateFieldSpecGet(SelectedDate, SelectedDate, _date).setDate(newDateNumber);
    }
  }, {
    key: "getMonth",
    value: function getMonth() {
      return _classStaticPrivateFieldSpecGet(SelectedDate, SelectedDate, _date).getMonth();
    }
  }, {
    key: "getDay",
    value: function getDay() {
      return _classStaticPrivateFieldSpecGet(SelectedDate, SelectedDate, _date).getDay();
    }
  }, {
    key: "getDateNumber",
    value: function getDateNumber() {
      return _classStaticPrivateFieldSpecGet(SelectedDate, SelectedDate, _date).getDate();
    }
  }, {
    key: "getFullYear",
    value: function getFullYear() {
      return _classStaticPrivateFieldSpecGet(SelectedDate, SelectedDate, _date).getFullYear();
    }
  }, {
    key: "isSelectedDateSameWithPreviousSelectedDate",
    value: function isSelectedDateSameWithPreviousSelectedDate() {
      return _classStaticPrivateFieldSpecGet(SelectedDate, SelectedDate, _date).getDate() === _classStaticPrivateFieldSpecGet(SelectedDate, SelectedDate, _previousSelectedDate).getDate() && _classStaticPrivateFieldSpecGet(SelectedDate, SelectedDate, _date).getMonth() === _classStaticPrivateFieldSpecGet(SelectedDate, SelectedDate, _previousSelectedDate).getMonth() && _classStaticPrivateFieldSpecGet(SelectedDate, SelectedDate, _date).getFullYear() === _classStaticPrivateFieldSpecGet(SelectedDate, SelectedDate, _previousSelectedDate).getFullYear();
    }
  }]);

  return SelectedDate;
}();

exports["default"] = SelectedDate;
var _date = {
  writable: true,
  value: new Date()
};
var _previousSelectedDate = {
  writable: true,
  value: null
};