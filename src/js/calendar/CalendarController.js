import { handleMoveMonthButton } from "./eventHandler";
import CalendarViewer from "./CalendarViewer";
import Now from "./Now";
import { previousMonthButton, nextMonthButton } from "./element";

export default class CalendarController {
  constructor() {
    CalendarViewer.display();
    this.#initialAddingEventListner();
  }

  #initialAddingEventListner() {
    previousMonthButton.addEventListener("click", handleMoveMonthButton);
    nextMonthButton.addEventListener("click", handleMoveMonthButton);
  }

  static isDateToday(dateObject) {
    const now = Now.getDate();
    return (
      dateObject.getDate() === now.getDate() &&
      dateObject.getMonth() === now.getMonth() &&
      dateObject.getFullYear() === now.getFullYear()
    );
  }
}
