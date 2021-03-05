"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _TaskSubmissionFormEventHandler = require("./TaskSubmissionFormEventHandler");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

var _board = new WeakMap();

var _createElement = new WeakSet();

var _addClassName = new WeakSet();

var _appendChild = new WeakSet();

var _addContent = new WeakSet();

var _addEventListener = new WeakSet();

var TaskSubmissionForm = /*#__PURE__*/function () {
  function TaskSubmissionForm(board, $board) {
    _classCallCheck(this, TaskSubmissionForm);

    _addEventListener.add(this);

    _addContent.add(this);

    _appendChild.add(this);

    _addClassName.add(this);

    _createElement.add(this);

    _board.set(this, {
      writable: true,
      value: void 0
    });

    _defineProperty(this, "$board", void 0);

    _defineProperty(this, "$formContainer", void 0);

    _defineProperty(this, "$form", void 0);

    _defineProperty(this, "$taskContentTextInput", void 0);

    _defineProperty(this, "$buttonContainer", void 0);

    _defineProperty(this, "$submitButton", void 0);

    _defineProperty(this, "$cancelButton", void 0);

    this.$board = $board;

    _classPrivateFieldSet(this, _board, board);
  }

  _createClass(TaskSubmissionForm, [{
    key: "display",
    value: function display() {
      _classPrivateMethodGet(this, _createElement, _createElement2).call(this);

      _classPrivateMethodGet(this, _addClassName, _addClassName2).call(this);

      _classPrivateMethodGet(this, _appendChild, _appendChild2).call(this);

      _classPrivateMethodGet(this, _addContent, _addContent2).call(this);

      _classPrivateMethodGet(this, _addEventListener, _addEventListener2).call(this);
    }
  }, {
    key: "close",
    value: function close() {
      this.$board.removeChild(this.$formContainer);
    }
  }]);

  return TaskSubmissionForm;
}();

exports["default"] = TaskSubmissionForm;

var _createElement2 = function _createElement2() {
  this.$formContainer = document.createElement("div");
  this.$form = document.createElement("div");
  this.$taskContentTextInput = document.createElement("textarea");
  this.$buttonContainer = document.createElement("div");
  this.$submitButton = document.createElement("button");
  this.$cancelButton = document.createElement("button");
};

var _addClassName2 = function _addClassName2() {
  this.$formContainer.classList.add("board__form-container");
  this.$form.classList.add("board__form");
  this.$taskContentTextInput.classList.add("task-content-text-input");
  this.$buttonContainer.classList.add("board__form__button-container");
  this.$submitButton.classList.add("task-submission-ok");
  this.$cancelButton.classList.add("task-submission-cancel");
};

var _appendChild2 = function _appendChild2() {
  this.$formContainer.append(this.$form);
  this.$form.append(this.$taskContentTextInput);
  this.$form.append(this.$buttonContainer);
  this.$buttonContainer.append(this.$submitButton);
  this.$buttonContainer.append(this.$cancelButton);
  this.$board.append(this.$formContainer);
};

var _addContent2 = function _addContent2() {
  this.$submitButton.textContent = "SUBMIT";
  this.$cancelButton.textContent = "CANCEL";
};

var _addEventListener2 = function _addEventListener2() {
  this.$submitButton.addEventListener("click", (0, _TaskSubmissionFormEventHandler.handleClickSubmitTaskSubmission)(_classPrivateFieldGet(this, _board), this));
  this.$cancelButton.addEventListener("click", (0, _TaskSubmissionFormEventHandler.handleClickCancelTaskSubmission)(this));
};