"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BoardController = _interopRequireDefault(require("./BoardController"));

var _Task = _interopRequireDefault(require("./Task/Task"));

var _Status = _interopRequireDefault(require("./Status"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var _taskRepository = new WeakMap();

var Board = /*#__PURE__*/function () {
  function Board(dateOfCalendar) {
    _classCallCheck(this, Board);

    _defineProperty(this, "isVisible", false);

    _defineProperty(this, "currentDisplayingDateOfCalendar", void 0);

    _defineProperty(this, "boardController", void 0);

    _taskRepository.set(this, {
      writable: true,
      value: []
    });

    this.currentDisplayingDateOfCalendar = dateOfCalendar;
    this.boardController = new _BoardController["default"](this);
  }

  _createClass(Board, [{
    key: "getVisibility",
    value: function getVisibility() {
      return this.isVisible;
    }
  }, {
    key: "getDateOfCalendar",
    value: function getDateOfCalendar() {
      return this.currentDisplayingDateOfCalendar;
    }
  }, {
    key: "getBoardController",
    value: function getBoardController() {
      return this.boardController;
    }
  }, {
    key: "display",
    value: function display() {
      this.boardController.display();
    }
  }, {
    key: "close",
    value: function close() {
      this.boardController.close();
    }
  }, {
    key: "changeVisibility",
    value: function changeVisibility() {
      this.isVisible = !this.isVisible;
    }
  }, {
    key: "deleteAllTasks",
    value: function deleteAllTasks() {
      _classPrivateFieldSet(this, _taskRepository, []);
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
    key: "getTaskLength",
    value: function getTaskLength() {
      return _classPrivateFieldGet(this, _taskRepository).length;
    }
  }]);

  return Board;
}();

exports["default"] = Board;