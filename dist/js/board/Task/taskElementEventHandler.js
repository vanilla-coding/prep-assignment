"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleClickDeleteTaskButton = exports.handleClickModifyingContent = exports.handleClickUpdateTaskButton = void 0;

var handleClickUpdateTaskButton = function handleClickUpdateTaskButton(task) {
  return function () {
    var boardController = task.getBoardController();
    task.updateStatus();
    boardController.displayTasks();
  };
};

exports.handleClickUpdateTaskButton = handleClickUpdateTaskButton;

var handleClickModifyingContent = function handleClickModifyingContent($itsTaskElement, $itsTaskContent, $taskButtonContainer, task) {
  return function () {
    $itsTaskContent.innerHTML = "";
    var $inputElementForModifying = document.createElement("input");
    $inputElementForModifying.value = task.getContent();
    $inputElementForModifying.addEventListener("keydown", handleEnterModifyingInput.bind(null, task, $inputElementForModifying));
    $itsTaskElement.insertBefore($inputElementForModifying, $taskButtonContainer);
  };
};

exports.handleClickModifyingContent = handleClickModifyingContent;
var ERROR_MESSAGE_NO_CONTENT_INPUT = "내용이 없습니다.";

var handleEnterModifyingInput = function handleEnterModifyingInput(task, $inputElementForModifying, event) {
  if (event.keyCode === 13) {
    var newTextContent = $inputElementForModifying.value;

    if (newTextContent.trim() === "") {
      alert(ERROR_MESSAGE_NO_CONTENT_INPUT);
    } else {
      task.updateTextContent(newTextContent);
    }

    task.getBoardController().displayTasks();
  }
};

var handleClickDeleteTaskButton = function handleClickDeleteTaskButton(task, calendarController) {
  return function () {
    task.getAssignedBoard().deleteTask(task);
    task.getBoardController().displayTasks();
    calendarController.displayCalendarContents();
  };
};

exports.handleClickDeleteTaskButton = handleClickDeleteTaskButton;