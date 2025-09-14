import { $ } from "../../utils/dom.js";

export class Select {
  constructor({ id, className, options, value, onChange }) {
    this.id = id;
    this.className = className;
    this.options = options;
    this.value = value;
    this.onChange = onChange;
  }

  bindEvents() {
    const select = $(`#${this.id}`);

    select.addEventListener("change", (event) => {
      this.onChange(event);
    });
  }

  getTemplate() {
    return /* HTML */ `
      <select id=${this.id} class=${this.className}>
        ${this.options
          .map(
            ({ value, label }) =>
              `<option value=${value} ${
                value === this.value ? "selected" : ""
              }>${label}</option>`
          )
          .join("")}
      </select>
    `;
  }
}
