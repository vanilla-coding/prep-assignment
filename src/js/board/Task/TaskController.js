import Status from "../Status";
import {
  handleClickDeleteTaskButton,
  handleClickModifyingContent,
  handleClickUpdateTaskButton,
} from "./taskElementEventHandler";

export default class TaskController {
  static $taskElement;
  static $taskStatus;
  static $taskContent;
  static $taskButtonContainer;
  static $updateButton;
  static $deleteButton;

  static calendarController;
  static task;

  static setCalendarController(calendarController) {
    TaskController.calendarController = calendarController;
  }

  static getCalendarController() {
    return TaskController.calendarController;
  }

  static createAndAppendTaskElement(task) {
    TaskController.task = task;
    TaskController.createTaskElements();
    TaskController.addClassNameToTaskElements();
    TaskController.addTextContentToTaskElements(task);
    TaskController.combineTaskElements();
    TaskController.colorTaskSatus(task.getStatus()); // status 엘리먼트가 만들어지고 나서 수행
    TaskController.addEventListenerToTaskButtons(task);
  }

  static createTaskElements() {
    TaskController.$taskElement = document.createElement("li");
    TaskController.$taskStatus = document.createElement("span");
    TaskController.$taskContent = document.createElement("span");
    TaskController.$taskButtonContainer = document.createElement("span");
    TaskController.$updateButton = document.createElement("button");
    TaskController.$deleteButton = document.createElement("button");
  }

  static addClassNameToTaskElements() {
    TaskController.$taskElement.classList.add("task");
    TaskController.$taskStatus.classList.add("task__status");
    TaskController.$taskContent.classList.add("task__content");
    TaskController.$taskButtonContainer.classList.add("task__button-container");
    TaskController.$updateButton.classList.add("task__button");
    TaskController.$updateButton.classList.add("task__button--update");
    TaskController.$deleteButton.classList.add("task__button");
    TaskController.$deleteButton.classList.add("task__button--delete");
  }

  static addTextContentToTaskElements(task) {
    TaskController.$taskStatus.textContent = task.getStatus().getText();
    TaskController.$taskContent.textContent = task.getContent();
    TaskController.$updateButton.textContent = "✅";
    TaskController.$deleteButton.textContent = "⛔";
  }

  static combineTaskElements() {
    TaskController.$taskButtonContainer.appendChild(
      TaskController.$updateButton
    );
    TaskController.$taskButtonContainer.appendChild(
      TaskController.$deleteButton
    );
    TaskController.$taskElement.appendChild(TaskController.$taskStatus);
    TaskController.$taskElement.appendChild(TaskController.$taskContent);
    TaskController.$taskElement.appendChild(
      TaskController.$taskButtonContainer
    );

    const dateOfCalendar = TaskController.task.getAssignedDate();
    const [
      yearNumber,
      monthNumber,
      dateNumber,
    ] = dateOfCalendar.getNumberListOfDateObject();
    const $taskList = document.querySelector(
      `.task-list--${yearNumber}-${monthNumber + 1}-${dateNumber}`
    );
    $taskList.appendChild(TaskController.$taskElement);
  }

  static colorTaskSatus(status) {
    TaskController.$taskStatus.style.backgroundColor = Status.getColors()[
      Status.getRepository().indexOf(status.getText())
    ];
  }

  static addEventListenerToTaskButtons(task) {
    const calendarController = TaskController.calendarController;

    TaskController.$taskStatus.addEventListener(
      "click",
      handleClickUpdateTaskButton(task, calendarController)
    );
    TaskController.$taskContent.addEventListener(
      "click",
      handleClickModifyingContent(
        TaskController.$taskElement,
        TaskController.$taskContent,
        TaskController.$taskButtonContainer,
        task
      )
    );
    TaskController.$updateButton.addEventListener(
      "click",
      handleClickUpdateTaskButton(task)
    );
    TaskController.$deleteButton.addEventListener(
      "click",
      handleClickDeleteTaskButton(task, calendarController)
    );
  }
}
