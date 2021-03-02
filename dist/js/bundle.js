/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/board/Board.js":
/*!*******************************!*\
  !*** ./src/js/board/Board.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Board)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Board = /*#__PURE__*/function () {
  function Board() {
    _classCallCheck(this, Board);
  } // 이미 Board는 존재하니까 필요 없을 것 같다.


  _createClass(Board, null, [{
    key: "display",
    value: function display(dateOfCalendar) {
      this.currentDisplayingDateOfCalendar = dateOfCalendar;
    }
  }, {
    key: "getVisibility",
    value: function getVisibility() {
      return this.isVisible;
    }
  }, {
    key: "isDateSameWithPreviousDate",
    value: function isDateSameWithPreviousDate(dateOfCalendar) {
      var date = dateOfCalendar.getDateObject();
      return this.currentDisplayingDateOfCalendar.getDate() === date.getDate() && this.currentDisplayingDateOfCalendar.getMonth() === date.getMonth() && this.currentDisplayingDateOfCalendar.getFullYear() === date.getFullYear();
    }
  }]);

  return Board;
}();

_defineProperty(Board, "isVisible", void 0);

_defineProperty(Board, "currentDisplayingDateOfCalendar", void 0);

_defineProperty(Board, "lastSelectedDateOfCalendar", void 0);



/***/ }),

/***/ "./src/js/board/Status.js":
/*!********************************!*\
  !*** ./src/js/board/Status.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Status)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var _statusName = new WeakMap();

var _cannotUpdateMessage = new WeakMap();

var Status = /*#__PURE__*/function () {
  function Status() {
    _classCallCheck(this, Status);

    _statusName.set(this, {
      writable: true,
      value: void 0
    });

    _cannotUpdateMessage.set(this, {
      writable: true,
      value: "\uD604\uC7AC \uC0C1\uD0DC\uAC00 ".concat(_classStaticPrivateFieldSpecGet(Status, Status, _DONE), " \uC785\uB2C8\uB2E4. \uB354 \uC774\uC0C1 \uC5C5\uB370\uC774\uD2B8 \uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.")
    });

    _classPrivateFieldSet(this, _statusName, _classStaticPrivateFieldSpecGet(Status, Status, _statusRepository)[0]);
  }

  _createClass(Status, [{
    key: "getText",
    value: function getText() {
      return _classPrivateFieldGet(this, _statusName);
    }
  }, {
    key: "update",
    value: function update() {
      var newStatusIndex = _classStaticPrivateFieldSpecGet(Status, Status, _statusRepository).indexOf(_classPrivateFieldGet(this, _statusName)) + 1;

      if (newStatusIndex === _classStaticPrivateFieldSpecGet(Status, Status, _statusRepository).length) {
        console.log(_classPrivateFieldGet(this, _cannotUpdateMessage));
        return;
      }

      _classPrivateFieldSet(this, _statusName, _classStaticPrivateFieldSpecGet(Status, Status, _statusRepository)[newStatusIndex]);
    }
  }], [{
    key: "getRepository",
    value: function getRepository() {
      return _classStaticPrivateFieldSpecGet(Status, Status, _statusRepository);
    }
  }, {
    key: "getColors",
    value: function getColors() {
      return _classStaticPrivateFieldSpecGet(Status, Status, _statusColor);
    }
  }]);

  return Status;
}();

var _TODO = {
  writable: true,
  value: "TODO"
};
var _DOING = {
  writable: true,
  value: "DOING"
};
var _DONE = {
  writable: true,
  value: "DONE"
};
var _statusRepository = {
  writable: true,
  value: [_classStaticPrivateFieldSpecGet(Status, Status, _TODO), _classStaticPrivateFieldSpecGet(Status, Status, _DOING), _classStaticPrivateFieldSpecGet(Status, Status, _DONE)]
};
var _statusColor = {
  writable: true,
  value: ["white", "yellowgreen", "red"]
};


/***/ }),

/***/ "./src/js/board/Task.js":
/*!******************************!*\
  !*** ./src/js/board/Task.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var _Status__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Status */ "./src/js/board/Status.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }



var _createdTime = new WeakMap();

var _content = new WeakMap();

var _status = new WeakMap();

var _assignedDate = new WeakMap();

var Task = /*#__PURE__*/function () {
  function Task(content, assignedDate) {
    _classCallCheck(this, Task);

    _createdTime.set(this, {
      writable: true,
      value: void 0
    });

    _content.set(this, {
      writable: true,
      value: void 0
    });

    _status.set(this, {
      writable: true,
      value: void 0
    });

    _assignedDate.set(this, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _createdTime, new Date());

    _classPrivateFieldSet(this, _content, content);

    _classPrivateFieldSet(this, _status, new _Status__WEBPACK_IMPORTED_MODULE_0__.default());

    _classPrivateFieldSet(this, _assignedDate, assignedDate);
  }

  _createClass(Task, [{
    key: "getContent",
    value: function getContent() {
      return _classPrivateFieldGet(this, _content);
    }
  }, {
    key: "getStatus",
    value: function getStatus() {
      return _classPrivateFieldGet(this, _status);
    }
  }, {
    key: "updateStatus",
    value: function updateStatus() {
      _classPrivateFieldGet(this, _status).update();
    }
  }, {
    key: "getAssignedDate",
    value: function getAssignedDate() {
      return _classPrivateFieldGet(this, _assignedDate);
    }
  }, {
    key: "updateTextContent",
    value: function updateTextContent(newTextContent) {
      _classPrivateFieldSet(this, _content, newTextContent);
    }
  }]);

  return Task;
}();



/***/ }),

/***/ "./src/js/board/boardEventHandler.js":
/*!*******************************************!*\
  !*** ./src/js/board/boardEventHandler.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleBoardViewWhenDateClick": () => (/* binding */ handleBoardViewWhenDateClick),
/* harmony export */   "removeBoard": () => (/* binding */ removeBoard)
/* harmony export */ });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../element */ "./src/js/element.js");
/* harmony import */ var _calendar_calendarEventHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../calendar/calendarEventHandler */ "./src/js/calendar/calendarEventHandler.js");
/* harmony import */ var _Status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Status */ "./src/js/board/Status.js");



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

var removePreviousBoardButtonEventListner = function removePreviousBoardButtonEventListner() {
  _element__WEBPACK_IMPORTED_MODULE_0__.$boardButtonAdd.removeEventListener("click", boardButtonAddCallback);
  _element__WEBPACK_IMPORTED_MODULE_0__.$boardButtonDeleteAll.removeEventListener("click", boardButtonDeleteAllCallback);
};

var displayBoardDateText = function displayBoardDateText() {
  var clickedDate = clickedDateOfCalendar.getDateObject();
  _element__WEBPACK_IMPORTED_MODULE_0__.$boardDateText.textContent = "TO DO LIST".concat(clickedDate.getMonth() + 1, ".").concat(clickedDate.getDate());
};

var boardButtonAddCallback;
var boardButtonDeleteAllCallback;

var handleBoardButtons = function handleBoardButtons() {
  boardButtonAddCallback = handleBoardButtonAdd();
  boardButtonDeleteAllCallback = handleBoardButtonDeleteAll();
  _element__WEBPACK_IMPORTED_MODULE_0__.$boardButtonAdd.addEventListener("click", boardButtonAddCallback);
  _element__WEBPACK_IMPORTED_MODULE_0__.$boardButtonDeleteAll.addEventListener("click", boardButtonDeleteAllCallback);
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
  _element__WEBPACK_IMPORTED_MODULE_0__.$taskSubmissionOK.addEventListener("click", clickTaskSubmissionOKCallBack);
  _element__WEBPACK_IMPORTED_MODULE_0__.$taskSubmissionCancel.addEventListener("click", clickTaskSubmissionCancelCallBack);
};

var displayBoardFormContainerElement = function displayBoardFormContainerElement() {
  _element__WEBPACK_IMPORTED_MODULE_0__.$boardFormContainer.classList.remove("board__form-container--invisible");
  _element__WEBPACK_IMPORTED_MODULE_0__.$boardFormContainer.classList.add("board__form-container--visible");
};

var handleClickTaskSubmissionOK = function handleClickTaskSubmissionOK() {
  return function () {
    clickedDateOfCalendar.addTask(_element__WEBPACK_IMPORTED_MODULE_0__.$taskContentTextInput.value);
    removeTaskSubmissionForm();
    displayBoard();
  };
};

var removeTaskSubmissionForm = function removeTaskSubmissionForm() {
  _element__WEBPACK_IMPORTED_MODULE_0__.$taskSubmissionOK.removeEventListener("click", clickTaskSubmissionOKCallBack);
  _element__WEBPACK_IMPORTED_MODULE_0__.$taskSubmissionCancel.removeEventListener("click", clickTaskSubmissionCancelCallBack);
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
  _element__WEBPACK_IMPORTED_MODULE_0__.$taskContentTextInput.value = "";
};

var removeBoardFormContainerElement = function removeBoardFormContainerElement() {
  _element__WEBPACK_IMPORTED_MODULE_0__.$boardFormContainer.classList.remove("board__form-container--visible");
  _element__WEBPACK_IMPORTED_MODULE_0__.$boardFormContainer.classList.add("board__form-container--invisible");
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
  _element__WEBPACK_IMPORTED_MODULE_0__.$taskList.innerHTML = "";
};

var sameDateClicked = function sameDateClicked() {
  // TODO: 오류 있음. 완전한 비교가 될 수 있도록 고칠 것
  return clickedDateOfCalendar.getDateNumber() === _calendar_calendarEventHandler__WEBPACK_IMPORTED_MODULE_1__.previousClickedDateObject.getDate();
};

var handleDateClickWhenBoardInvisible = function handleDateClickWhenBoardInvisible() {
  displayBoard();
};

var removeBoard = function removeBoard() {
  removeBoardElement();
  removeTaskList();
  clearInputTextArea();
};

var removeBoardElement = function removeBoardElement() {
  _element__WEBPACK_IMPORTED_MODULE_0__.$boardElement.classList.remove("board--visible");
  _element__WEBPACK_IMPORTED_MODULE_0__.$boardElement.classList.add("board--invisible");
  isBoardVisible = false;
};

var displayBoard = function displayBoard() {
  displayBoardElement();
  removeTaskList();
  clearInputTextArea();
  displayTasksOnBoard();
};

var displayBoardElement = function displayBoardElement() {
  _element__WEBPACK_IMPORTED_MODULE_0__.$boardElement.classList.add("board--visible");
  _element__WEBPACK_IMPORTED_MODULE_0__.$boardElement.classList.remove("board--invisible");
  isBoardVisible = true;
};

var displayTasksOnBoard = function displayTasksOnBoard() {
  var tasks = clickedDateOfCalendar.getAllTasks();
  tasks.forEach(createAndAddTaskElement);
};

var $taskElement;
var $taskStatus;
var $taskContent;
var $taskButtonContainer;
var $updateButton;
var $deleteButton;

var createAndAddTaskElement = function createAndAddTaskElement(task) {
  createTaskElements();
  addClassNameToTaskElements();
  addTextContentToTaskElements(task);
  combineTaskElements();
  colorTaskSatus(task.getStatus()); // status 엘리먼트가 만들어지고 나서 수행

  addEventListenerToTaskButtons(task);
};

var createTaskElements = function createTaskElements() {
  $taskElement = document.createElement("li");
  $taskStatus = document.createElement("span");
  $taskContent = document.createElement("span");
  $taskButtonContainer = document.createElement("span");
  $updateButton = document.createElement("button");
  $deleteButton = document.createElement("button");
};

var addClassNameToTaskElements = function addClassNameToTaskElements() {
  $taskElement.classList.add("task");
  $taskStatus.classList.add("task__status");
  $taskContent.classList.add("task__content");
  $taskButtonContainer.classList.add("task__button-container");
  $updateButton.classList.add("task__button");
  $updateButton.classList.add("task__button--update");
  $deleteButton.classList.add("task__button");
  $deleteButton.classList.add("task__button--delete");
};

var addTextContentToTaskElements = function addTextContentToTaskElements(task) {
  $taskStatus.textContent = task.getStatus().getText();
  $taskContent.textContent = task.getContent();
  $updateButton.textContent = "✅";
  $deleteButton.textContent = "⛔";
};

var combineTaskElements = function combineTaskElements() {
  $taskButtonContainer.appendChild($updateButton);
  $taskButtonContainer.appendChild($deleteButton);
  $taskElement.appendChild($taskStatus);
  $taskElement.appendChild($taskContent);
  $taskElement.appendChild($taskButtonContainer);
  _element__WEBPACK_IMPORTED_MODULE_0__.$taskList.appendChild($taskElement);
};

var colorTaskSatus = function colorTaskSatus(status) {
  $taskStatus.style.backgroundColor = _Status__WEBPACK_IMPORTED_MODULE_2__.default.getColors()[_Status__WEBPACK_IMPORTED_MODULE_2__.default.getRepository().indexOf(status.getText())];
};

var addEventListenerToTaskButtons = function addEventListenerToTaskButtons(task) {
  $taskStatus.addEventListener("click", handleClickUpdateTaskButton(task));
  $taskContent.addEventListener("click", handleClickModifyingContent($taskElement, $taskContent, $taskButtonContainer, task));
  $updateButton.addEventListener("click", handleClickUpdateTaskButton(task));
  $deleteButton.addEventListener("click", handleClickDeleteTaskButton(task));
};

var handleClickUpdateTaskButton = function handleClickUpdateTaskButton(task) {
  return function () {
    task.updateStatus();
    displayBoard();
  };
};

var handleClickModifyingContent = function handleClickModifyingContent($itsTaskElement, $itsTaskContent, $taskButtonContainer, task) {
  return function () {
    $itsTaskContent.innerHTML = "";
    var $inputElementForModifying = document.createElement("input");
    $inputElementForModifying.value = task.getContent();
    $inputElementForModifying.addEventListener("keydown", handleEnterModifyingInput.bind(null, task, $inputElementForModifying));
    $itsTaskElement.insertBefore($inputElementForModifying, $taskButtonContainer);
  };
};

var handleEnterModifyingInput = function handleEnterModifyingInput(task, $inputElementForModifying, event) {
  if (event.keyCode === 13) {
    var newTextContent = $inputElementForModifying.value;
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

/***/ }),

/***/ "./src/js/calendar/CalendarController.js":
/*!***********************************************!*\
  !*** ./src/js/calendar/CalendarController.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CalendarController)
/* harmony export */ });
/* harmony import */ var _calendarEventHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendarEventHandler */ "./src/js/calendar/calendarEventHandler.js");
/* harmony import */ var _CalendarViewer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CalendarViewer */ "./src/js/calendar/CalendarViewer.js");
/* harmony import */ var _Now__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Now */ "./src/js/calendar/Now.js");
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../element */ "./src/js/element.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }






var _initialAddingEventListner = new WeakSet();

var CalendarController = function CalendarController() {
  _classCallCheck(this, CalendarController);

  _initialAddingEventListner.add(this);

  _CalendarViewer__WEBPACK_IMPORTED_MODULE_1__.default.display();

  _classPrivateMethodGet(this, _initialAddingEventListner, _initialAddingEventListner2).call(this);
};

var _initialAddingEventListner2 = function _initialAddingEventListner2() {
  _element__WEBPACK_IMPORTED_MODULE_3__.$previousMonthButton.addEventListener("click", _calendarEventHandler__WEBPACK_IMPORTED_MODULE_0__.handleMoveMonthButton);
  _element__WEBPACK_IMPORTED_MODULE_3__.$nextMonthButton.addEventListener("click", _calendarEventHandler__WEBPACK_IMPORTED_MODULE_0__.handleMoveMonthButton);
};



/***/ }),

/***/ "./src/js/calendar/CalendarViewer.js":
/*!*******************************************!*\
  !*** ./src/js/calendar/CalendarViewer.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CalendarViewer)
/* harmony export */ });
/* harmony import */ var _day__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./day */ "./src/js/calendar/day.js");
/* harmony import */ var _Month__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Month */ "./src/js/calendar/Month.js");
/* harmony import */ var _SelectedDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SelectedDate */ "./src/js/calendar/SelectedDate.js");
/* harmony import */ var _YearRepository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./YearRepository */ "./src/js/calendar/YearRepository.js");
/* harmony import */ var _calendarEventHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calendarEventHandler */ "./src/js/calendar/calendarEventHandler.js");
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../element */ "./src/js/element.js");
/* harmony import */ var _Now__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Now */ "./src/js/calendar/Now.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classStaticPrivateMethodGet(receiver, classConstructor, method) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } return method; }









var CalendarViewer = /*#__PURE__*/function () {
  function CalendarViewer() {
    _classCallCheck(this, CalendarViewer);
  }

  _createClass(CalendarViewer, null, [{
    key: "display",
    value: function display() {
      _classStaticPrivateMethodGet(CalendarViewer, CalendarViewer, _displayHeader).call(CalendarViewer);

      _classStaticPrivateMethodGet(CalendarViewer, CalendarViewer, _displayToday).call(CalendarViewer);

      _classStaticPrivateMethodGet(CalendarViewer, CalendarViewer, _displaySelectedCalendar).call(CalendarViewer);
    }
  }]);

  return CalendarViewer;
}();

var _createAndAddNotificationOnDate = function _createAndAddNotificationOnDate(dateOfCalendarInstance, dateElement) {
  var taskLength = dateOfCalendarInstance.getTaskLength();

  if (taskLength > 0) {
    var notification = document.createElement("div");
    notification.classList.add("task-notification");
    notification.textContent = taskLength;
    dateElement.appendChild(notification);
  }
};

var _printCalendarDates = function _printCalendarDates() {
  var thisYear = _YearRepository__WEBPACK_IMPORTED_MODULE_3__.default.getYear(_SelectedDate__WEBPACK_IMPORTED_MODULE_2__.default.getDateObject());
  var thisMonth = thisYear.getMonth(_SelectedDate__WEBPACK_IMPORTED_MODULE_2__.default.getDateObject());
  var dayOfFirstDate = thisMonth.getDayOfFirstDate();
  var lastDate = thisMonth.getLastDate();

  for (var i = 1, indexForDate = dayOfFirstDate; i <= lastDate; i++, indexForDate++) {
    var dateElement = _element__WEBPACK_IMPORTED_MODULE_5__.$allDatesInCalendar[indexForDate];
    var dateOfCalendarInstance = thisMonth.getDateOfCalendarByNumber(i);
    dateElement.textContent = i;
    dateElement.classList.add("date-inside");

    if (_Now__WEBPACK_IMPORTED_MODULE_6__.default.isDateToday(dateOfCalendarInstance.getDateObject())) {
      dateElement.style.color = "red";
      dateElement.style.fontWeight = 1000;
    } else {
      dateElement.style.color = "black";
    }

    var clickCallBack = (0,_calendarEventHandler__WEBPACK_IMPORTED_MODULE_4__.handleDateClick)(dateOfCalendarInstance, dateElement);
    dateElement.addEventListener("click", clickCallBack);

    _classStaticPrivateMethodGet(CalendarViewer, CalendarViewer, _createAndAddNotificationOnDate).call(CalendarViewer, dateOfCalendarInstance, dateElement);

    _classStaticPrivateFieldSpecGet(this, CalendarViewer, _dateEventListenerRepository)[indexForDate] = clickCallBack; // 이벤트 리스너 지우기 위해 따로 저장
  }
};

var _resetCalendarDates = function _resetCalendarDates() {
  var totalCalendarCells = _element__WEBPACK_IMPORTED_MODULE_5__.$allDatesInCalendar.length;

  for (var i = 0; i < totalCalendarCells; i++) {
    _element__WEBPACK_IMPORTED_MODULE_5__.$allDatesInCalendar[i].textContent = "";
    _element__WEBPACK_IMPORTED_MODULE_5__.$allDatesInCalendar[i].style.fontWeight = "normal";
    _element__WEBPACK_IMPORTED_MODULE_5__.$allDatesInCalendar[i].className = "";
    _element__WEBPACK_IMPORTED_MODULE_5__.$allDatesInCalendar[i].removeEventListener("click", _classStaticPrivateFieldSpecGet(this, CalendarViewer, _dateEventListenerRepository)[i]);
  }
};

var _displaySelectedDates = function _displaySelectedDates() {
  if (!_YearRepository__WEBPACK_IMPORTED_MODULE_3__.default.hasYearInRepository(_SelectedDate__WEBPACK_IMPORTED_MODULE_2__.default.getFullYear())) {
    _YearRepository__WEBPACK_IMPORTED_MODULE_3__.default.createNewYear(_SelectedDate__WEBPACK_IMPORTED_MODULE_2__.default);
  }

  _classStaticPrivateMethodGet(this, CalendarViewer, _resetCalendarDates).call(this);

  _classStaticPrivateMethodGet(this, CalendarViewer, _printCalendarDates).call(this);
};

var _displaySelectedDateText = function _displaySelectedDateText() {
  _element__WEBPACK_IMPORTED_MODULE_5__.$selectedDayText.textContent = _day__WEBPACK_IMPORTED_MODULE_0__.DAYS[_SelectedDate__WEBPACK_IMPORTED_MODULE_2__.default.getDay()];
  _element__WEBPACK_IMPORTED_MODULE_5__.$selectedDateText.textContent = _SelectedDate__WEBPACK_IMPORTED_MODULE_2__.default.getDateNumber();
  _element__WEBPACK_IMPORTED_MODULE_5__.$selectedMonthText.textContent = _Month__WEBPACK_IMPORTED_MODULE_1__.default.getNames()[_SelectedDate__WEBPACK_IMPORTED_MODULE_2__.default.getMonth()];
  _element__WEBPACK_IMPORTED_MODULE_5__.$selectedYearText.textContent = _SelectedDate__WEBPACK_IMPORTED_MODULE_2__.default.getFullYear();
};

var _displaySelectedCalendar = function _displaySelectedCalendar() {
  _classStaticPrivateMethodGet(this, CalendarViewer, _displaySelectedDateText).call(this);

  _classStaticPrivateMethodGet(this, CalendarViewer, _displaySelectedDates).call(this);
};

var _displayToday = function _displayToday() {
  var now = _Now__WEBPACK_IMPORTED_MODULE_6__.default.getDateObject();
  document.getElementById("jsTodayDay").textContent = _day__WEBPACK_IMPORTED_MODULE_0__.DAYS[now.getDay()];
  document.getElementById("jsTodayDate").textContent = now.getDate();
  document.getElementById("jsTodayMonth").textContent = _Month__WEBPACK_IMPORTED_MODULE_1__.default.getNames()[now.getMonth()];
  document.getElementById("jsTodayYear").textContent = now.getFullYear();
};

var _displayHeader = function _displayHeader() {
  var header = document.querySelectorAll("table tbody tr th");
  var i = 0;
  header.forEach(function (th) {
    th.textContent = _day__WEBPACK_IMPORTED_MODULE_0__.DAYS[i++];
  });
};

var _dateEventListenerRepository = {
  writable: true,
  value: {}
};


/***/ }),

/***/ "./src/js/calendar/DateOfCalendar.js":
/*!*******************************************!*\
  !*** ./src/js/calendar/DateOfCalendar.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DateOfCalendar)
/* harmony export */ });
/* harmony import */ var _board_Board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../board/Board */ "./src/js/board/Board.js");
/* harmony import */ var _board_Status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../board/Status */ "./src/js/board/Status.js");
/* harmony import */ var _board_Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../board/Task */ "./src/js/board/Task.js");
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
    key: "getDateNumber",
    value: function getDateNumber() {
      return _classPrivateFieldGet(this, _number);
    }
  }, {
    key: "getDateObject",
    value: function getDateObject() {
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
        var statusList = _board_Status__WEBPACK_IMPORTED_MODULE_1__.default.getRepository();
        var index1 = statusList.indexOf(task1.getStatus().getText());
        var index2 = statusList.indexOf(task2.getStatus().getText());
        return index1 - index2;
      });
    }
  }, {
    key: "addTask",
    value: function addTask(content) {
      var newTask = new _board_Task__WEBPACK_IMPORTED_MODULE_2__.default(content, this);

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
  }, {
    key: "handleClicked",
    value: function handleClicked() {
      if (!_board_Board__WEBPACK_IMPORTED_MODULE_0__.default.getVisibility()) {
        _board_Board__WEBPACK_IMPORTED_MODULE_0__.default.display(this);
        return;
      }

      if (_board_Board__WEBPACK_IMPORTED_MODULE_0__.default.isDateSameWithPreviousDate(this)) {
        _board_Board__WEBPACK_IMPORTED_MODULE_0__.default.hide();
        return;
      }

      _board_Board__WEBPACK_IMPORTED_MODULE_0__.default.display(this);
    }
  }]);

  return DateOfCalendar;
}();



/***/ }),

/***/ "./src/js/calendar/Month.js":
/*!**********************************!*\
  !*** ./src/js/calendar/Month.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Month)
/* harmony export */ });
/* harmony import */ var _DateOfCalendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DateOfCalendar */ "./src/js/calendar/DateOfCalendar.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }



var _dateRepository = new WeakMap();

var _yearNumber = new WeakMap();

var _yearBelongTo = new WeakMap();

var _number = new WeakMap();

var _monthName = new WeakMap();

var _dayOfFirstDate = new WeakMap();

var _lastDate = new WeakMap();

var _addDatesToRepository = new WeakSet();

var Month = /*#__PURE__*/function () {
  // 첫 날의 요일
  function Month(yearObject, monthNumber) {
    _classCallCheck(this, Month);

    _addDatesToRepository.add(this);

    _dateRepository.set(this, {
      writable: true,
      value: []
    });

    _yearNumber.set(this, {
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

    _monthName.set(this, {
      writable: true,
      value: void 0
    });

    _dayOfFirstDate.set(this, {
      writable: true,
      value: void 0
    });

    _lastDate.set(this, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _yearBelongTo, yearObject);

    _classPrivateFieldSet(this, _yearNumber, yearObject.getNumber());

    _classPrivateFieldSet(this, _number, monthNumber);

    _classPrivateFieldSet(this, _monthName, _classStaticPrivateFieldSpecGet(Month, Month, _NAMES)[_classPrivateFieldGet(this, _number)]);

    _classPrivateFieldSet(this, _dayOfFirstDate, new Date(_classPrivateFieldGet(this, _yearNumber), monthNumber, 1).getDay());

    _classPrivateFieldSet(this, _lastDate, new Date(_classPrivateFieldGet(this, _yearNumber), monthNumber + 1, 0).getDate());

    _classPrivateMethodGet(this, _addDatesToRepository, _addDatesToRepository2).call(this);
  }

  _createClass(Month, [{
    key: "getDayOfFirstDate",
    value: function getDayOfFirstDate() {
      return _classPrivateFieldGet(this, _dayOfFirstDate);
    }
  }, {
    key: "getLastDate",
    value: function getLastDate() {
      return _classPrivateFieldGet(this, _lastDate);
    }
  }, {
    key: "getNumber",
    value: function getNumber() {
      return _classPrivateFieldGet(this, _number);
    }
  }, {
    key: "getYearNumber",
    value: function getYearNumber() {
      return _classPrivateFieldGet(this, _yearNumber);
    }
  }, {
    key: "getDateOfCalendarByNumber",
    value: function getDateOfCalendarByNumber(dateNumber) {
      return _classPrivateFieldGet(this, _dateRepository).find(function (dateOfCalendar) {
        return dateOfCalendar.getDateNumber() === dateNumber;
      });
    }
  }], [{
    key: "getNames",
    value: function getNames() {
      return _classStaticPrivateFieldSpecGet(this, Month, _NAMES);
    }
  }]);

  return Month;
}();

var _NAMES = {
  writable: true,
  value: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
};

var _addDatesToRepository2 = function _addDatesToRepository2() {
  for (var i = 1; i <= _classPrivateFieldGet(this, _lastDate); i++) {
    var newDate = new _DateOfCalendar__WEBPACK_IMPORTED_MODULE_0__.default(i, this, _classPrivateFieldGet(this, _yearBelongTo));

    _classPrivateFieldGet(this, _dateRepository).push(newDate);
  }
};



/***/ }),

/***/ "./src/js/calendar/Now.js":
/*!********************************!*\
  !*** ./src/js/calendar/Now.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Now)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var Now = /*#__PURE__*/function () {
  function Now() {
    _classCallCheck(this, Now);
  }

  _createClass(Now, null, [{
    key: "getDateObject",
    value: function getDateObject() {
      return _classStaticPrivateFieldSpecGet(this, Now, _nowObject);
    }
  }, {
    key: "isDateToday",
    value: function isDateToday(dateObject) {
      return _classStaticPrivateFieldSpecGet(this, Now, _nowObject).getDate() === dateObject.getDate() && _classStaticPrivateFieldSpecGet(this, Now, _nowObject).getMonth() === dateObject.getMonth() && _classStaticPrivateFieldSpecGet(this, Now, _nowObject).getFullYear() === dateObject.getFullYear();
    }
  }]);

  return Now;
}();

var _nowObject = {
  writable: true,
  value: new Date()
};


/***/ }),

/***/ "./src/js/calendar/SelectedDate.js":
/*!*****************************************!*\
  !*** ./src/js/calendar/SelectedDate.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SelectedDate)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
    key: "setMonthOfDateObject",
    value: function setMonthOfDateObject(newMonthNumber) {
      _classStaticPrivateFieldSpecGet(SelectedDate, SelectedDate, _date).setMonth(newMonthNumber);
    }
  }, {
    key: "setDateOfDateObject",
    value: function setDateOfDateObject(newDateNumber) {
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
  }]);

  return SelectedDate;
}();

var _date = {
  writable: true,
  value: new Date()
};


/***/ }),

/***/ "./src/js/calendar/Year.js":
/*!*********************************!*\
  !*** ./src/js/calendar/Year.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Year)
/* harmony export */ });
/* harmony import */ var _Month__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Month */ "./src/js/calendar/Month.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }



var _number = new WeakMap();

var _monthRepository = new WeakMap();

var _TOTAL_MONTH_LENGTH = new WeakMap();

var Year = /*#__PURE__*/function () {
  function Year(yearNumber) {
    _classCallCheck(this, Year);

    _number.set(this, {
      writable: true,
      value: void 0
    });

    _monthRepository.set(this, {
      writable: true,
      value: []
    });

    _TOTAL_MONTH_LENGTH.set(this, {
      writable: true,
      value: 12
    });

    _classPrivateFieldSet(this, _number, yearNumber);

    this.addMonthsToRepository();
  }

  _createClass(Year, [{
    key: "addMonthsToRepository",
    value: function addMonthsToRepository() {
      for (var i = 0; i < _classPrivateFieldGet(this, _TOTAL_MONTH_LENGTH); i++) {
        var newMonth = new _Month__WEBPACK_IMPORTED_MODULE_0__.default(this, i);

        _classPrivateFieldGet(this, _monthRepository).push(newMonth);
      }
    }
  }, {
    key: "getMonth",
    value: function getMonth(dateObject) {
      return _classPrivateFieldGet(this, _monthRepository).find(function (month) {
        return month.getYearNumber() === dateObject.getFullYear() && month.getNumber() === dateObject.getMonth();
      });
    }
  }, {
    key: "getNumber",
    value: function getNumber() {
      return _classPrivateFieldGet(this, _number);
    }
  }]);

  return Year;
}();



/***/ }),

/***/ "./src/js/calendar/YearRepository.js":
/*!*******************************************!*\
  !*** ./src/js/calendar/YearRepository.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ YearRepository)
/* harmony export */ });
/* harmony import */ var _Year__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Year */ "./src/js/calendar/Year.js");
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
      var newYear = new _Year__WEBPACK_IMPORTED_MODULE_0__.default(dateObject.getFullYear());

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

var _addYearToRepository = function _addYearToRepository(newYear) {
  _classStaticPrivateFieldSpecGet(YearRepository, YearRepository, _years).push(newYear);
};

var _years = {
  writable: true,
  value: []
};


/***/ }),

/***/ "./src/js/calendar/calendarEventHandler.js":
/*!*************************************************!*\
  !*** ./src/js/calendar/calendarEventHandler.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleMoveMonthButton": () => (/* binding */ handleMoveMonthButton),
/* harmony export */   "previousClickedDateObject": () => (/* binding */ previousClickedDateObject),
/* harmony export */   "handleDateClick": () => (/* binding */ handleDateClick)
/* harmony export */ });
/* harmony import */ var _CalendarController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CalendarController */ "./src/js/calendar/CalendarController.js");
/* harmony import */ var _CalendarViewer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CalendarViewer */ "./src/js/calendar/CalendarViewer.js");
/* harmony import */ var _Now__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Now */ "./src/js/calendar/Now.js");
/* harmony import */ var _SelectedDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SelectedDate */ "./src/js/calendar/SelectedDate.js");
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../element */ "./src/js/element.js");
/* harmony import */ var _board_boardEventHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../board/boardEventHandler */ "./src/js/board/boardEventHandler.js");






var handleMoveMonthButton = function handleMoveMonthButton(event) {
  var clickedButton = event.target.classList[1];
  (0,_board_boardEventHandler__WEBPACK_IMPORTED_MODULE_5__.removeBoard)();

  if (clickedButton === "previous-month-button") {
    _SelectedDate__WEBPACK_IMPORTED_MODULE_3__.default.setMonthOfDateObject(_SelectedDate__WEBPACK_IMPORTED_MODULE_3__.default.getMonth() - 1);
  }

  if (clickedButton === "next-month-button") {
    _SelectedDate__WEBPACK_IMPORTED_MODULE_3__.default.setMonthOfDateObject(_SelectedDate__WEBPACK_IMPORTED_MODULE_3__.default.getMonth() + 1);
  }

  _SelectedDate__WEBPACK_IMPORTED_MODULE_3__.default.setDateOfDateObject(1);
  _element__WEBPACK_IMPORTED_MODULE_4__.$differenceWithClickedDate.textContent = "";
  _CalendarViewer__WEBPACK_IMPORTED_MODULE_1__.default.display();
};
var previousClickedDateObject;
var handleDateClick = function handleDateClick(dateOfCalendar, dateElement) {
  return function () {
    previousClickedDateObject = _SelectedDate__WEBPACK_IMPORTED_MODULE_3__.default.getDateObject();
    _SelectedDate__WEBPACK_IMPORTED_MODULE_3__.default.setDateOfDateObject(dateOfCalendar.getDateNumber());
    handleTodayClick(dateOfCalendar);
    handleClickDifferentDate(dateOfCalendar, dateElement);
    (0,_board_boardEventHandler__WEBPACK_IMPORTED_MODULE_5__.handleBoardViewWhenDateClick)(dateOfCalendar);
  };
};

var handleTodayClick = function handleTodayClick(dateOfCalendar) {
  if (_Now__WEBPACK_IMPORTED_MODULE_2__.default.isDateToday(dateOfCalendar.getDateObject())) {
    _CalendarViewer__WEBPACK_IMPORTED_MODULE_1__.default.display();
    _element__WEBPACK_IMPORTED_MODULE_4__.$differenceWithClickedDate.textContent = "Today";
    return;
  }
};

var handleClickDifferentDate = function handleClickDifferentDate(dateOfCalendar, dateElement) {
  var now = _Now__WEBPACK_IMPORTED_MODULE_2__.default.getDateObject();
  var ONE_DAY = 1000 * 60 * 60 * 24;
  var $dateDifferenceFromNow = Math.ceil((dateOfCalendar.getDateObject() - now) / ONE_DAY);
  _CalendarViewer__WEBPACK_IMPORTED_MODULE_1__.default.display();

  if ($dateDifferenceFromNow) {
    displayClickedResult(dateElement, $dateDifferenceFromNow);
  }
};

var displayClickedResult = function displayClickedResult(dateElement, $dateDifferenceFromNow) {
  dateElement.style.color = "blue";
  dateElement.style.fontWeight = 1000;
  _element__WEBPACK_IMPORTED_MODULE_4__.$differenceWithClickedDate.textContent = "".concat(Math.abs($dateDifferenceFromNow) < 2 ? "".concat($dateDifferenceFromNow, " day") : "".concat($dateDifferenceFromNow, " days"), " difference from Today");
};

/***/ }),

/***/ "./src/js/calendar/day.js":
/*!********************************!*\
  !*** ./src/js/calendar/day.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DAYS": () => (/* binding */ DAYS)
/* harmony export */ });
var DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

/***/ }),

/***/ "./src/js/element.js":
/*!***************************!*\
  !*** ./src/js/element.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$selectedDateText": () => (/* binding */ $selectedDateText),
/* harmony export */   "$selectedMonthText": () => (/* binding */ $selectedMonthText),
/* harmony export */   "$selectedDayText": () => (/* binding */ $selectedDayText),
/* harmony export */   "$selectedYearText": () => (/* binding */ $selectedYearText),
/* harmony export */   "$allDatesInCalendar": () => (/* binding */ $allDatesInCalendar),
/* harmony export */   "$previousMonthButton": () => (/* binding */ $previousMonthButton),
/* harmony export */   "$nextMonthButton": () => (/* binding */ $nextMonthButton),
/* harmony export */   "$differenceWithClickedDate": () => (/* binding */ $differenceWithClickedDate),
/* harmony export */   "$boardElement": () => (/* binding */ $boardElement),
/* harmony export */   "$boardDateText": () => (/* binding */ $boardDateText),
/* harmony export */   "$boardButtonDeleteAll": () => (/* binding */ $boardButtonDeleteAll),
/* harmony export */   "$boardButtonAdd": () => (/* binding */ $boardButtonAdd),
/* harmony export */   "$boardFormContainer": () => (/* binding */ $boardFormContainer),
/* harmony export */   "$taskContentTextInput": () => (/* binding */ $taskContentTextInput),
/* harmony export */   "$taskSubmissionOK": () => (/* binding */ $taskSubmissionOK),
/* harmony export */   "$taskSubmissionCancel": () => (/* binding */ $taskSubmissionCancel),
/* harmony export */   "$taskList": () => (/* binding */ $taskList)
/* harmony export */ });
var $selectedDateText = document.getElementById("jsSelectedDateText");
var $selectedMonthText = document.getElementById("jsSelectedMonthText");
var $selectedDayText = document.getElementById("jsSelectedDayText");
var $selectedYearText = document.getElementById("jsSelectedYearText");
var $allDatesInCalendar = document.querySelectorAll("#jsCalendarTable > tbody td");
var $previousMonthButton = document.getElementById("jsPreviousMonthButton");
var $nextMonthButton = document.getElementById("jsNextMonthButton");
var $differenceWithClickedDate = document.getElementById("jsDifferenceWithClickedDate");
var $boardElement = document.getElementById("jsBoard");
var $boardDateText = document.getElementById("jsBoardDateText");
var $boardButtonDeleteAll = document.getElementById("jsBoardButtonDeleteAll");
var $boardButtonAdd = document.getElementById("jsBoardButtonAdd");
var $boardFormContainer = document.getElementById("jsBoardFormContainer");
var $taskContentTextInput = document.getElementById("jsTaskContentTextInput");
var $taskSubmissionOK = document.getElementById("jsTaskSubmissionOK");
var $taskSubmissionCancel = document.getElementById("jsTaskSubmissionCancel");
var $taskList = document.getElementById("jsTaskList");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calendar_CalendarController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar/CalendarController */ "./src/js/calendar/CalendarController.js");

new _calendar_CalendarController__WEBPACK_IMPORTED_MODULE_0__.default();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map