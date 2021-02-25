"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var _statusName = new WeakMap();

var _cannotUpdateMessage = new WeakMap();

var Status = /*#__PURE__*/function () {
  // 초기 상태 정보 목록
  // 커스텀 상태 정보
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

exports["default"] = Status;
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