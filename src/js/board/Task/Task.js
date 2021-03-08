import Status from "../Status";

export default class Task {
  #content;
  #status;
  #assignedDate;
  #assignedBoard;
  #boardController;

  constructor(content, board) {
    this.#content = content;
    this.#status = new Status();
    this.#assignedDate = board.getDateOfCalendar();
    this.#boardController = board.getBoardController();
    this.#assignedBoard = board;
  }

  getContent() {
    return this.#content;
  }

  getStatus() {
    return this.#status;
  }

  updateStatus() {
    this.#status.update();
  }

  getAssignedDate() {
    return this.#assignedDate;
  }

  getBoardController() {
    return this.#boardController;
  }

  getAssignedBoard() {
    return this.#assignedBoard;
  }

  updateTextContent(newTextContent) {
    this.#content = newTextContent;
  }
}
