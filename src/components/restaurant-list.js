import { restaurantItem } from "./restaurant-item.js";

export function restaurantList({ restaurants }) {
  return /* HTML */ `
    <section class="restaurant-list-container">
      <ul class="restaurant-list">
        ${restaurants.map((restaurant) => restaurantItem(restaurant)).join("")}
      </ul>
    </section>
  `;
}
