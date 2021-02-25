"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Year = _interopRequireDefault(require("./Year"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classStaticPrivateMethodGet(receiver, classConstructor, method) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } return method; }

var YearRepository = /*#__PURE__*/function () {
  function YearRepository() {
    _classCallCheck(this, YearRepository);
  }

  _createClass(YearRepository, null, [{
    key: "createNewYear",
    value: function createNewYear(dateObject) {
      var newYear = new _Year["default"](dateObject.getFullYear());

      _classStaticPrivateMethodGet(YearRepository, YearRepository, _addYearToRepository).call(YearRepository, newYear);
    }
  }, {
    key: "hasYearInRepository",
    value: function hasYearInRepository(yearNumber) {
      return _classStaticPrivateFieldSpecGet(YearRepository, YearRepository, _years).filter(function (yearObject) {
        return yearObject.getNumber() === yearNumber;
      }).length !== 0;
    }
  }, {
    key: "getYear",
    value: function getYear(dateObject) {
      return _classStaticPrivateFieldSpecGet(YearRepository, YearRepository, _years).find(function (yearObject) {
        return yearObject.getNumber() === dateObject.getFullYear();
      });
    }
  }]);

  return YearRepository;
}();

exports["default"] = YearRepository;

var _addYearToRepository = function _addYearToRepository(newYear) {
  _classStaticPrivateFieldSpecGet(YearRepository, YearRepository, _years).push(newYear);
};

var _years = {
  writable: true,
  value: []
};