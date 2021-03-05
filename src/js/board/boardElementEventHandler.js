import TaskController from "./Task/TaskController";
import TaskSubmissionForm from "./TaskSubmissionForm/TaskSubmissionForm";

export const handleBoardButtonAdd = (board, $board) => {
  return () => {
    const form = new TaskSubmissionForm(board, $board);
    form.display();
  };
};

export const handleBoardButtonDeleteAll = (boardController, board) => {
  return () => {
    board.deleteAllTasks();
    boardController.displayTasks();
    TaskController.getCalendarController().displayCalendarContents();
  };
};

export const handleBoardButtonClose = (board) => {
  return () => {
    board.close();
  };
};
