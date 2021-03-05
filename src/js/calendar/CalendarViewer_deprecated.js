import { DAYS } from "./day";
import Month from "./Month";
import SelectedDate from "./SelectedDate";
import YearRepository from "./YearRepository";
import { handleDateClick } from "./calendarEventHandler_deprecated";
import {
  $selectedDateText,
  $selectedMonthText,
  $selectedDayText,
  $selectedYearText,
  $allDatesInCalendar,
} from "../elements";
import Now from "./Now";

export default class CalendarViewer_deprecated {
  static #dateEventListenerRepository = {};

  static display() {
    CalendarViewer_deprecated.#displayHeader();
    CalendarViewer_deprecated.#displayToday();

    CalendarViewer_deprecated.#displaySelectedCalendar();
  }

  static #displayHeader() {
    const header = document.querySelectorAll("table tbody tr th");
    let i = 0;
    header.forEach((th) => {
      th.textContent = DAYS[i++];
    });
  }
  static #displayToday() {
    const now = Now.getDateObject();
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
    $selectedDayText.textContent = DAYS[SelectedDate.getDay()];
    $selectedDateText.textContent = SelectedDate.getDateNumber();
    $selectedMonthText.textContent = Month.getNames()[SelectedDate.getMonth()];
    $selectedYearText.textContent = SelectedDate.getFullYear();
  }

  static #displaySelectedDates() {
    if (!YearRepository.hasYearInRepository(SelectedDate.getFullYear())) {
      YearRepository.createNewYearByDateObject(SelectedDate);
    }
    this.#resetCalendarDates();
    this.#printCalendarDates();
  }

  static #resetCalendarDates() {
    const totalCalendarCells = $allDatesInCalendar.length;
    for (let i = 0; i < totalCalendarCells; i++) {
      $allDatesInCalendar[i].textContent = "";
      $allDatesInCalendar[i].className = "";
      $allDatesInCalendar[i].removeEventListener(
        "click",
        this.#dateEventListenerRepository[i]
      );
    }
  }

  static #printCalendarDates() {
    const thisYear = YearRepository.getYearByDateObject(
      SelectedDate.getDateObject()
    );
    const thisMonth = thisYear.getMonth(SelectedDate.getDateObject());
    let dayOfFirstDate = thisMonth.getDayOfFirstDate();
    let lastDate = thisMonth.getLastDate();
    for (
      let i = 1, indexForDate = dayOfFirstDate;
      i <= lastDate;
      i++, indexForDate++
    ) {
      const $dateElement = $allDatesInCalendar[indexForDate];
      const dateOfCalendarInstance = thisMonth.getDateOfCalendarByNumber(i);
      $dateElement.textContent = i;
      $dateElement.classList.add("date-inside");
      if (Now.isDateToday(dateOfCalendarInstance.getDateObject())) {
        $dateElement.classList.add("isToday");
      } else {
        $dateElement.classList.add("isNotToday");
      }
      const clickCallBack = handleDateClick(
        dateOfCalendarInstance,
        $dateElement
      );
      $dateElement.addEventListener("click", clickCallBack);

      CalendarViewer_deprecated.#createAndAddNotificationOnDate(
        dateOfCalendarInstance,
        $dateElement
      );

      this.#dateEventListenerRepository[indexForDate] = clickCallBack; // 이벤트 리스너 지우기 위해 따로 저장
    }
  }

  static #createAndAddNotificationOnDate(dateOfCalendarInstance, $dateElement) {
    const taskLength = dateOfCalendarInstance.getTaskLength();
    if (taskLength > 0) {
      const $notification = document.createElement("div");
      $notification.classList.add("task-notification");
      $notification.textContent = taskLength;
      $dateElement.appendChild($notification);
    }
  }
}
