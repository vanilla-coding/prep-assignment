import Status from "../board/Status";
import Task from "../board/Task";

export default class DateOfCalendar {
  #monthBelongTo;
  #yearBelongTo;
  #number;
  #monthNumber;
  #yearNumber;
  #taskRepository = [];

  constructor(dateNumber, monthObject, yearObject) {
    this.#monthBelongTo = monthObject;
    this.#yearBelongTo = yearObject;
    this.#number = dateNumber;
    this.#yearNumber = yearObject.getNumber();
    this.#monthNumber = monthObject.getNumber();
  }

  getNumber() {
    return this.#number;
  }

  getDate() {
    return new Date(this.#yearNumber, this.#monthNumber, this.#number);
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
    console.log("add one task");
    const newTask = new Task(content, this);
    this.#taskRepository.push(newTask);
  }

  deleteTask(task) {
    console.log("delete one task");
    const taskIndex = this.#taskRepository.indexOf(task);
    this.#taskRepository.splice(taskIndex, 1);
  }

  deleteAllTasks() {
    console.log("delete all tasks");
    this.#taskRepository = [];
  }
}
