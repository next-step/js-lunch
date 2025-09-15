export function createCategoryFilter({ id, name, options }) {
  const selectElement = document.createElement("select");
  selectElement.name = name;
  selectElement.id = id;
  selectElement.className = "restaurant-filter";

  selectElement.innerHTML = `${options
    .map((option) => `<option value="${option}">${option}</option>`)
    .join("\n")}`;

  return selectElement;
}
