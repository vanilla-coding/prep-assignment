import { $calendar } from "../elements";
import {
  handleBoardButtonAdd,
  handleBoardButtonDeleteAll,
  handleBoardButtonClose,
} from "./boardElementEventHandler";
import TaskController from "./Task/TaskController";

export default class BoardController {
  #board;
  #dateOfCalendar;
  #identifier;

  $board;
  $boardHeader;
  $boardDateText;
  $boardAddTaskButton;
  $boardDeleteAllButton;
  $boardCloseButton;
  $boardContent;
  $taskList;

  constructor(board) {
    this.#board = board;
    this.#dateOfCalendar = this.#board.getDateOfCalendar();
    const [
      yearNumber,
      monthNumber,
      dateNumber,
    ] = this.#dateOfCalendar.getNumberListOfDateObject();
    this.#identifier = `${yearNumber}-${monthNumber + 1}-${dateNumber}`;
  }

  display() {
    this.#board.changeVisibility();
    this.#createElement();
    this.#addClassName();
    this.#appendChild();
    this.#addContent();
    this.#addEventListener();
    this.displayTasks();
  }

  #createElement() {
    this.$board = document.createElement("div");

    this.$boardHeader = document.createElement("div");
    this.$boardDateText = document.createElement("h3");
    this.$boardAddTaskButton = document.createElement("button");
    this.$boardDeleteAllButton = document.createElement("button");
    this.$boardCloseButton = document.createElement("button");

    this.$boardContent = document.createElement("div");
    this.$taskList = document.createElement("ul");
  }

  #addClassName() {
    this.$board.classList.add("board");

    this.$boardHeader.classList.add("board__header");

    this.$boardDateText.classList.add("board__date--text");
    this.$boardAddTaskButton.classList.add("board__button");
    this.$boardAddTaskButton.classList.add("board__button--add");

    this.$boardDeleteAllButton.classList.add("board__button");
    this.$boardDeleteAllButton.classList.add("board__button--delete-all");

    this.$boardCloseButton.classList.add("board__button");
    this.$boardCloseButton.classList.add("board__button--close");

    this.$boardContent.classList.add("board__content");

    this.$taskList.classList.add(`task-list--${this.#identifier}`);
  }

  #appendChild() {
    $calendar.appendChild(this.$board);

    this.$board.appendChild(this.$boardHeader);
    this.$boardHeader.appendChild(this.$boardAddTaskButton);
    this.$boardHeader.appendChild(this.$boardDateText);
    this.$boardHeader.appendChild(this.$boardDeleteAllButton);
    this.$boardHeader.appendChild(this.$boardCloseButton);

    this.$board.appendChild(this.$boardContent);
    this.$boardContent.appendChild(this.$taskList);
  }

  TASK_LIST_TITLE = `TASK for`;
  #addContent() {
    this.$boardAddTaskButton.innerHTML = `<i class="fas fa-plus"></i>`;
    this.$boardDeleteAllButton.innerHTML = `<i class="fas fa-trash-alt"></i> ALL`;
    this.$boardCloseButton.innerHTML = `<i class="fas fa-times-circle"></i>`;

    const [
      _,
      monthNumber,
      dateNumber,
    ] = this.#dateOfCalendar.getNumberListOfDateObject();
    this.$boardDateText.textContent = `${this.TASK_LIST_TITLE} ${
      monthNumber + 1
    }.${dateNumber}`;
  }

  #addEventListener() {
    this.$boardAddTaskButton.addEventListener(
      "click",
      handleBoardButtonAdd(this.#board, this.$board)
    );
    this.$boardDeleteAllButton.addEventListener(
      "click",
      handleBoardButtonDeleteAll(this, this.#board)
    );
    this.$boardCloseButton.addEventListener(
      "click",
      handleBoardButtonClose(this.#board)
    );
  }

  displayTasks() {
    this.resetBoardElement();
    const tasks = this.#board.getAllTasks();
    tasks.forEach(TaskController.createAndAppendTaskElement);
  }

  TASK_IDENTIFIER_PREFIX = `.task-list--`;
  resetBoardElement() {
    const taskListElement = document.querySelector(
      `${this.TASK_IDENTIFIER_PREFIX}${this.#identifier}`
    );
    taskListElement.innerHTML = "";
  }

  close() {
    this.#board.changeVisibility();
    $calendar.removeChild(this.$board);
  }
}
