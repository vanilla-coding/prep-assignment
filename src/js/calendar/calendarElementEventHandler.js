import SelectedDate from "./SelectedDate";
import { $differenceWithClickedDate } from "../elements";
import Now from "./Now";

const CLASSNAME_PREVIOUS_MONTH_BUTTON = "previous-month-button";
const CLASSNAME_NEXT_MONTH_BUTTON = "next-month-button";
export const handleMoveMonthButton = (calendarController, event) => {
  return (event) => {
    const clickedButton = event.target.classList[1];

    if (clickedButton === CLASSNAME_PREVIOUS_MONTH_BUTTON) {
      SelectedDate.setMonthOfDateObject(SelectedDate.getMonth() - 1);
    }
    if (clickedButton === CLASSNAME_NEXT_MONTH_BUTTON) {
      SelectedDate.setMonthOfDateObject(SelectedDate.getMonth() + 1);
    }
    SelectedDate.setDateNumberOfDateObject(1);
    $differenceWithClickedDate.textContent = "";
    calendarController.displaySelectedDateText();
    calendarController.displayCalendarContents();
  };
};

const SELECTED_DATE_TEXT_TODAY = "Today";
const CLASSNAME_CLICKED_DATE = "dateClicked";
export const createHandleClickDateOfCalendar = (
  dateOfCalendar,
  $dateElement,
  calendarController
) => {
  return () => {
    SelectedDate.setDateNumberOfDateObject(dateOfCalendar.getDateNumber());
    calendarController.displaySelectedDateText();

    const dateDifferenceFromNow = calculateDateDifferenceFromNow(
      dateOfCalendar
    );

    if (Now.isDateToday(SelectedDate.getDateObject())) {
      $differenceWithClickedDate.textContent = SELECTED_DATE_TEXT_TODAY;
    } else {
      printDateDifference(dateDifferenceFromNow);
    }

    calendarController.displayCalendarContents();
    $dateElement.classList.add(CLASSNAME_CLICKED_DATE);

    const board = dateOfCalendar.getBoard();
    if (board.getVisibility()) {
      board.close();
    } else {
      board.display();
    }
  };
};

const calculateDateDifferenceFromNow = (dateOfCalendar) => {
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
