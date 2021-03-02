import { handleMoveMonthButton } from "./calendarEventHandler";
import CalendarViewer from "./CalendarViewer";
import Now from "./Now";
import { $previousMonthButton, $nextMonthButton } from "../element";

export default class CalendarController {
  constructor() {
    CalendarViewer.display();
    this.#initialAddingEventListner();
  }

  #initialAddingEventListner() {
    $previousMonthButton.addEventListener("click", handleMoveMonthButton);
    $nextMonthButton.addEventListener("click", handleMoveMonthButton);
  }
}
