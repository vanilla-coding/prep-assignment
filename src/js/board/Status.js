export default class Status {
  #statusName;
  static #TODO = "TODO";
  static #DOING = "DOING";
  static #DONE = "DONE";
  static #statusRepository = [this.#TODO, this.#DOING, this.#DONE];
  static #statusColor = ["white", "yellowgreen", "red"];
  #cannotUpdateMessage = `현재 상태가 ${
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
      console.log(this.#cannotUpdateMessage);
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
