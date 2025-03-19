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

    restaurantManager.addRestaurant({
      category,
      name,
      distance,
      description,
      link,
    });

    restaurantManager.renderRestaurantList();
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
}

export default Modal;
