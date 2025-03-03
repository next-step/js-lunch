export const createSelectContainer = () => {
  const selectContainer = document.createElement("section");
  selectContainer.classList.add("restaurant-filter-container");

  return selectContainer;
};

export const createSelect = ({ name, id, onChange, values, labels }) => {
  const select = document.createElement("select");

  select.classList.add("restaurant-filter");
  select.name = name;
  select.id = id;

  select.addEventListener("change", (e) => {
    onChange?.(e);
  });

  select.innerHTML = values
    .map((value) => `<option value="${value}">${labels[value]}</option>`)
    .join("");

  return select;
};
