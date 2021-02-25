import { DAYS } from "./day";
import Month from "./Month";
import SelectedDate from "./SelectedDate";
import YearRepository from "./YearRepository";
import { handleDateClick } from "../calendarEventHandler";
import CalendarController from "./CalendarController";
import {
  selectedDateText,
  selectedMonthText,
  selectedDayText,
  selectedYearText,
  allDatesInCalendar,
} from "../element";

export default class CalendarViewer {
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
    selectedDayText.textContent = DAYS[SelectedDate.getDay()];
    selectedDateText.textContent = SelectedDate.getDate();
    selectedMonthText.textContent = Month.getNames()[SelectedDate.getMonth()];
    selectedYearText.textContent = SelectedDate.getFullYear();
  }

  static #displaySelectedDates() {
    if (!YearRepository.hasYearInRepository(SelectedDate.getFullYear())) {
      YearRepository.createNewYear(SelectedDate);
    }
    this.#resetCalendarDates();
    this.#printCalendarDates();
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

  static #printCalendarDates() {
    const thisYear = YearRepository.getYear(SelectedDate.getDateObject());
    const thisMonth = thisYear.getMonth(SelectedDate.getDateObject());
    let dayOfFirstDate = thisMonth.getDayOfFirstDate();
    let lastDate = thisMonth.getLastDate();
    for (
      let i = 1, indexForDate = dayOfFirstDate;
      i <= lastDate;
      i++, indexForDate++
    ) {
      const dateElement = allDatesInCalendar[indexForDate];
      const dateOfCalendarInstance = thisMonth.getDateByNumber(i);
      dateElement.textContent = i;
      dateElement.classList.add("date-inside");
      if (CalendarController.isDateToday(dateOfCalendarInstance.getDate())) {
        dateElement.style.color = "red";
        dateElement.style.fontWeight = 1000;
      } else {
        dateElement.style.color = "black";
      }
      const clickCallBack = handleDateClick(
        dateOfCalendarInstance,
        dateElement
      );
      dateElement.addEventListener("click", clickCallBack);

      CalendarViewer.#createAndAddNotificationOnDate(
        dateOfCalendarInstance,
        dateElement
      );

      this.#dateEventListenerRepository[indexForDate] = clickCallBack; // 이벤트 리스너 지우기 위해 따로 저장
    }
  }

  static #createAndAddNotificationOnDate(dateOfCalendarInstance, dateElement) {
    const taskLength = dateOfCalendarInstance.getTaskLength();
    if (taskLength > 0) {
      const notification = document.createElement("div");
      notification.classList.add("task-notification");
      notification.textContent = taskLength;
      dateElement.appendChild(notification);
    }
  }
}
