import { toHTML } from "../utils/dom.js";

const CATEGORY_OPTIONS = [
  "전체",
  "한식",
  "중식",
  "일식",
  "양식",
  "아시안",
  "기타",
];
const SORT_OPTIONS = [
  { value: "name", text: "이름순" },
  { value: "distance", text: "거리순" },
];

export function RestaurantFilter(state, onChange) {
  const filterHTML = `
    <section class="restaurant-filter-container">
      <select id="category-filter" class="restaurant-filter">
        ${CATEGORY_OPTIONS.map(
          (value) =>
            `<option value="${value}" ${value === state.category ? "selected" : ""}>${value}</option>`,
        ).join("")}
      </select>
      <select id="sorting-filter" class="restaurant-filter">
        ${SORT_OPTIONS.map(
          ({ value, text }) =>
            `<option value="${value}" ${value === state.sort ? "selected" : ""}>${text}</option>`,
        ).join("")}
      </select>
    </section>
  `;
  const filterElement = toHTML(filterHTML);

  const categorySelect = filterElement.querySelector("#category-filter");
  const sortSelect = filterElement.querySelector("#sorting-filter");

  categorySelect.addEventListener("change", (e) => {
    const newState = { category: e.target.value, sort: state.sort };
    onChange(newState);
  });
  sortSelect.addEventListener("change", (e) => {
    const newState = { category: state.category, sort: e.target.value };
    onChange(newState);
  });

  return filterElement;
}
