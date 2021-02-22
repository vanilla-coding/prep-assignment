import CalendarController from "./CalendarController";
import CalendarViewer from "./CalendarViewer";
import Now from "./Now";
import SelectedDate from "./SelectedDate";
import { differenceWithClickedDate } from "./element";

const selectedDateObject = SelectedDate.getDate();

export const handleMoveMonthButton = (event) => {
  const clickedButton = event.target.className;
  // selectedDateObject.setMonth(selectedDateObject.getMonth() - 1) 해도 SelectedDate의 #date 프로퍼티 값이 바뀐다. 이는 의도치 않은 버그이다.
  // 의도한 대로 프로그램이 실행되려면, SelectedDate.getDate()의 반환 값이 '진짜 Date'를 참조하는 값이 아닌 값은 같지만 아예 다른 객체여야 한다.
  if (clickedButton === "previous-month-button") {
    SelectedDate.setMonthOfDateObject(selectedDateObject.getMonth() - 1);
  }
  if (clickedButton === "next-month-button") {
    SelectedDate.setMonthOfDateObject(selectedDateObject.getMonth() + 1);
  }
  SelectedDate.setDateOfDateObject(1);
  differenceWithClickedDate.textContent = "";
  CalendarViewer.display();
};

// 클로저 사용(<코어자바스크립트>128p)
export const handleDateClick = (clickedDateObject, dateElement) => {
  return () => {
    SelectedDate.setDateOfDateObject(clickedDateObject.getDate());

    if (CalendarController.isDateToday(clickedDateObject)) {
      CalendarViewer.display();
      differenceWithClickedDate.textContent = "Today";
      return;
    }
    handleClickDifferentDate(clickedDateObject, dateElement);
  };
};

const handleClickDifferentDate = (clickedDateObject, dateElement) => {
  const now = Now.getDate();
  const ONE_DAY = 1000 * 60 * 60 * 24;
  const dateDifferenceFromNow = Math.ceil((clickedDateObject - now) / ONE_DAY);

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
