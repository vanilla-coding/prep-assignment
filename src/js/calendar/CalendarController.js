import TaskController from "../board/Task/TaskController";
import {
  $previousMonthButton,
  $nextMonthButton,
  $todayDayText,
  $todayDateText,
  $todayMonthText,
  $todayYearText,
  $selectedDayText,
  $selectedDateText,
  $selectedMonthText,
  $selectedYearText,
  $allDatesInCalendar,
} from "../elements";
import {
  handleMoveMonthButton,
  createHandleClickDateOfCalendar,
} from "./calendarElementEventHandler";
import { DAYS } from "./day";
import Month from "./Month";
import Now from "./Now";
import SelectedDate from "./SelectedDate";

export default class CalendarController {
  #calendar;
  #dateOfCalendarClickEventListenerRepository = {};

  constructor(calendar) {
    this.#calendar = calendar;
    TaskController.setCalendarController(this);
  }
  initialize() {
    this.#addEventListenerToMoveButton();
    this.#printHeader();
    this.displayCalendarContents();
    this.displaySelectedDateText();
  }

  #addEventListenerToMoveButton() {
    $previousMonthButton.addEventListener("click", handleMoveMonthButton(this));
    $nextMonthButton.addEventListener("click", handleMoveMonthButton(this));
  }

  displayCalendarContents() {
    if (
      !this.#calendar.checkYearExistenceByDateObject(
        SelectedDate.getDateObject()
      )
    ) {
      this.#calendar.createNewYearByDateObject(SelectedDate.getDateObject());
    }
    this.#printTodayText();
    this.#displayDates();
  }

  displaySelectedDateText() {
    $selectedDayText.textContent = DAYS[SelectedDate.getDay()];
    $selectedDateText.textContent = SelectedDate.getDateNumber();
    $selectedMonthText.textContent = Month.getNames()[SelectedDate.getMonth()];
    $selectedYearText.textContent = SelectedDate.getFullYear();
  }

  #printHeader() {
    const header = document.querySelectorAll("table tbody tr th");
    let i = 0;
    header.forEach((th) => {
      th.textContent = DAYS[i++];
    });
  }

  #printTodayText() {
    const now = Now.getDateObject();
    $todayDayText.textContent = DAYS[now.getDay()];
    $todayDateText.textContent = now.getDate();
    $todayMonthText.textContent = Month.getNames()[now.getMonth()];
    $todayYearText.textContent = now.getFullYear();
  }

  #displayDates() {
    this.#resetDates();
    this.#printDates();
  }

  #resetDates() {
    const totalCalendarCells = $allDatesInCalendar.length;
    for (let i = 0; i < totalCalendarCells; i++) {
      $allDatesInCalendar[i].textContent = "";
      $allDatesInCalendar[i].className = "";
      $allDatesInCalendar[i].removeEventListener(
        "click",
        this.#dateOfCalendarClickEventListenerRepository[i]
      );
    }
  }

  #printDates() {
    const {
      thisMonth,
      dayOfFirstDate,
      lastDateNumber,
    } = this.#calendar.getThisMonthInformation();
    for (
      let i = 1, indexForDate = dayOfFirstDate;
      i <= lastDateNumber;
      i++, indexForDate++
    ) {
      const $dateElement = $allDatesInCalendar[indexForDate];
      const dateOfCalendar = thisMonth.getDateOfCalendarByNumber(i);
      $dateElement.textContent = i;
      $dateElement.classList.add("date-inside");
      if (Now.isDateToday(dateOfCalendar.getDateObject())) {
        $dateElement.classList.add("isToday");
      } else {
        $dateElement.classList.add("isNotToday");
      }
      const handleClickDateOfCalendar = createHandleClickDateOfCalendar(
        dateOfCalendar,
        $dateElement,
        this
      );
      $dateElement.addEventListener("click", handleClickDateOfCalendar);

      this.#dateOfCalendarClickEventListenerRepository[
        indexForDate
      ] = handleClickDateOfCalendar;

      this.#createAndAddNotificationOnDate(dateOfCalendar, $dateElement);
    }
  }

  #createAndAddNotificationOnDate(dateOfCalendar, $dateElement) {
    const taskLength = dateOfCalendar.getBoard().getTaskLength();
    if (taskLength > 0) {
      const $notification = document.createElement("div");
      $notification.classList.add("task-notification");
      $notification.textContent = taskLength;
      $dateElement.appendChild($notification);
    }
  }
}
