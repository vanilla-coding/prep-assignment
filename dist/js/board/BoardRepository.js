"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Board = _interopRequireDefault(require("./Board"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classStaticPrivateMethodGet(receiver, classConstructor, method) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } return method; }

var BoardRepository = /*#__PURE__*/function () {
  function BoardRepository() {
    _classCallCheck(this, BoardRepository);
  }

  _createClass(BoardRepository, null, [{
    key: "createAndGetNewBoard",
    value: function createAndGetNewBoard(dateOfCalendar) {
      var board = new _Board["default"](dateOfCalendar);

      _classStaticPrivateMethodGet(BoardRepository, BoardRepository, _addBoardToRepository).call(BoardRepository, board);

      return board;
    }
  }, {
    key: "getBoards",
    value: function getBoards() {
      return _classStaticPrivateFieldSpecGet(this, BoardRepository, _boards);
    }
  }, {
    key: "getNumberOfBoardsCurrentDisplayed",
    value: function getNumberOfBoardsCurrentDisplayed() {
      return _classStaticPrivateFieldSpecGet(this, BoardRepository, _boards).length;
    }
  }]);

  return BoardRepository;
}();

exports["default"] = BoardRepository;

var _addBoardToRepository = function _addBoardToRepository(board) {
  _classStaticPrivateFieldSpecGet(BoardRepository, BoardRepository, _boards).push(board);
};

var _boards = {
  writable: true,
  value: []
};