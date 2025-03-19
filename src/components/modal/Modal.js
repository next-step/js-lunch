import { restaurantManager } from "../../domain/restaurant/restaurantManager";

class Modal {
  #container;
  #backdrop;
  #isOpen = false;
  #closeButton;
  #addButton;

  constructor() {
    this.#container = document.querySelector(".add-restaurant-modal");
    this.#backdrop = document.querySelector(".modal-backdrop");

    this.#backdrop.classList.add("modal-backdrop");
    this.#backdrop.addEventListener("click", () => this.toggle());

    this.#closeButton = document.querySelector(".close-modal-btn");
    this.#closeButton.addEventListener("click", () => this.toggle());

    this.#addButton = document.querySelector(".add-restaurant-btn");
    this.#addButton.addEventListener("click", (event) => this.#submit(event));
  }

  #submit(event) {
    event.preventDefault();

    const form = document.querySelector(".restaurant-form");
    const category = form.querySelector("#category").value;
    const name = form.querySelector("#name").value;
    const distance = form.querySelector("#distance").value;
    const description = form.querySelector("#description").value;
    const link = form.querySelector("#link").value;

    const validationMessage = this.#validateInputs({
      category,
      name,
      distance,
    });

    if (validationMessage) {
      alert(validationMessage);
      return;
    }

    restaurantManager.addRestaurant({
      category,
      name,
      distance,
      description,
      link,
    });

    restaurantManager.renderRestaurantList();

    alert("레스토랑 추가 완료!");
    this.toggle();
  }

  toggle() {
    this.#isOpen = !this.#isOpen;
    this.#container.classList.toggle("modal--open", this.#isOpen);

    if (!this.#isOpen) {
      this.#reset();
    }
  }

  #reset() {
    const form = this.#container.querySelector("form");
    form?.reset();
  }

  #validateInputs({ category, name, distance }) {
    let missingField = [];

    if (!category) missingField.push("카테고리");
    if (!name) missingField.push("이름");
    if (!distance) missingField.push("거리");

    if (missingField.length > 0) {
      return `${missingField.join(", ")}를 입력해주세요.`;
    }
  }
}

export default Modal;
