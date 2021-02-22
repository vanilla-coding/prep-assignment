import Month from "./Month";

export default class Year {
  number;
  monthRepository = [];
  constructor(yearNumber) {
    this.number = yearNumber;
    this.addMonthsToRepository();
  }

  addMonthsToRepository() {
    for (let i = 0; i < 12; i++) {
      const newMonth = new Month(this, this.number, i);
      this.monthRepository.push(newMonth);
    }
  }

  getMonth(dateObject) {
    return this.monthRepository.find((month) => {
      return (
        month.getYearNumber() === dateObject.getFullYear() &&
        month.getMonthNumber() === dateObject.getMonth()
      );
    });
  }

  getYearNumber() {
    return this.number;
  }
}
