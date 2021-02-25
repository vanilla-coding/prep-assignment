import {
  boardElement,
  boardDateText,
  boardButtonAdd,
  boardButtonDeleteAll,
  boardFormContainer,
  taskContentTextInput,
  taskSubmissionOK,
  taskSubmissionCancel,
  taskList,
} from "./element";

import { previousClickedDateObject } from "./calendarEventHandler";
import Status from "./board/Status";

let isBoardVisible = false;
export const handleBoardViewWhenDateClick = (dateOfCalendar) => {
  removePreviousBoardButtonEventListner();

  displayBoardDateText(dateOfCalendar);
  handleBoardButtons(dateOfCalendar);

  if (isBoardVisible) {
    handleDateClickWhenBoardVisible(dateOfCalendar);
    return;
  }
  handleDateClickWhenBoardInvisible(dateOfCalendar);
};

const removePreviousBoardButtonEventListner = () => {
  boardButtonAdd.removeEventListener("click", boardButtonAddCallback);
  boardButtonDeleteAll.removeEventListener(
    "click",
    boardButtonDeleteAllCallback
  );
};

const displayBoardDateText = (dateOfCalendar) => {
  const clickedDate = dateOfCalendar.getDate();
  boardDateText.textContent = `TO DO LIST${
    clickedDate.getMonth() + 1
  }.${clickedDate.getDate()}`;
};

let boardButtonAddCallback;
let boardButtonDeleteAllCallback;
const handleBoardButtons = (dateOfCalendar) => {
  boardButtonAddCallback = handleBoardButtonAdd(dateOfCalendar);
  boardButtonDeleteAllCallback = handleBoardButtonDeleteAll(dateOfCalendar);

  boardButtonAdd.addEventListener("click", boardButtonAddCallback);
  boardButtonDeleteAll.addEventListener("click", boardButtonDeleteAllCallback);
};

const handleBoardButtonAdd = (dateOfCalendar) => {
  return () => {
    displayTaskSubmissionForm(dateOfCalendar);
  };
};

let clickTaskSubmissionOKCallBack;
let clickTaskSubmissionCancelCallBack;
const displayTaskSubmissionForm = (dateOfCalendar) => {
  boardFormContainer.classList.remove("board__form-container--invisible");
  boardFormContainer.classList.add("board__form-container--visible");

  clickTaskSubmissionOKCallBack = handleClickTaskSubmissionOK(dateOfCalendar);
  clickTaskSubmissionCancelCallBack = handleClickTaskSubmissionCancel(
    dateOfCalendar
  );

  taskSubmissionOK.addEventListener("click", clickTaskSubmissionOKCallBack);
  taskSubmissionCancel.addEventListener(
    "click",
    clickTaskSubmissionCancelCallBack
  );
};

const handleClickTaskSubmissionOK = (dateOfCalendar) => {
  return () => {
    dateOfCalendar.addTask(taskContentTextInput.value);
    removeTaskSubmissionForm();
    displayBoard(dateOfCalendar);
  };
};

const removeTaskSubmissionForm = () => {
  taskSubmissionOK.removeEventListener("click", clickTaskSubmissionOKCallBack);
  taskSubmissionCancel.removeEventListener(
    "click",
    clickTaskSubmissionCancelCallBack
  );
  clearInputTextArea();
  removeTaskList();

  boardFormContainer.classList.remove("board__form-container--visible");
  boardFormContainer.classList.add("board__form-container--invisible");
};

const handleClickTaskSubmissionCancel = (dateOfCalendar) => {
  return () => {
    removeTaskSubmissionForm();
    displayBoard(dateOfCalendar);
  };
};

const clearInputTextArea = () => {
  taskContentTextInput.value = "";
};

const handleBoardButtonDeleteAll = (dateOfCalendar) => {
  return () => {
    dateOfCalendar.deleteAllTasks();
    displayBoard(dateOfCalendar);
  };
};

const handleDateClickWhenBoardVisible = (dateOfCalendar) => {
  if (sameDateClicked(dateOfCalendar)) {
    removeBoard();
    return;
  }

  displayBoard(dateOfCalendar);
};

const removeTaskList = () => {
  taskList.innerHTML = "";
};

const sameDateClicked = (dateOfCalendar) => {
  return dateOfCalendar.getNumber() === previousClickedDateObject.getDate();
};

const handleDateClickWhenBoardInvisible = (dateOfCalendar) => {
  displayBoard(dateOfCalendar);
};

export const removeBoard = () => {
  boardElement.classList.remove("board--visible");
  boardElement.classList.add("board--invisible");

  removeTaskList();
  clearInputTextArea();

  isBoardVisible = false;
};

const displayBoard = (dateOfCalendar) => {
  removeTaskList();
  clearInputTextArea();
  displayTasksOnBoard(dateOfCalendar);
  boardElement.classList.add("board--visible");
  boardElement.classList.remove("board--invisible");
  isBoardVisible = true;
};

const displayTasksOnBoard = (dateOfCalendar) => {
  const tasks = dateOfCalendar.getAllTasks();
  tasks.forEach(createAndAddTaskElement);
};

let taskElement;
let taskStatus;
let taskContent;
let updateButton;
let deleteButton;
const createAndAddTaskElement = (task) => {
  taskElement = document.createElement("li");
  taskElement.classList.add("task");
  taskStatus = document.createElement("span");
  taskStatus.classList.add("task__status");
  taskStatus.textContent = task.getStatus().getText();
  colorTaskSatus(task.getStatus(), taskStatus);
  taskContent = document.createElement("span");
  taskContent.classList.add("task__content");
  taskContent.textContent = task.getContent();

  const taskButtonContainer = document.createElement("span");
  taskButtonContainer.classList.add("task__button-container");
  updateButton = document.createElement("button");
  updateButton.classList.add("task__button");
  updateButton.classList.add("task__button--update");
  updateButton.textContent = "✅";
  deleteButton = document.createElement("button");
  deleteButton.classList.add("task__button");
  deleteButton.classList.add("task__button--delete");
  deleteButton.textContent = "⛔";
  taskButtonContainer.appendChild(updateButton);
  taskButtonContainer.appendChild(deleteButton);

  taskElement.appendChild(taskStatus);
  taskElement.appendChild(taskContent);
  taskElement.appendChild(taskButtonContainer);

  taskList.appendChild(taskElement);

  addEventListenerToTaskButtons(task);
};

const colorTaskSatus = (status) => {
  taskStatus.style.backgroundColor = Status.getColors()[
    Status.getRepository().indexOf(status.getText())
  ];
};

const addEventListenerToTaskButtons = (task) => {
  taskStatus.addEventListener("click", handleClickUpdateTaskButton(task));
  updateButton.addEventListener("click", handleClickUpdateTaskButton(task));
  deleteButton.addEventListener("click", handleClickDeleteTaskButton(task));
};

const handleClickUpdateTaskButton = (task) => {
  return () => {
    task.updateStatus();
    displayBoard(task.getAssignedDate());
  };
};

const handleClickDeleteTaskButton = (task) => {
  return () => {
    task.getAssignedDate().deleteTask(task);
    displayBoard(task.getAssignedDate());
  };
};
