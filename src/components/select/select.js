function createOption({ category, value }) {
  const option = document.createElement("option");
  option.value = value;
  option.textContent = category;
  return option;
}

export function createSelectComponent({ className, attName, id, options }) {
  const select = document.createElement("select");
  select.className = className;
  select.name = attName;
  select.id = id;

  Object.keys(options).forEach((value) => {
    select.appendChild(
      createOption({ category: options[value], value: value })
    );
  });

  return select;
}
