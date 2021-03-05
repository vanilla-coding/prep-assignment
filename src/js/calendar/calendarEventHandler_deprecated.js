import CalendarViewer_deprecated from "./CalendarViewer_deprecated";
import Now from "./Now";
import SelectedDate from "./SelectedDate";
import { $differenceWithClickedDate } from "../elements";
import {
  handleBoardViewWhenDateClick,
  removeBoard,
} from "../board/boardEventHandler_deprecated";

export const handleMoveMonthButton = (event) => {
  const clickedButton = event.target.classList[1];

  removeBoard();

  if (clickedButton === "previous-month-button") {
    SelectedDate.setMonthOfDateObject(SelectedDate.getMonth() - 1);
  }
  if (clickedButton === "next-month-button") {
    SelectedDate.setMonthOfDateObject(SelectedDate.getMonth() + 1);
  }
  SelectedDate.setDateNumberOfDateObject(1);
  $differenceWithClickedDate.textContent = "";
  CalendarViewer_deprecated.display();
};

export let previousClickedDateObject;
export const handleDateClick = (dateOfCalendar, $dateElement) => {
  return () => {
    previousClickedDateObject = SelectedDate.getDateObject();
    SelectedDate.setDateNumberOfDateObject(dateOfCalendar.getDateNumber());

    handleTodayClick(dateOfCalendar);
    handleClickDifferentDate(dateOfCalendar, $dateElement);
    handleBoardViewWhenDateClick(dateOfCalendar);
  };
};

const handleTodayClick = (dateOfCalendar) => {
  if (Now.isDateToday(dateOfCalendar.getDateObject())) {
    CalendarViewer_deprecated.display();
    $differenceWithClickedDate.textContent = "Today";
    return;
  }
};

const handleClickDifferentDate = (dateOfCalendar, $dateElement) => {
  const now = Now.getDateObject();
  const ONE_DAY = 1000 * 60 * 60 * 24;
  const $dateDifferenceFromNow = Math.ceil(
    (dateOfCalendar.getDateObject() - now) / ONE_DAY
  );

  CalendarViewer_deprecated.display();

  if ($dateDifferenceFromNow) {
    displayClickedResult($dateElement, $dateDifferenceFromNow);
  }
};

const displayClickedResult = ($dateElement, $dateDifferenceFromNow) => {
  $dateElement.classList.add("dateClicked");

  $differenceWithClickedDate.textContent = `${
    Math.abs($dateDifferenceFromNow) < 2
      ? `${$dateDifferenceFromNow} day`
      : `${$dateDifferenceFromNow} days`
  } difference from Today`;
};
