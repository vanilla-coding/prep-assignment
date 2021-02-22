import DateOfCalendar from "./DateOfCalendar";

export default class Month {
  static #names = [
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

  dateRepository = [];
  yearNumber;
  yearBelongTo;
  number;
  monthName;
  dayOfFirstDate; // 첫 날의 요일
  lastDate;

  constructor(yearObject, yearNumber, monthNumber) {
    this.yearBelongTo = yearObject;
    this.yearNumber = yearNumber;
    this.number = monthNumber;
    this.monthName = Month.#names[this.number];
    this.dayOfFirstDate = new Date(yearNumber, monthNumber, 1).getDay();
    this.lastDate = new Date(yearNumber, monthNumber + 1, 0).getDate();
    this.addDatesToRepository();
  }

  addDatesToRepository() {
    for (let i = 1; i <= this.lastDate; i++) {
      const newDate = new DateOfCalendar(i, this, this.number, this.yearNumber);
      this.dateRepository.push(newDate);
    }
  }

  getDayOfFirstDate() {
    return this.dayOfFirstDate;
  }

  getLastDate() {
    return this.lastDate;
  }

  getMonthNumber() {
    return this.number;
  }

  getYearNumber() {
    return this.yearNumber;
  }

  getDateByNumber(dateNumber) {
    return this.dateRepository.find((dateObject) => {
      return dateObject.getNumber() === dateNumber;
    });
  }

  static getNames() {
    return this.#names;
  }
}
