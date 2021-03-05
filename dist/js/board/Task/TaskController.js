"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Status = _interopRequireDefault(require("../Status"));

var _taskElementEventHandler = require("./taskElementEventHandler");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TaskController = /*#__PURE__*/function () {
  function TaskController() {
    _classCallCheck(this, TaskController);
  }

  _createClass(TaskController, null, [{
    key: "setCalendarController",
    value: function setCalendarController(calendarController) {
      TaskController.calendarController = calendarController;
    }
  }, {
    key: "getCalendarController",
    value: function getCalendarController() {
      return TaskController.calendarController;
    }
  }, {
    key: "createAndAppendTaskElement",
    value: function createAndAppendTaskElement(task) {
      TaskController.task = task;
      TaskController.createTaskElements();
      TaskController.addClassNameToTaskElements();
      TaskController.addTextContentToTaskElements(task);
      TaskController.combineTaskElements();
      TaskController.colorTaskSatus(task.getStatus()); // status 엘리먼트가 만들어지고 나서 수행

      TaskController.addEventListenerToTaskButtons(task);
    }
  }, {
    key: "createTaskElements",
    value: function createTaskElements() {
      TaskController.$taskElement = document.createElement("li");
      TaskController.$taskStatus = document.createElement("span");
      TaskController.$taskContent = document.createElement("span");
      TaskController.$taskButtonContainer = document.createElement("span");
      TaskController.$updateButton = document.createElement("button");
      TaskController.$deleteButton = document.createElement("button");
    }
  }, {
    key: "addClassNameToTaskElements",
    value: function addClassNameToTaskElements() {
      TaskController.$taskElement.classList.add("task");
      TaskController.$taskStatus.classList.add("task__status");
      TaskController.$taskContent.classList.add("task__content");
      TaskController.$taskButtonContainer.classList.add("task__button-container");
      TaskController.$updateButton.classList.add("task__button");
      TaskController.$updateButton.classList.add("task__button--update");
      TaskController.$deleteButton.classList.add("task__button");
      TaskController.$deleteButton.classList.add("task__button--delete");
    }
  }, {
    key: "addTextContentToTaskElements",
    value: function addTextContentToTaskElements(task) {
      TaskController.$taskStatus.textContent = task.getStatus().getText();
      TaskController.$taskContent.textContent = task.getContent();
      TaskController.$updateButton.textContent = "✅";
      TaskController.$deleteButton.textContent = "⛔";
    }
  }, {
    key: "combineTaskElements",
    value: function combineTaskElements() {
      TaskController.$taskButtonContainer.appendChild(TaskController.$updateButton);
      TaskController.$taskButtonContainer.appendChild(TaskController.$deleteButton);
      TaskController.$taskElement.appendChild(TaskController.$taskStatus);
      TaskController.$taskElement.appendChild(TaskController.$taskContent);
      TaskController.$taskElement.appendChild(TaskController.$taskButtonContainer);
      var dateOfCalendar = TaskController.task.getAssignedDate();

      var _dateOfCalendar$getNu = dateOfCalendar.getNumberListOfDateObject(),
          _dateOfCalendar$getNu2 = _slicedToArray(_dateOfCalendar$getNu, 3),
          yearNumber = _dateOfCalendar$getNu2[0],
          monthNumber = _dateOfCalendar$getNu2[1],
          dateNumber = _dateOfCalendar$getNu2[2];

      var $taskList = document.querySelector(".task-list--".concat(yearNumber, "-").concat(monthNumber + 1, "-").concat(dateNumber));
      $taskList.appendChild(TaskController.$taskElement);
    }
  }, {
    key: "colorTaskSatus",
    value: function colorTaskSatus(status) {
      TaskController.$taskStatus.style.backgroundColor = _Status["default"].getColors()[_Status["default"].getRepository().indexOf(status.getText())];
    }
  }, {
    key: "addEventListenerToTaskButtons",
    value: function addEventListenerToTaskButtons(task) {
      var calendarController = TaskController.calendarController;
      TaskController.$taskStatus.addEventListener("click", (0, _taskElementEventHandler.handleClickUpdateTaskButton)(task, calendarController));
      TaskController.$taskContent.addEventListener("click", (0, _taskElementEventHandler.handleClickModifyingContent)(TaskController.$taskElement, TaskController.$taskContent, TaskController.$taskButtonContainer, task));
      TaskController.$updateButton.addEventListener("click", (0, _taskElementEventHandler.handleClickUpdateTaskButton)(task));
      TaskController.$deleteButton.addEventListener("click", (0, _taskElementEventHandler.handleClickDeleteTaskButton)(task, calendarController));
    }
  }]);

  return TaskController;
}();

exports["default"] = TaskController;

_defineProperty(TaskController, "$taskElement", void 0);

_defineProperty(TaskController, "$taskStatus", void 0);

_defineProperty(TaskController, "$taskContent", void 0);

_defineProperty(TaskController, "$taskButtonContainer", void 0);

_defineProperty(TaskController, "$updateButton", void 0);

_defineProperty(TaskController, "$deleteButton", void 0);

_defineProperty(TaskController, "calendarController", void 0);

_defineProperty(TaskController, "task", void 0);