import { Select } from "./Select.js";

export class SortingFilter {
  #select;

  constructor({ id, name, options, onChange }) {
    this.#select = new Select({
      id,
      name,
      options,
      onChange,
      className: "restaurant-filter",
    });
  }

  get element() {
    return this.#select.element;
  }

  get sorting() {
    return this.#select.value;
  }
}
