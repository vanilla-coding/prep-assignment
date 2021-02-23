import CalendarController from "./CalendarController";
import CalendarViewer from "./CalendarViewer";
import Now from "./Now";
import SelectedDate from "./SelectedDate";
import { differenceWithClickedDate } from "./element";

export const handleMoveMonthButton = (event) => {
  const clickedButton = event.target.className;
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

// 클로저 사용(<코어자바스크립트>128p)
export const handleDateClick = (dateOfCalendar, dateElement) => {
  return () => {
    SelectedDate.setDateOfDateObject(dateOfCalendar.getNumber());

    if (CalendarController.isDateToday(dateOfCalendar.getDate())) {
      CalendarViewer.display();
      differenceWithClickedDate.textContent = "Today";
      return;
    }
    handleClickDifferentDate(dateOfCalendar, dateElement);
  };
};

const handleClickDifferentDate = (dateOfCalendar, dateElement) => {
  const now = Now.getDate();
  const ONE_DAY = 1000 * 60 * 60 * 24;
  const dateDifferenceFromNow = Math.ceil(
    (dateOfCalendar.getDate() - now) / ONE_DAY
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
