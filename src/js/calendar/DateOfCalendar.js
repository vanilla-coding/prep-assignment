export default class DateOfCalendar {
  monthBelongTo;
  number;
  monthNumber;
  yearNumber;
  taskRepository;

  constructor(dateNumber, monthObject, monthNumber, yearNumber) {
    this.monthBelongTo = monthObject;
    this.number = dateNumber;
    this.monthNumber = monthNumber;
    this.yearNumber = yearNumber;
  }

  getNumber() {
    return this.number;
  }

  getDate() {
    return new Date(this.yearNumber, this.monthNumber, this.number);
  }
}
