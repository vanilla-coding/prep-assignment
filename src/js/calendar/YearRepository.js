import Year from "./Year";

export default class YearRepository {
  static #years = [];

  static createNewYear(dateObject) {
    const newYear = new Year(dateObject.getFullYear());
    YearRepository.#addYearToRepository(newYear);
  }

  static #addYearToRepository(newYear) {
    YearRepository.#years.push(newYear);
  }

  static hasYearInRepository(yearNumber) {
    return (
      YearRepository.#years.filter((yearObject) => {
        return yearObject.getNumber() === yearNumber;
      }).length !== 0
    );
  }

  static getYear(dateObject) {
    return YearRepository.#years.find((yearObject) => {
      return yearObject.getNumber() === dateObject.getFullYear();
    });
  }
}
