import DateOfCalendar from "./DateOfCalendar";

export default class Month {
  static #NAMES = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  #dateRepository = [];
  #yearNumber;
  #yearBelongTo;
  #number;
  #monthName;
  #dayOfFirstDate; // 첫 날의 요일
  #lastDate;

  constructor(yearObject, monthNumber) {
    this.#yearBelongTo = yearObject;
    this.#yearNumber = yearObject.getNumber();
    this.#number = monthNumber;
    this.#monthName = Month.#NAMES[this.#number];
    this.#dayOfFirstDate = new Date(this.#yearNumber, monthNumber, 1).getDay();
    this.#lastDate = new Date(this.#yearNumber, monthNumber + 1, 0).getDate();
    this.#addDatesToRepository();
  }

  #addDatesToRepository() {
    for (let i = 1; i <= this.#lastDate; i++) {
      const newDate = new DateOfCalendar(i, this, this.#yearBelongTo);
      this.#dateRepository.push(newDate);
    }
  }

  getDayOfFirstDate() {
    return this.#dayOfFirstDate;
  }

  getLastDate() {
    return this.#lastDate;
  }

  getNumber() {
    return this.#number;
  }

  getYearNumber() {
    return this.#yearNumber;
  }

  getDateOfCalendarByNumber(dateNumber) {
    return this.#dateRepository.find((dateOfCalendar) => {
      return dateOfCalendar.getDateNumber() === dateNumber;
    });
  }

  static getNames() {
    return this.#NAMES;
  }
}
