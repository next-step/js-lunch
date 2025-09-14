import { RestaurantItem } from "./restaurant-item.js";
import { restaurantStore } from "../data/restaurant-store.js";

export class RestaurantList {
  constructor() {
    this.restaurants = restaurantStore.getState().restaurants;
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
