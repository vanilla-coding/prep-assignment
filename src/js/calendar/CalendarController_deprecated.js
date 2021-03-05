import { handleMoveMonthButton } from "./calendarEventHandler";
import CalendarViewer_deprecated from "./CalendarViewer_deprecated";
import { $previousMonthButton, $nextMonthButton } from "../elements";

export default class CalendarController_deprecated {
  constructor() {
    CalendarViewer_deprecated.display();
    this.#initialAddingEventListner();
  }

  #initialAddingEventListner() {
    $previousMonthButton.addEventListener("click", handleMoveMonthButton);
    $nextMonthButton.addEventListener("click", handleMoveMonthButton);
  }
}
