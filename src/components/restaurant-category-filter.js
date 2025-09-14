import { Select } from "./common/select.js";
import { categoryFilterStore } from "../data/category-filter-store.js";
import { restaurantStore } from "../data/restaurant-store.js";
import { filterRestaurant } from "../domain/filter-restaurant.js";

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
    const filter = event.target.value;

    const restaurants = restaurantStore
      .getState()
      .initialRestaurants.filter((restaurant) =>
        filterRestaurant({ restaurant, filter })
      );

    categoryFilterStore.setState({
      ...categoryFilterStore.getState(),
      value: filter,
    });
    restaurantStore.setState({ ...restaurantStore.getState(), restaurants });
  }
}
