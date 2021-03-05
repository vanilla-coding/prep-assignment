// import CalendarController_deprecated from "./calendar/CalendarController_deprecated";

import BoardRepository from "./board/BoardRepository";
import Calendar from "./calendar/Calendar";
import CalendarController from "./calendar/CalendarController";

// new CalendarController_deprecated();

const calendar = new Calendar();
const calendarController = new CalendarController(calendar);
calendarController.initialize();
