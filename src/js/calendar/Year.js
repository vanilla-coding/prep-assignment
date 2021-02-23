import Month from "./Month";
export default class Year {
  #number;
  #monthRepository = [];
  #TOTAL_MONTH_LENGTH = 12;

  constructor(yearNumber) {
    this.#number = yearNumber;
    this.addMonthsToRepository();
  }

  addMonthsToRepository() {
    for (let i = 0; i < this.#TOTAL_MONTH_LENGTH; i++) {
      const newMonth = new Month(this, i);
      this.#monthRepository.push(newMonth);
    }
  }

  getMonth(dateObject) {
    return this.#monthRepository.find((month) => {
      return (
        month.getYearNumber() === dateObject.getFullYear() &&
        month.getNumber() === dateObject.getMonth()
      );
    });
  }

  getNumber() {
    return this.#number;
  }
}
