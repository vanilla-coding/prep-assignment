export default class SelectedDate {
  static #date = new Date();

  static getDate() {
    return this.#date;
  }

  static setMonthOfDateObject(newMonthNumber) {
    this.#date.setMonth(newMonthNumber);
  }

  static setDateOfDateObject(newDateNumber) {
    this.#date.setDate(newDateNumber);
  }
}
