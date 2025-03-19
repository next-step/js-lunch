import { toHTML } from "../utils/dom.js";
import { CATEGORIES, SORT_OPTIONS } from "../data/filters.js";

export function RestaurantFilter(selectedCategory, selectedSort) {
  return toHTML(`
    <section class="restaurant-filter-container">
      <select id="category-filter" class="restaurant-filter">
        ${[...Object.values(CATEGORIES)]
          .map(
            (value) =>
              `<option value="${value}" ${value === selectedCategory ? "selected" : ""}>${value}</option>`,
          )
          .join("")}
      </select>
      <select id="sorting-filter" class="restaurant-filter">
        ${SORT_OPTIONS.map(
          ({ value, text }) =>
            `<option value="${value}" ${value === selectedSort ? "selected" : ""}>${text}</option>`,
        ).join("")}
      </select>
    </section>
  `);
}
