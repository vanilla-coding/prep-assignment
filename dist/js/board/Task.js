"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Status = _interopRequireDefault(require("./Status"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

    _classPrivateFieldSet(this, _status, new _Status["default"]());

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

exports["default"] = Task;