import { createHeader } from "./components/Header";
import { createRestaurantItem } from "./components/RestaurantItem";

addEventListener("DOMContentLoaded", () => {
  const app = document.querySelector("main");

  const header = createHeader();
  app.prepend(header);

  const restaurantList = document.querySelector(".restaurant-list");
  restaurantList.prepend(createRestaurantItem());
});
