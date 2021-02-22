export default class Now {
  static #nowObject = new Date();

  static getDate() {
    return this.#nowObject;
  }
}
