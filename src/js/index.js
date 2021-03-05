import Calendar from "./calendar/Calendar";
import CalendarController from "./calendar/CalendarController";

const calendar = new Calendar();
const calendarController = new CalendarController(calendar);
calendarController.initialize();
