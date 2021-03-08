import Board from "../board/Board";
import BoardRepository from "../board/BoardRepository";
import SelectedDate from "./SelectedDate";

export default class DateOfCalendar {
  #number;
  #monthNumber;
  #yearNumber;
  #board;

  constructor(dateNumber, monthObject, yearObject) {
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
}
