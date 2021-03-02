import CalendarController from "./CalendarController";
import CalendarViewer from "./CalendarViewer";
import Now from "./Now";
import SelectedDate from "./SelectedDate";
import { differenceWithClickedDate } from "../element";
import {
  handleBoardViewWhenDateClick,
  removeBoard,
} from "../board/boardEventHandler";

export const handleMoveMonthButton = (event) => {
  const clickedButton = event.target.classList[1];

  removeBoard();

  if (clickedButton === "previous-month-button") {
    SelectedDate.setMonthOfDateObject(SelectedDate.getMonth() - 1);
  }
  if (clickedButton === "next-month-button") {
    SelectedDate.setMonthOfDateObject(SelectedDate.getMonth() + 1);
  }
  SelectedDate.setDateOfDateObject(1);
  differenceWithClickedDate.textContent = "";
  CalendarViewer.display();
};

export let previousClickedDateObject;
export const handleDateClick = (dateOfCalendar, dateElement) => {
  return () => {
    previousClickedDateObject = SelectedDate.getDateObject();
    SelectedDate.setDateOfDateObject(dateOfCalendar.getDateNumber());

    handleTodayClick(dateOfCalendar);
    handleClickDifferentDate(dateOfCalendar, dateElement);
    handleBoardViewWhenDateClick(dateOfCalendar);
  };
};

const handleTodayClick = (dateOfCalendar) => {
  if (Now.isDateToday(dateOfCalendar.getDateObject())) {
    CalendarViewer.display();
    differenceWithClickedDate.textContent = "Today";
    return;
  }
};

const handleClickDifferentDate = (dateOfCalendar, dateElement) => {
  const now = Now.getDateObject();
  const ONE_DAY = 1000 * 60 * 60 * 24;
  const dateDifferenceFromNow = Math.ceil(
    (dateOfCalendar.getDateObject() - now) / ONE_DAY
  );

  CalendarViewer.display();

  if (dateDifferenceFromNow) {
    displayClickedResult(dateElement, dateDifferenceFromNow);
  }
};

const displayClickedResult = (dateElement, dateDifferenceFromNow) => {
  dateElement.style.color = "blue";
  dateElement.style.fontWeight = 1000;

  differenceWithClickedDate.textContent = `${
    Math.abs(dateDifferenceFromNow) < 2
      ? `${dateDifferenceFromNow} day`
      : `${dateDifferenceFromNow} days`
  } difference from Today`;
};
