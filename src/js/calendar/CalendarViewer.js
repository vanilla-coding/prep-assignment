import { DAYS } from "./day";
import Month from "./Month";
import SelectedDate from "./SelectedDate";
import YearRepository from "./YearRepository";
import { handleDateClick } from "./handler";
import CalendarController from "./CalendarController";
import {
  selectedDateText,
  selectedMonthText,
  selectedDayText,
  selectedYearText,
  allDatesInCalendar,
} from "./element";

export default class CalendarViewer {
  static #selectedDateObject = SelectedDate.getDate();
  static #dateEventListenerRepository = {};

  static display() {
    CalendarViewer.#displayHeader();
    CalendarViewer.#displayToday();

    CalendarViewer.#displaySelectedCalendar();
  }

  static #displayHeader() {
    const header = document.querySelectorAll("table tbody tr th");
    let i = 0;
    header.forEach((th) => {
      th.textContent = DAYS[i++];
    });
  }
  static #displayToday() {
    const now = new Date();
    document.getElementById("jsTodayDay").textContent = DAYS[now.getDay()];
    document.getElementById("jsTodayDate").textContent = now.getDate();
    document.getElementById("jsTodayMonth").textContent = Month.getNames()[
      now.getMonth()
    ];
    document.getElementById("jsTodayYear").textContent = now.getFullYear();
  }

  static #displaySelectedCalendar() {
    this.#displaySelectedDateText();
    this.#displaySelectedDates();
  }

  static #displaySelectedDateText() {
    selectedDayText.textContent = DAYS[this.#selectedDateObject.getDay()];
    selectedDateText.textContent = this.#selectedDateObject.getDate();
    selectedMonthText.textContent = Month.getNames()[
      this.#selectedDateObject.getMonth()
    ];
    selectedYearText.textContent = this.#selectedDateObject.getFullYear();
  }

  static #displaySelectedDates() {
    if (
      !YearRepository.hasYearInRepository(
        this.#selectedDateObject.getFullYear()
      )
    ) {
      YearRepository.createNewYear(this.#selectedDateObject);
    }
    this.#resetCalendarDates();
    this.#printCalendarDates(this.#selectedDateObject);
  }

  static #resetCalendarDates() {
    const totalCalendarCells = allDatesInCalendar.length;
    for (let i = 0; i < totalCalendarCells; i++) {
      allDatesInCalendar[i].textContent = "";
      allDatesInCalendar[i].style.fontWeight = "normal";
      allDatesInCalendar[i].className = "";

      allDatesInCalendar[i].removeEventListener(
        "click",
        this.#dateEventListenerRepository[i]
      );
    }
  }

  static #printCalendarDates(selectedDateObject) {
    const thisYear = YearRepository.getYear(selectedDateObject);
    const thisMonth = thisYear.getMonth(selectedDateObject);
    let dayOfFirstDate = thisMonth.getDayOfFirstDate();
    let lastDate = thisMonth.getLastDate();
    for (
      let i = 1, indexForDate = dayOfFirstDate;
      i <= lastDate;
      i++, indexForDate++
    ) {
      const dateElement = allDatesInCalendar[indexForDate];
      const dateObject = thisMonth.getDateByNumber(i).getDate();

      dateElement.textContent = i;
      dateElement.classList.add("date-inside");
      if (CalendarController.isDateToday(dateObject)) {
        dateElement.style.color = "red";
        dateElement.style.fontWeight = 1000;
      } else {
        dateElement.style.color = "black";
      }
      const clickCallBack = handleDateClick(dateObject, dateElement);
      dateElement.addEventListener("click", clickCallBack);

      this.#dateEventListenerRepository[indexForDate] = clickCallBack; // 이벤트 리스너 지우기 위해 따로 저장
    }
  }
}
