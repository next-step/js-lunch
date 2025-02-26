export function categoryRender(categoryListInstance) {
  const select = document.querySelector("#category-filter");
  select.innerHTML = "";

  const fragment = document.createDocumentFragment();

  categoryListInstance.categorys.forEach((category) => {
    const categoryElement = createCategory(category);
    fragment.appendChild(categoryElement);
  });

  select.appendChild(fragment);
}

function createCategory(category) {
  const option = document.createElement("option");
  option.value = category;
  option.textContent = category;
  return option;
}
