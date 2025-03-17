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
  }

  toggle() {
    this.#isOpen = !this.#isOpen;
    this.#container.classList.toggle("modal--open", this.#isOpen);

    if (!this.#isOpen) {
      this.reset();
    }
  }

  reset() {
    const form = this.#container.querySelector("form");
    form?.reset();
  }
}

export default Modal;
