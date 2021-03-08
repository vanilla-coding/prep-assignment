import {
  handleClickCancelButton,
  handleClickSubmitButton,
} from "./TaskSubmissionFormEventHandler";

export default class TaskSubmissionForm {
  #boardObject;

  $board;
  $formContainer;
  $form;
  $taskContentTextInput;
  $buttonContainer;
  $submitButton;
  $cancelButton;

  constructor(board, $board) {
    this.$board = $board;
    this.#boardObject = board;
  }

  display() {
    this.#createFormElement();
    this.#addClassName();
    this.#appendChild();
    this.#addContent();
    this.#addEventListenerToForm();
  }

  #createFormElement() {
    this.$formContainer = document.createElement("div");
    this.$form = document.createElement("div");
    this.$taskContentTextInput = document.createElement("textarea");
    this.$buttonContainer = document.createElement("div");
    this.$submitButton = document.createElement("button");
    this.$cancelButton = document.createElement("button");
  }

  #addClassName() {
    this.$formContainer.classList.add("board__form-container");
    this.$form.classList.add("board__form");
    this.$taskContentTextInput.classList.add("task-content-text-input");
    this.$buttonContainer.classList.add("board__form__button-container");
    this.$submitButton.classList.add("task-submission-ok");
    this.$cancelButton.classList.add("task-submission-cancel");
  }

  #appendChild() {
    this.$formContainer.append(this.$form);
    this.$form.append(this.$taskContentTextInput);
    this.$form.append(this.$buttonContainer);
    this.$buttonContainer.append(this.$submitButton);
    this.$buttonContainer.append(this.$cancelButton);
    this.$board.append(this.$formContainer);
  }

  #addContent() {
    this.$submitButton.textContent = "SUBMIT";
    this.$cancelButton.textContent = "CANCEL";
  }

  #addEventListenerToForm() {
    this.$submitButton.addEventListener(
      "click",
      handleClickSubmitButton(this.#boardObject, this)
    );
    this.$cancelButton.addEventListener("click", handleClickCancelButton(this));
  }

  close() {
    this.$board.removeChild(this.$formContainer);
  }
}
