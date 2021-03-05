export default class Status {
  #statusName;
  static #TODO = "TODO";
  static #DOING = "DOING";
  static #DONE = "DONE";
  static #statusRepository = [this.#TODO, this.#DOING, this.#DONE];
  static #statusColor = ["white", "yellowgreen", "red"];
  #ERROR_MESSAGE_CANNOT_UPDATE_DONE = `현재 상태가 ${
    Status.#DONE
  } 입니다. 더 이상 업데이트 할 수 없습니다.`;

  constructor() {
    this.#statusName = Status.#statusRepository[0];
  }

  getText() {
    return this.#statusName;
  }

  update() {
    const newStatusIndex =
      Status.#statusRepository.indexOf(this.#statusName) + 1;
    if (newStatusIndex === Status.#statusRepository.length) {
      console.log(this.#ERROR_MESSAGE_CANNOT_UPDATE_DONE);
      return;
    }
    this.#statusName = Status.#statusRepository[newStatusIndex];
  }

  static getRepository() {
    return Status.#statusRepository;
  }
  static getColors() {
    return Status.#statusColor;
  }
}
