"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Status = _interopRequireDefault(require("../board/Status"));

var _Task = _interopRequireDefault(require("../board/Task"));

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

var _taskRepository = new WeakMap();

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

    _taskRepository.set(this, {
      writable: true,
      value: []
    });

    _classPrivateFieldSet(this, _monthBelongTo, monthObject);

    _classPrivateFieldSet(this, _yearBelongTo, yearObject);

    _classPrivateFieldSet(this, _number, dateNumber);

    _classPrivateFieldSet(this, _yearNumber, yearObject.getNumber());

    _classPrivateFieldSet(this, _monthNumber, monthObject.getNumber());
  }

  _createClass(DateOfCalendar, [{
    key: "getNumber",
    value: function getNumber() {
      return _classPrivateFieldGet(this, _number);
    }
  }, {
    key: "getDate",
    value: function getDate() {
      return new Date(_classPrivateFieldGet(this, _yearNumber), _classPrivateFieldGet(this, _monthNumber), _classPrivateFieldGet(this, _number));
    }
  }, {
    key: "getAllTasks",
    value: function getAllTasks() {
      this.sortTasks();
      return _classPrivateFieldGet(this, _taskRepository);
    }
  }, {
    key: "sortTasks",
    value: function sortTasks() {
      _classPrivateFieldGet(this, _taskRepository).sort(function (task1, task2) {
        var statusList = _Status["default"].getRepository();

        var index1 = statusList.indexOf(task1.getStatus().getText());
        var index2 = statusList.indexOf(task2.getStatus().getText());
        return index1 - index2;
      });
    }
  }, {
    key: "addTask",
    value: function addTask(content) {
      var newTask = new _Task["default"](content, this);

      _classPrivateFieldGet(this, _taskRepository).push(newTask);
    }
  }, {
    key: "deleteTask",
    value: function deleteTask(task) {
      var taskIndex = _classPrivateFieldGet(this, _taskRepository).indexOf(task);

      _classPrivateFieldGet(this, _taskRepository).splice(taskIndex, 1);
    }
  }, {
    key: "deleteAllTasks",
    value: function deleteAllTasks() {
      _classPrivateFieldSet(this, _taskRepository, []);
    }
  }, {
    key: "getTaskLength",
    value: function getTaskLength() {
      return _classPrivateFieldGet(this, _taskRepository).length;
    }
  }]);

  return DateOfCalendar;
}();

exports["default"] = DateOfCalendar;