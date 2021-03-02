import {
  $boardElement,
  $boardDateText,
  $boardButtonAdd,
  $boardButtonDeleteAll,
  $boardFormContainer,
  $taskContentTextInput,
  $taskSubmissionOK,
  $taskSubmissionCancel,
  $taskList,
} from "../element";

import { previousClickedDateObject } from "../calendar/calendarEventHandler";
import Status from "./Status";

let clickedDateOfCalendar;
let isBoardVisible = false;
export const handleBoardViewWhenDateClick = (dateOfCalendar) => {
  clickedDateOfCalendar = dateOfCalendar;
  removePreviousBoardButtonEventListner();

  displayBoardDateText();
  handleBoardButtons();

  if (isBoardVisible) {
    handleDateClickWhenBoardVisible();
    return;
  }
  handleDateClickWhenBoardInvisible();
};

const removePreviousBoardButtonEventListner = () => {
  $boardButtonAdd.removeEventListener("click", boardButtonAddCallback);
  $boardButtonDeleteAll.removeEventListener(
    "click",
    boardButtonDeleteAllCallback
  );
};

const displayBoardDateText = () => {
  const clickedDate = clickedDateOfCalendar.getDateObject();
  $boardDateText.textContent = `TO DO LIST${
    clickedDate.getMonth() + 1
  }.${clickedDate.getDate()}`;
};

let boardButtonAddCallback;
let boardButtonDeleteAllCallback;
const handleBoardButtons = () => {
  boardButtonAddCallback = handleBoardButtonAdd();
  boardButtonDeleteAllCallback = handleBoardButtonDeleteAll();

  $boardButtonAdd.addEventListener("click", boardButtonAddCallback);
  $boardButtonDeleteAll.addEventListener("click", boardButtonDeleteAllCallback);
};
const handleBoardButtonAdd = () => {
  return () => {
    displayTaskSubmissionForm();
  };
};

let clickTaskSubmissionOKCallBack;
let clickTaskSubmissionCancelCallBack;
const displayTaskSubmissionForm = () => {
  displayBoardFormContainerElement();

  clickTaskSubmissionOKCallBack = handleClickTaskSubmissionOK();
  clickTaskSubmissionCancelCallBack = handleClickTaskSubmissionCancel();
  $taskSubmissionOK.addEventListener("click", clickTaskSubmissionOKCallBack);
  $taskSubmissionCancel.addEventListener(
    "click",
    clickTaskSubmissionCancelCallBack
  );
};

const displayBoardFormContainerElement = () => {
  $boardFormContainer.classList.remove("board__form-container--invisible");
  $boardFormContainer.classList.add("board__form-container--visible");
};

const handleClickTaskSubmissionOK = () => {
  return () => {
    clickedDateOfCalendar.addTask($taskContentTextInput.value);
    removeTaskSubmissionForm();
    displayBoard();
  };
};

const removeTaskSubmissionForm = () => {
  $taskSubmissionOK.removeEventListener("click", clickTaskSubmissionOKCallBack);
  $taskSubmissionCancel.removeEventListener(
    "click",
    clickTaskSubmissionCancelCallBack
  );
  clearInputTextArea();
  removeTaskList();
  removeBoardFormContainerElement();
};

const handleClickTaskSubmissionCancel = () => {
  return () => {
    removeTaskSubmissionForm();
    displayBoard();
  };
};

const clearInputTextArea = () => {
  $taskContentTextInput.value = "";
};

const removeBoardFormContainerElement = () => {
  $boardFormContainer.classList.remove("board__form-container--visible");
  $boardFormContainer.classList.add("board__form-container--invisible");
};

const handleBoardButtonDeleteAll = () => {
  return () => {
    clickedDateOfCalendar.deleteAllTasks();
    displayBoard();
  };
};

const handleDateClickWhenBoardVisible = () => {
  if (sameDateClicked()) {
    removeBoard();
    return;
  }
  displayBoard();
};

const removeTaskList = () => {
  $taskList.innerHTML = "";
};

const sameDateClicked = () => {
  // TODO: 오류 있음. 완전한 비교가 될 수 있도록 고칠 것
  return (
    clickedDateOfCalendar.getDateNumber() ===
    previousClickedDateObject.getDate()
  );
};

const handleDateClickWhenBoardInvisible = () => {
  displayBoard();
};

export const removeBoard = () => {
  removeBoardElement();
  removeTaskList();
  clearInputTextArea();
};

const removeBoardElement = () => {
  $boardElement.classList.remove("board--visible");
  $boardElement.classList.add("board--invisible");
  isBoardVisible = false;
};

const displayBoard = () => {
  displayBoardElement();
  removeTaskList();
  clearInputTextArea();
  displayTasksOnBoard();
};

const displayBoardElement = () => {
  $boardElement.classList.add("board--visible");
  $boardElement.classList.remove("board--invisible");
  isBoardVisible = true;
};

const displayTasksOnBoard = () => {
  const tasks = clickedDateOfCalendar.getAllTasks();
  tasks.forEach(createAndAddTaskElement);
};

let $taskElement;
let $taskStatus;
let $taskContent;
let $taskButtonContainer;
let $updateButton;
let $deleteButton;
const createAndAddTaskElement = (task) => {
  createTaskElements();
  addClassNameToTaskElements();
  addTextContentToTaskElements(task);
  combineTaskElements();
  colorTaskSatus(task.getStatus()); // status 엘리먼트가 만들어지고 나서 수행
  addEventListenerToTaskButtons(task);
};

const createTaskElements = () => {
  $taskElement = document.createElement("li");
  $taskStatus = document.createElement("span");
  $taskContent = document.createElement("span");
  $taskButtonContainer = document.createElement("span");
  $updateButton = document.createElement("button");
  $deleteButton = document.createElement("button");
};

const addClassNameToTaskElements = () => {
  $taskElement.classList.add("task");
  $taskStatus.classList.add("task__status");
  $taskContent.classList.add("task__content");
  $taskButtonContainer.classList.add("task__button-container");
  $updateButton.classList.add("task__button");
  $updateButton.classList.add("task__button--update");
  $deleteButton.classList.add("task__button");
  $deleteButton.classList.add("task__button--delete");
};

const addTextContentToTaskElements = (task) => {
  $taskStatus.textContent = task.getStatus().getText();
  $taskContent.textContent = task.getContent();
  $updateButton.textContent = "✅";
  $deleteButton.textContent = "⛔";
};

const combineTaskElements = () => {
  $taskButtonContainer.appendChild($updateButton);
  $taskButtonContainer.appendChild($deleteButton);
  $taskElement.appendChild($taskStatus);
  $taskElement.appendChild($taskContent);
  $taskElement.appendChild($taskButtonContainer);
  $taskList.appendChild($taskElement);
};

const colorTaskSatus = (status) => {
  $taskStatus.style.backgroundColor = Status.getColors()[
    Status.getRepository().indexOf(status.getText())
  ];
};

const addEventListenerToTaskButtons = (task) => {
  $taskStatus.addEventListener("click", handleClickUpdateTaskButton(task));
  $taskContent.addEventListener(
    "click",
    handleClickModifyingContent(
      $taskElement,
      $taskContent,
      $taskButtonContainer,
      task
    )
  );
  $updateButton.addEventListener("click", handleClickUpdateTaskButton(task));
  $deleteButton.addEventListener("click", handleClickDeleteTaskButton(task));
};

const handleClickUpdateTaskButton = (task) => {
  return () => {
    task.updateStatus();
    displayBoard();
  };
};

const handleClickModifyingContent = (
  $itsTaskElement,
  $itsTaskContent,
  $taskButtonContainer,
  task
) => {
  return () => {
    $itsTaskContent.innerHTML = "";
    const $inputElementForModifying = document.createElement("input");
    $inputElementForModifying.value = task.getContent();
    $inputElementForModifying.addEventListener(
      "keydown",
      handleEnterModifyingInput.bind(null, task, $inputElementForModifying)
    );
    $itsTaskElement.insertBefore(
      $inputElementForModifying,
      $taskButtonContainer
    );
  };
};

const handleEnterModifyingInput = (task, $inputElementForModifying, event) => {
  if (event.keyCode === 13) {
    const newTextContent = $inputElementForModifying.value;
    task.updateTextContent(newTextContent);
    displayBoard();
  }
};

const handleClickDeleteTaskButton = (task) => {
  return () => {
    task.getAssignedDate().deleteTask(task);
    displayBoard();
  };
};
