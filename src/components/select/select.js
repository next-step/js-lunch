function createOption({ category }) {
  const option = document.createElement("option");
  option.value = category;
  option.textContent = category;
  return option;
}

export function createSelectComponent({ className, attName, id, options }) {
  const select = document.createElement("select");
  select.className = className;
  select.name = attName;
  select.id = id;

  options.forEach((element) => {
    select.appendChild(createOption({ category: element }));
  });

  return select;
}
