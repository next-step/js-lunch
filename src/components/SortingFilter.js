export class SortingFilter {
  #element;
  #sorting;

  constructor({ id, name, options, onChange }) {
    this.#element = document.createElement("select");
    this.#element.name = name;
    this.#element.id = id;
    this.#element.className = "restaurant-filter";

    this.#element.innerHTML = `${options
      .map((option) => `<option value="${option}">${option}</option>`)
      .join("\n")}`;

    this.#sorting = options[0];

    this.#element.addEventListener("change", (event) => {
      this.#sorting = event.target.value;
      onChange?.(event.target.value);
    });
  }

  get element() {
    return this.#element;
  }

  get sorting() {
    return this.#sorting;
  }
}
