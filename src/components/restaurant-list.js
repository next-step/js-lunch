import { RestaurantItem } from "./restaurant-item.js";
import { restaurantStore } from "../data/restaurant-store.js";
import { filterRestaurant } from "../domain/filter-restaurant.js";
import { sortingFilterStore } from "../data/sorting-filter-store.js";
import { categoryFilterStore } from "../data/category-filter-store.js";
import { sortRestaurant } from "../domain/sort-restaurant.js";

export class RestaurantList {
  constructor() {
    const category = categoryFilterStore.getState().value;
    const sorting = sortingFilterStore.getState().value;

    this.restaurants = restaurantStore
      .getState()
      .initialRestaurants.filter((restaurant) => {
        return filterRestaurant({ restaurant, category });
      })
      .sort((a, b) => {
        return sortRestaurant({ a, b, sorting });
      });
  }

  getTemplate() {
    return /* HTML */ `
      <section class="restaurant-list-container">
        <ul class="restaurant-list">
          ${this.restaurants
            .map((restaurant) => new RestaurantItem(restaurant).getTemplate())
            .join("")}
        </ul>
      </section>
    `;
  }
}
