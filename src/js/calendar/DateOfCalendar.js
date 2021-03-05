import Board from "../board/Board";
import BoardRepository from "../board/BoardRepository";
import Status from "../board/Status";
import Task from "../board/Task/Task";
import SelectedDate from "./SelectedDate";

export default class DateOfCalendar {
  #monthBelongTo;
  #yearBelongTo;
  #number;
  #monthNumber;
  #yearNumber;
  #board;

  constructor(dateNumber, monthObject, yearObject) {
    this.#monthBelongTo = monthObject;
    this.#yearBelongTo = yearObject;
    this.#number = dateNumber;
    this.#yearNumber = yearObject.getNumber();
    this.#monthNumber = monthObject.getNumber();
    this.#board = BoardRepository.createAndGetNewBoard(this);
  }

  getDateNumber() {
    return this.#number;
  }

  getDateObject() {
    return new Date(this.#yearNumber, this.#monthNumber, this.#number);
  }

  getNumberListOfDateObject() {
    return [this.#yearNumber, this.#monthNumber, this.#number];
  }

  getBoard() {
    return this.#board;
  }

  handleClicked() {
    if (Board.getVisibility()) {
      if (SelectedDate.isDateSameWithPreviousDate(this)) {
        Board.deleteSelfElementByDateObject(this);
        return;
      }
    }
    const board = new Board(this);

    if (Board.isDateSameWithPreviousDate(this)) {
      Board.delete();
      return;
    }

    board.display();
    return;
  }
}
