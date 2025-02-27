export function categoryRender(
  firstCatoryValue,
  categoryId,
  categoryListInstance
) {
  const select = document.querySelector(categoryId);
  select.innerHTML = /*html*/ `<option value="${
    firstCatoryValue === "선택해 주세요" ? "" : firstCatoryValue
  }">${firstCatoryValue}</option>`;

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
