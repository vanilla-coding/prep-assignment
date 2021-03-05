"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _elements = require("../elements");

var _boardElementEventHandler = require("./boardElementEventHandler");

var _TaskController = _interopRequireDefault(require("./Task/TaskController"));

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

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

var _board = new WeakMap();

var _dateOfCalendar = new WeakMap();

var _identifier = new WeakMap();

var _createElement = new WeakSet();

var _addClassName = new WeakSet();

var _appendChild = new WeakSet();

var _addContent = new WeakSet();

var _addEventListener = new WeakSet();

var BoardController = /*#__PURE__*/function () {
  function BoardController(board) {
    _classCallCheck(this, BoardController);

    _addEventListener.add(this);

    _addContent.add(this);

    _appendChild.add(this);

    _addClassName.add(this);

    _createElement.add(this);

    _board.set(this, {
      writable: true,
      value: void 0
    });

    _dateOfCalendar.set(this, {
      writable: true,
      value: void 0
    });

    _identifier.set(this, {
      writable: true,
      value: void 0
    });

    _defineProperty(this, "$board", void 0);

    _defineProperty(this, "$boardHeader", void 0);

    _defineProperty(this, "$boardDateText", void 0);

    _defineProperty(this, "$boardAddTaskButton", void 0);

    _defineProperty(this, "$boardDeleteAllButton", void 0);

    _defineProperty(this, "$boardCloseButton", void 0);

    _defineProperty(this, "$boardContent", void 0);

    _defineProperty(this, "$taskList", void 0);

    _defineProperty(this, "TASK_LIST_TITLE", "TASK for");

    _defineProperty(this, "TASK_IDENTIFIER_PREFIX", ".task-list--");

    _classPrivateFieldSet(this, _board, board);

    _classPrivateFieldSet(this, _dateOfCalendar, _classPrivateFieldGet(this, _board).getDateOfCalendar());

    var _classPrivateFieldGet2 = _classPrivateFieldGet(this, _dateOfCalendar).getNumberListOfDateObject(),
        _classPrivateFieldGet3 = _slicedToArray(_classPrivateFieldGet2, 3),
        yearNumber = _classPrivateFieldGet3[0],
        _monthNumber = _classPrivateFieldGet3[1],
        _dateNumber = _classPrivateFieldGet3[2];

    _classPrivateFieldSet(this, _identifier, "".concat(yearNumber, "-").concat(_monthNumber + 1, "-").concat(_dateNumber));
  }

  _createClass(BoardController, [{
    key: "display",
    value: function display() {
      _classPrivateFieldGet(this, _board).changeVisibility();

      _classPrivateMethodGet(this, _createElement, _createElement2).call(this);

      _classPrivateMethodGet(this, _addClassName, _addClassName2).call(this);

      _classPrivateMethodGet(this, _appendChild, _appendChild2).call(this);

      _classPrivateMethodGet(this, _addContent, _addContent2).call(this);

      _classPrivateMethodGet(this, _addEventListener, _addEventListener2).call(this);

      this.displayTasks();
    }
  }, {
    key: "displayTasks",
    value: function displayTasks() {
      this.resetBoardElement();

      var tasks = _classPrivateFieldGet(this, _board).getAllTasks();

      tasks.forEach(_TaskController["default"].createAndAppendTaskElement);
    }
  }, {
    key: "resetBoardElement",
    value: function resetBoardElement() {
      var taskListElement = document.querySelector("".concat(this.TASK_IDENTIFIER_PREFIX).concat(_classPrivateFieldGet(this, _identifier)));
      taskListElement.innerHTML = "";
    }
  }, {
    key: "close",
    value: function close() {
      _classPrivateFieldGet(this, _board).changeVisibility();

      _elements.$calendar.removeChild(this.$board);
    }
  }]);

  return BoardController;
}();

exports["default"] = BoardController;

var _createElement2 = function _createElement2() {
  this.$board = document.createElement("div");
  this.$boardHeader = document.createElement("div");
  this.$boardDateText = document.createElement("h3");
  this.$boardAddTaskButton = document.createElement("button");
  this.$boardDeleteAllButton = document.createElement("button");
  this.$boardCloseButton = document.createElement("button");
  this.$boardContent = document.createElement("div");
  this.$taskList = document.createElement("ul");
};

var _addClassName2 = function _addClassName2() {
  this.$board.classList.add("board");
  this.$boardHeader.classList.add("board__header");
  this.$boardDateText.classList.add("board__date--text");
  this.$boardAddTaskButton.classList.add("board__button");
  this.$boardAddTaskButton.classList.add("board__button--add");
  this.$boardDeleteAllButton.classList.add("board__button");
  this.$boardDeleteAllButton.classList.add("board__button--delete-all");
  this.$boardCloseButton.classList.add("board__button");
  this.$boardCloseButton.classList.add("board__button--close");
  this.$boardContent.classList.add("board__content");
  this.$taskList.classList.add("task-list--".concat(_classPrivateFieldGet(this, _identifier)));
};

var _appendChild2 = function _appendChild2() {
  _elements.$calendar.appendChild(this.$board);

  this.$board.appendChild(this.$boardHeader);
  this.$boardHeader.appendChild(this.$boardAddTaskButton);
  this.$boardHeader.appendChild(this.$boardDateText);
  this.$boardHeader.appendChild(this.$boardDeleteAllButton);
  this.$boardHeader.appendChild(this.$boardCloseButton);
  this.$board.appendChild(this.$boardContent);
  this.$boardContent.appendChild(this.$taskList);
};

var _addContent2 = function _addContent2() {
  this.$boardAddTaskButton.innerHTML = "<i class=\"fas fa-plus\"></i>";
  this.$boardDeleteAllButton.innerHTML = "<i class=\"fas fa-trash-alt\"></i> ALL";
  this.$boardCloseButton.innerHTML = "<i class=\"fas fa-times-circle\"></i>";

  var _classPrivateFieldGet4 = _classPrivateFieldGet(this, _dateOfCalendar).getNumberListOfDateObject(),
      _classPrivateFieldGet5 = _slicedToArray(_classPrivateFieldGet4, 3),
      _ = _classPrivateFieldGet5[0],
      monthNumber = _classPrivateFieldGet5[1],
      dateNumber = _classPrivateFieldGet5[2];

  this.$boardDateText.textContent = "".concat(this.TASK_LIST_TITLE, " ").concat(monthNumber + 1, ".").concat(dateNumber);
};

var _addEventListener2 = function _addEventListener2() {
  this.$boardAddTaskButton.addEventListener("click", (0, _boardElementEventHandler.handleBoardButtonAdd)(_classPrivateFieldGet(this, _board), this.$board));
  this.$boardDeleteAllButton.addEventListener("click", (0, _boardElementEventHandler.handleBoardButtonDeleteAll)(this, _classPrivateFieldGet(this, _board)));
  this.$boardCloseButton.addEventListener("click", (0, _boardElementEventHandler.handleBoardButtonClose)(_classPrivateFieldGet(this, _board)));
};