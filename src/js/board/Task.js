import Status from "./Status";

export default class Task {
  #createdTime;
  #content;
  #status;
  #assignedDate;

  constructor(content, assignedDate) {
    this.#createdTime = new Date();
    this.#content = content;
    this.#status = new Status();
    this.#assignedDate = assignedDate;
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
  updateTextContent(newTextContent) {
    this.#content = newTextContent;
  }
}
