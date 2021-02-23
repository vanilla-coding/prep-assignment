export default class SelectedDate {
  static #date = new Date();

  static getDateObject() {
    return new Date(SelectedDate.#date.valueOf());
  }

  static setMonthOfDateObject(newMonthNumber) {
    SelectedDate.#date.setMonth(newMonthNumber);
  }

  static setDateOfDateObject(newDateNumber) {
    SelectedDate.#date.setDate(newDateNumber);
  }

  static getMonth() {
    return SelectedDate.#date.getMonth();
  }

  static getDay() {
    return SelectedDate.#date.getDay();
  }

  static getDate() {
    return SelectedDate.#date.getDate();
  }

  static getFullYear() {
    return SelectedDate.#date.getFullYear();
  }
}
