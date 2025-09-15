export class CategoryFilter {
  #element;
  #category;

  constructor({ id, name, options, onChange }) {
    this.#element = document.createElement("select");
    this.#element.name = name;
    this.#element.id = id;
    this.#element.className = "restaurant-filter";

    this.#element.innerHTML = `${options
      .map((option) => `<option value="${option}">${option}</option>`)
      .join("\n")}`;

    this.#category = options[0];

    this.#element.addEventListener("change", (event) => {
      this.#category = event.target.value;
      onChange?.(event.target.value);
    });
  }

  get element() {
    return this.#element;
  }

  get category() {
    return this.#category;
  }
}
