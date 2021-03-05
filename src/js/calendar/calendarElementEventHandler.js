import SelectedDate from "./SelectedDate";
import { $differenceWithClickedDate } from "../elements";
import Now from "./Now";

export const handleMoveMonthButton = (calendarController, event) => {
  return (event) => {
    const clickedButton = event.target.classList[1];

    if (clickedButton === "previous-month-button") {
      SelectedDate.setMonthOfDateObject(SelectedDate.getMonth() - 1);
    }
    if (clickedButton === "next-month-button") {
      SelectedDate.setMonthOfDateObject(SelectedDate.getMonth() + 1);
    }
    SelectedDate.setDateNumberOfDateObject(1);
    $differenceWithClickedDate.textContent = "";
    calendarController.displaySelectedDateText();
    calendarController.displayCalendarContents();
  };
};

export const createHandleClickDateOfCalendar = (
  dateOfCalendar,
  $dateElement,
  calendarController
) => {
  return () => {
    SelectedDate.setDateNumberOfDateObject(dateOfCalendar.getDateNumber());
    calendarController.displaySelectedDateText();

    const dateDifferenceFromSelectedDateToNow = calculateDateDifferenceFromSelectedDateToNow(
      dateOfCalendar
    );

    if (Now.isDateToday(SelectedDate.getDateObject())) {
      $differenceWithClickedDate.textContent = "Today";
    } else {
      printDateDifference(dateDifferenceFromSelectedDateToNow);
    }

    calendarController.displayCalendarContents();
    $dateElement.classList.add("dateClicked");

    const board = dateOfCalendar.getBoard();
    if (board.getVisibility()) {
      board.close();
    } else {
      board.display();
    }
  };
};

const calculateDateDifferenceFromSelectedDateToNow = (dateOfCalendar) => {
  const now = Now.getDateObject();
  const ONE_DAY = 1000 * 60 * 60 * 24;
  return Math.ceil((dateOfCalendar.getDateObject() - now) / ONE_DAY);
};

const printDateDifference = (dateDifferenceFromSelectedDateToNow) => {
  $differenceWithClickedDate.textContent = `${
    Math.abs(dateDifferenceFromSelectedDateToNow) < 2
      ? `${dateDifferenceFromSelectedDateToNow} day`
      : `${dateDifferenceFromSelectedDateToNow} days`
  } difference from Today`;
};
