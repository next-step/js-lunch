import { Select } from "./common/select.js";
import { categoryFilterStore } from "../data/category-filter-store.js";
export class RestaurantCategoryFilter {
  constructor() {
    this.options = categoryFilterStore.getState().options;
    this.select = new Select({
      id: "category-filter",
      className: "restaurant-filter",
      options: this.options,
      value: categoryFilterStore.getState().value,
      onChange: this.onChange,
    });
  }

  getTemplate() {
    return this.select.getTemplate();
  }

  bindEvents() {
    this.select.bindEvents();
  }

  onChange(event) {
    const category = event.target.value;

    categoryFilterStore.setState({
      ...categoryFilterStore.getState(),
      value: category,
    });
  }
}
