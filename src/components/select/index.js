export function createSelect({ name, id, className, values, labels }) {
  const select = document.createElement("select");

  select.name = name;
  select.id = id;
  select.className = className;

  select.innerHTML = values
    .map((value) => `<option value="${value}">${labels[value]}</option>`)
    .join("");

  return select;
}
