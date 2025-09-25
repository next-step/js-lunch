export function createFormItemLabel(labelText) {
  const label = document.createElement("label");
  label.textContent = labelText;
  label.classList.add("text-caption");
  return label;
}

export function createFormItemSelect({ name, options }) {
  const select = document.createElement("select");
  select.name = name;
  const fragment = document.createDocumentFragment();
  options.forEach((option, index) => {
    const value = index === 0 ? "" : option;
    const optionElement = document.createElement("option");
    optionElement.value = value;
    optionElement.textContent = option;
    fragment.appendChild(optionElement);
  });
  select.appendChild(fragment);
  return select;
}

export function createFormItemInput({ name, type }) {
  const input = document.createElement("input");
  input.name = name;
  input.type = type;
  return input;
}

export function createFormItemHelpText(text) {
  const helpText = document.createElement("p");
  helpText.classList.add("help-text");
  helpText.textContent = text;
  return helpText;
}

export function createFormItem({ required = false } = {}) {
  const formItem = document.createElement("div");
  formItem.className = "form-item";
  if (required) {
    formItem.classList.add("form-item--required");
  }
  return formItem;
}
