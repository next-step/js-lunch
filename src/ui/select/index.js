export const createSelectContainer = () => {
  const selectContainer = document.createElement("section");
  selectContainer.classList.add("restaurant-filter-container");

  return selectContainer;
};

export const createSelect = ({ name, id, className, values, labels }) => {
  const select = document.createElement("select");

  select.name = name;
  select.id = id;
  select.className = className ?? "restaurant-filter";

  select.innerHTML = values
    .map((value) => `<option value="${value}">${labels[value]}</option>`)
    .join("");

  return select;
};
