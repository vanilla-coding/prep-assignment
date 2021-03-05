import TaskController from "../Task/TaskController";

export const handleClickSubmitTaskSubmission = (board, form) => {
  return () => {
    const input = document.querySelector(".task-content-text-input");
    if (input.value.trim() === "") {
      alert("내용이 없는 할 일은 추가할 수 없습니다.");
      return;
    }
    board.addTask(input.value);
    TaskController.getCalendarController().displayCalendarContents();
    form.close();
    const boardController = board.getBoardController();
    boardController.displayTasks();
  };
};

export const handleClickCancelTaskSubmission = (form) => {
  return () => {
    form.close();
  };
};
