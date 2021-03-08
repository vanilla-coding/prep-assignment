export default class SelectedDate {
  static #date = new Date();
  static #previousSelectedDate = null;

  static getDateObject() {
    return new Date(SelectedDate.#date.valueOf());
  }

  static getPreviousSelectedDate() {
    return SelectedDate.#previousSelectedDate;
  }

  static setMonthOfDateObject(newMonthNumber) {
    SelectedDate.#previousSelectedDate = new Date(SelectedDate.#date.valueOf());
    SelectedDate.#date.setMonth(newMonthNumber);
  }

  static setDateNumberOfDateObject(newDateNumber) {
    SelectedDate.#previousSelectedDate = new Date(SelectedDate.#date.valueOf());
    SelectedDate.#date.setDate(newDateNumber);
  }

  static getMonth() {
    return SelectedDate.#date.getMonth();
  }

  static getDay() {
    return SelectedDate.#date.getDay();
  }

  static getDateNumber() {
    return SelectedDate.#date.getDate();
  }

  static getFullYear() {
    return SelectedDate.#date.getFullYear();
  }
}
