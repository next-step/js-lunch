import { toHTML } from "../utils/dom.js";

export function RestaurantFilter(category, sort) {
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

  return toHTML(`
    <section class="restaurant-filter-container">
      <select id="category-filter" class="restaurant-filter">
        ${CATEGORY_OPTIONS.map(
          (value) =>
            `<option value="${value}" ${
              value === category ? "selected" : ""
            }>${value}</option>`,
        ).join("")}
      </select>
      <select id="sorting-filter" class="restaurant-filter">
        ${SORT_OPTIONS.map(
          ({ value, text }) =>
            `<option value="${value}" ${
              value === sort ? "selected" : ""
            }>${text}</option>`,
        ).join("")}
      </select>
    </section>
  `);
}
