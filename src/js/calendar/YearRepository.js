import Year from "./Year";

export default class YearRepository {
  static #years = [];

  static createNewYear(dateObject) {
    const newYear = new Year(dateObject.getFullYear());
    this.#addYearToRepository(newYear);
  }

  static #addYearToRepository(year) {
    if (year instanceof Year) {
      this.#years.push(year);
      return;
    }
    alert("error!");
  }

  static hasYearInRepository(yearNumber) {
    return (
      this.#years.filter((yearObject) => {
        return yearObject.getYearNumber() === yearNumber;
      }).length !== 0
    );
  }

  static getYear(dateObject) {
    return this.#years.find((yearObject) => {
      return yearObject.getYearNumber() === dateObject.getFullYear();
    });
  }

  static getYears() {
    return this.#years;
  }
}
