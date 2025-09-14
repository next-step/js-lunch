import { Select } from "./common/select.js";
import { sortingFilterStore } from "../data/sorting-filter-store.js";
export class RestaurantSortingFilter {
  constructor() {
    this.options = sortingFilterStore.getState().options;
    this.select = new Select({
      id: "sorting-filter",
      className: "restaurant-filter",
      options: this.options,
      value: sortingFilterStore.getState().value,
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
    const sorting = event.target.value;

    sortingFilterStore.setState({
      ...sortingFilterStore.getState(),
      value: sorting,
    });
  }
}
