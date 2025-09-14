import { RestaurantCategoryFilter } from "./restaurant-category-filter.js";
import { RestaurantSortingFilter } from "./restaurant-sorting-filter.js";

export class RestaurantFilterContainer {
  constructor() {
    this.categoryFilter = new RestaurantCategoryFilter();
    this.sortingFilter = new RestaurantSortingFilter();
  }

  getTemplate() {
    return /* HTML */ `
      <section class="restaurant-filter-container">
        ${this.categoryFilter.getTemplate()} ${this.sortingFilter.getTemplate()}
      </section>
    `;
  }

  bindEvents() {
    this.categoryFilter.bindEvents();
    this.sortingFilter.bindEvents();
  }
}
