export default class Now {
  static #nowObject = new Date();

  static getDateObject() {
    return this.#nowObject;
  }

  static isDateToday(dateObject) {
    return (
      this.#nowObject.getDate() === dateObject.getDate() &&
      this.#nowObject.getMonth() === dateObject.getMonth() &&
      this.#nowObject.getFullYear() === dateObject.getFullYear()
    );
  }
}
