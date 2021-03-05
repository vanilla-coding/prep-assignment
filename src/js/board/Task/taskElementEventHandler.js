export const handleClickUpdateTaskButton = (task) => {
  return () => {
    const boardController = task.getBoardController();
    task.updateStatus();
    boardController.displayTasks();
  };
};

export const handleClickModifyingContent = (
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

const ERROR_MESSAGE_NO_CONTENT_INPUT = "내용이 없습니다.";
const handleEnterModifyingInput = (task, $inputElementForModifying, event) => {
  if (event.keyCode === 13) {
    const newTextContent = $inputElementForModifying.value;
    if (newTextContent.trim() === "") {
      alert(ERROR_MESSAGE_NO_CONTENT_INPUT);
    } else {
      task.updateTextContent(newTextContent);
    }
    task.getBoardController().displayTasks();
  }
};

export const handleClickDeleteTaskButton = (task, calendarController) => {
  return () => {
    task.getAssignedBoard().deleteTask(task);
    task.getBoardController().displayTasks();
    calendarController.displayCalendarContents();
  };
};
