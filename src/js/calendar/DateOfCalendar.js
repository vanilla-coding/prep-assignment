export default class DateOfCalendar {
  #monthBelongTo;
  #yearBelongTo;
  #number;
  #monthNumber;
  #yearNumber;
  #taskRepository;

  constructor(dateNumber, monthObject, yearObject) {
    this.#monthBelongTo = monthObject;
    this.#yearBelongTo = yearObject;
    this.#number = dateNumber;
    this.#yearNumber = yearObject.getNumber();
    this.#monthNumber = monthObject.getNumber();
  }

  getNumber() {
    return this.#number;
  }

  getDate() {
    return new Date(this.#yearNumber, this.#monthNumber, this.#number);
  }
}
