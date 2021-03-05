import BoardController from "./BoardController";
import Task from "./Task/Task";
import Status from "./Status";

export default class Board {
  isVisible = false;
  currentDisplayingDateOfCalendar;
  boardController;
  #taskRepository = [];

  constructor(dateOfCalendar) {
    this.currentDisplayingDateOfCalendar = dateOfCalendar;
    this.boardController = new BoardController(this);
  }

  getVisibility() {
    return this.isVisible;
  }

  getDateOfCalendar() {
    return this.currentDisplayingDateOfCalendar;
  }

  getBoardController() {
    return this.boardController;
  }

  display() {
    this.boardController.display();
  }

  close() {
    this.boardController.close();
  }

  changeVisibility() {
    this.isVisible = !this.isVisible;
  }

  deleteAllTasks() {
    this.currentDisplayingDateOfCalendar.deleteAllTasks();
  }

  getAllTasks() {
    this.sortTasks();
    return this.#taskRepository;
  }

  sortTasks() {
    this.#taskRepository.sort((task1, task2) => {
      const statusList = Status.getRepository();
      const index1 = statusList.indexOf(task1.getStatus().getText());
      const index2 = statusList.indexOf(task2.getStatus().getText());
      return index1 - index2;
    });
  }

  addTask(content) {
    const newTask = new Task(content, this);
    this.#taskRepository.push(newTask);
  }

  deleteTask(task) {
    const taskIndex = this.#taskRepository.indexOf(task);
    this.#taskRepository.splice(taskIndex, 1);
  }

  deleteAllTasks() {
    this.#taskRepository = [];
  }

  getTaskLength() {
    return this.#taskRepository.length;
  }
}
