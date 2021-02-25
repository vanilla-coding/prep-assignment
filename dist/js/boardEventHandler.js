"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeBoard = exports.handleBoardViewWhenDateClick = void 0;

var _element = require("./element");

var _calendarEventHandler = require("./calendarEventHandler");

var _Status = _interopRequireDefault(require("./board/Status"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var clickedDateOfCalendar;
var isBoardVisible = false;

var handleBoardViewWhenDateClick = function handleBoardViewWhenDateClick(dateOfCalendar) {
  clickedDateOfCalendar = dateOfCalendar;
  removePreviousBoardButtonEventListner();
  displayBoardDateText();
  handleBoardButtons();

  if (isBoardVisible) {
    handleDateClickWhenBoardVisible();
    return;
  }

  handleDateClickWhenBoardInvisible();
};

exports.handleBoardViewWhenDateClick = handleBoardViewWhenDateClick;

var removePreviousBoardButtonEventListner = function removePreviousBoardButtonEventListner() {
  _element.boardButtonAdd.removeEventListener("click", boardButtonAddCallback);

  _element.boardButtonDeleteAll.removeEventListener("click", boardButtonDeleteAllCallback);
};

var displayBoardDateText = function displayBoardDateText() {
  var clickedDate = clickedDateOfCalendar.getDate();
  _element.boardDateText.textContent = "TO DO LIST".concat(clickedDate.getMonth() + 1, ".").concat(clickedDate.getDate());
};

var boardButtonAddCallback;
var boardButtonDeleteAllCallback;

var handleBoardButtons = function handleBoardButtons() {
  boardButtonAddCallback = handleBoardButtonAdd();
  boardButtonDeleteAllCallback = handleBoardButtonDeleteAll();

  _element.boardButtonAdd.addEventListener("click", boardButtonAddCallback);

  _element.boardButtonDeleteAll.addEventListener("click", boardButtonDeleteAllCallback);
};

var handleBoardButtonAdd = function handleBoardButtonAdd() {
  return function () {
    displayTaskSubmissionForm();
  };
};

var clickTaskSubmissionOKCallBack;
var clickTaskSubmissionCancelCallBack;

var displayTaskSubmissionForm = function displayTaskSubmissionForm() {
  displayBoardFormContainerElement();
  clickTaskSubmissionOKCallBack = handleClickTaskSubmissionOK();
  clickTaskSubmissionCancelCallBack = handleClickTaskSubmissionCancel();

  _element.taskSubmissionOK.addEventListener("click", clickTaskSubmissionOKCallBack);

  _element.taskSubmissionCancel.addEventListener("click", clickTaskSubmissionCancelCallBack);
};

var displayBoardFormContainerElement = function displayBoardFormContainerElement() {
  _element.boardFormContainer.classList.remove("board__form-container--invisible");

  _element.boardFormContainer.classList.add("board__form-container--visible");
};

var handleClickTaskSubmissionOK = function handleClickTaskSubmissionOK() {
  return function () {
    clickedDateOfCalendar.addTask(_element.taskContentTextInput.value);
    removeTaskSubmissionForm();
    displayBoard();
  };
};

var removeTaskSubmissionForm = function removeTaskSubmissionForm() {
  _element.taskSubmissionOK.removeEventListener("click", clickTaskSubmissionOKCallBack);

  _element.taskSubmissionCancel.removeEventListener("click", clickTaskSubmissionCancelCallBack);

  clearInputTextArea();
  removeTaskList();
  removeBoardFormContainerElement();
};

var handleClickTaskSubmissionCancel = function handleClickTaskSubmissionCancel() {
  return function () {
    removeTaskSubmissionForm();
    displayBoard();
  };
};

var clearInputTextArea = function clearInputTextArea() {
  _element.taskContentTextInput.value = "";
};

var removeBoardFormContainerElement = function removeBoardFormContainerElement() {
  _element.boardFormContainer.classList.remove("board__form-container--visible");

  _element.boardFormContainer.classList.add("board__form-container--invisible");
};

var handleBoardButtonDeleteAll = function handleBoardButtonDeleteAll() {
  return function () {
    clickedDateOfCalendar.deleteAllTasks();
    displayBoard();
  };
};

var handleDateClickWhenBoardVisible = function handleDateClickWhenBoardVisible() {
  if (sameDateClicked()) {
    removeBoard();
    return;
  }

  displayBoard();
};

var removeTaskList = function removeTaskList() {
  _element.taskList.innerHTML = "";
};

var sameDateClicked = function sameDateClicked() {
  return clickedDateOfCalendar.getNumber() === _calendarEventHandler.previousClickedDateObject.getDate();
};

var handleDateClickWhenBoardInvisible = function handleDateClickWhenBoardInvisible() {
  displayBoard();
};

var removeBoard = function removeBoard() {
  removeBoardElement();
  removeTaskList();
  clearInputTextArea();
};

exports.removeBoard = removeBoard;

var removeBoardElement = function removeBoardElement() {
  _element.boardElement.classList.remove("board--visible");

  _element.boardElement.classList.add("board--invisible");

  isBoardVisible = false;
};

var displayBoard = function displayBoard() {
  displayBoardElement();
  removeTaskList();
  clearInputTextArea();
  displayTasksOnBoard();
};

var displayBoardElement = function displayBoardElement() {
  _element.boardElement.classList.add("board--visible");

  _element.boardElement.classList.remove("board--invisible");

  isBoardVisible = true;
};

var displayTasksOnBoard = function displayTasksOnBoard() {
  var tasks = clickedDateOfCalendar.getAllTasks();
  tasks.forEach(createAndAddTaskElement);
};

var taskElement;
var taskStatus;
var taskContent;
var taskButtonContainer;
var updateButton;
var deleteButton;

var createAndAddTaskElement = function createAndAddTaskElement(task) {
  createTaskElements();
  addClassNameToTaskElements();
  addTextContentToTaskElements(task);
  combineTaskElements();
  colorTaskSatus(task.getStatus()); // status 엘리먼트가 만들어지고 나서 수행

  addEventListenerToTaskButtons(task);
};

var createTaskElements = function createTaskElements() {
  taskElement = document.createElement("li");
  taskStatus = document.createElement("span");
  taskContent = document.createElement("span");
  taskButtonContainer = document.createElement("span");
  updateButton = document.createElement("button");
  deleteButton = document.createElement("button");
};

var addClassNameToTaskElements = function addClassNameToTaskElements() {
  taskElement.classList.add("task");
  taskStatus.classList.add("task__status");
  taskContent.classList.add("task__content");
  taskButtonContainer.classList.add("task__button-container");
  updateButton.classList.add("task__button");
  updateButton.classList.add("task__button--update");
  deleteButton.classList.add("task__button");
  deleteButton.classList.add("task__button--delete");
};

var addTextContentToTaskElements = function addTextContentToTaskElements(task) {
  taskStatus.textContent = task.getStatus().getText();
  taskContent.textContent = task.getContent();
  updateButton.textContent = "✅";
  deleteButton.textContent = "⛔";
};

var combineTaskElements = function combineTaskElements() {
  taskButtonContainer.appendChild(updateButton);
  taskButtonContainer.appendChild(deleteButton);
  taskElement.appendChild(taskStatus);
  taskElement.appendChild(taskContent);
  taskElement.appendChild(taskButtonContainer);

  _element.taskList.appendChild(taskElement);
};

var colorTaskSatus = function colorTaskSatus(status) {
  taskStatus.style.backgroundColor = _Status["default"].getColors()[_Status["default"].getRepository().indexOf(status.getText())];
};

var addEventListenerToTaskButtons = function addEventListenerToTaskButtons(task) {
  taskStatus.addEventListener("click", handleClickUpdateTaskButton(task));
  taskContent.addEventListener("click", handleClickModifyingContent(taskElement, taskContent, taskButtonContainer, task));
  updateButton.addEventListener("click", handleClickUpdateTaskButton(task));
  deleteButton.addEventListener("click", handleClickDeleteTaskButton(task));
};

var handleClickUpdateTaskButton = function handleClickUpdateTaskButton(task) {
  return function () {
    task.updateStatus();
    displayBoard();
  };
};

var handleClickModifyingContent = function handleClickModifyingContent(itsTaskElement, itsTaskContent, taskButtonContainer, task) {
  return function () {
    itsTaskContent.innerHTML = "";
    var inputElementForModifying = document.createElement("input");
    inputElementForModifying.value = task.getContent();
    inputElementForModifying.addEventListener("keydown", handleEnterModifyingInput.bind(null, task, inputElementForModifying));
    itsTaskElement.insertBefore(inputElementForModifying, taskButtonContainer);
  };
};

var handleEnterModifyingInput = function handleEnterModifyingInput(task, inputElementForModifying, event) {
  if (event.keyCode === 13) {
    var newTextContent = inputElementForModifying.value;
    task.updateTextContent(newTextContent);
    displayBoard();
  }
};

var handleClickDeleteTaskButton = function handleClickDeleteTaskButton(task) {
  return function () {
    task.getAssignedDate().deleteTask(task);
    displayBoard();
  };
};