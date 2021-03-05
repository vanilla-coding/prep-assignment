import Board from "./Board";

export default class BoardRepository {
  static #boards = [];

  static createAndGetNewBoard(dateOfCalendar) {
    const board = new Board(dateOfCalendar);
    BoardRepository.#addBoardToRepository(board);
    return board;
  }

  static #addBoardToRepository(board) {
    BoardRepository.#boards.push(board);
  }

  static getBoards() {
    return this.#boards;
  }

  static getNumberOfBoardsCurrentDisplayed() {
    return this.#boards.length;
  }
}
