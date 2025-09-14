import { Select } from "./common/select.js";
import { sortingFilterStore } from "../data/sorting-filter-store.js";
import { restaurantStore } from "../data/restaurant-store.js";
import { sortRestaurant } from "../domain/sort-restaurant.js";

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
    const restaurants = [...restaurantStore.getState().initialRestaurants].sort(
      (a, b) => sortRestaurant({ a, b, sorting })
    );
    sortingFilterStore.setState({
      ...sortingFilterStore.getState(),
      value: sorting,
    });
    restaurantStore.setState({
      ...restaurantStore.getState(),
      restaurants,
    });
  }
}
