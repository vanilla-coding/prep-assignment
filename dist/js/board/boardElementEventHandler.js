"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleBoardButtonClose = exports.handleBoardButtonDeleteAll = exports.handleBoardButtonAdd = void 0;

var _TaskController = _interopRequireDefault(require("./Task/TaskController"));

var _TaskSubmissionForm = _interopRequireDefault(require("./TaskSubmissionForm/TaskSubmissionForm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var handleBoardButtonAdd = function handleBoardButtonAdd(board, $board) {
  return function () {
    var form = new _TaskSubmissionForm["default"](board, $board);
    form.display();
  };
};

exports.handleBoardButtonAdd = handleBoardButtonAdd;

var handleBoardButtonDeleteAll = function handleBoardButtonDeleteAll(boardController, board) {
  return function () {
    board.deleteAllTasks();
    boardController.displayTasks();

    _TaskController["default"].getCalendarController().displayCalendarContents();
  };
};

exports.handleBoardButtonDeleteAll = handleBoardButtonDeleteAll;

var handleBoardButtonClose = function handleBoardButtonClose(board) {
  return function () {
    board.close();
  };
};

exports.handleBoardButtonClose = handleBoardButtonClose;