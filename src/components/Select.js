export class Select {
  #element;
  #value;

  constructor({ id, name, options, onChange, className }) {
    this.#element = document.createElement("select");
    this.#element.name = name;
    this.#element.id = id;
    this.#element.className = className;

    this.#element.innerHTML = `${options
      .map((option) => `<option value="${option}">${option}</option>`)
      .join("\n")}`;

    this.#value = options[0];

    this.#element.addEventListener("change", (event) => {
      this.#value = event.target.value;
      onChange?.(event.target.value);
    });
  }

  get element() {
    return this.#element;
  }

  get value() {
    return this.#value;
  }
}
