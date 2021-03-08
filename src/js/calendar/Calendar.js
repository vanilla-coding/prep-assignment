import Now from "./Now";
import SelectedDate from "./SelectedDate";
import YearRepository from "./YearRepository";

export default class Calendar {
  #yearRepository;

  constructor() {
    this.#yearRepository = this.#getYearRepository();
  }

  #getYearRepository() {
    if (!YearRepository.hasYearInRepository()) {
      YearRepository.createNewYearByDateObject(Now.getDateObject());
    }
    return YearRepository.getYearRepository();
  }

  getThisMonthInformation() {
    const selectedDate = SelectedDate.getDateObject();
    const thisYear = YearRepository.getYearByDateObject(selectedDate);
    const thisMonth = thisYear.getMonth(selectedDate);
    const dayOfFirstDate = thisMonth.getDayOfFirstDate();
    const lastDateNumber = thisMonth.getLastDateNumber();
    return { thisMonth, dayOfFirstDate, lastDateNumber };
  }

  checkYearExistenceByDateObject(dateObject) {
    return YearRepository.hasYearInRepository(dateObject.getFullYear());
  }

  createNewYearByDateObject(dateObject) {
    YearRepository.createNewYearByDateObject(dateObject);
  }
}
