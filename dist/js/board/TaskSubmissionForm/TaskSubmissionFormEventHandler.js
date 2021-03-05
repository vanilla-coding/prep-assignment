"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleClickCancelTaskSubmission = exports.handleClickSubmitTaskSubmission = void 0;

var _TaskController = _interopRequireDefault(require("../Task/TaskController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var handleClickSubmitTaskSubmission = function handleClickSubmitTaskSubmission(board, form) {
  return function () {
    var input = document.querySelector(".task-content-text-input");

    if (input.value.trim() === "") {
      alert("내용이 없는 할 일은 추가할 수 없습니다.");
      return;
    }

    board.addTask(input.value);

    _TaskController["default"].getCalendarController().displayCalendarContents();

    form.close();
    var boardController = board.getBoardController();
    boardController.displayTasks();
  };
};

exports.handleClickSubmitTaskSubmission = handleClickSubmitTaskSubmission;

var handleClickCancelTaskSubmission = function handleClickCancelTaskSubmission(form) {
  return function () {
    form.close();
  };
};

exports.handleClickCancelTaskSubmission = handleClickCancelTaskSubmission;