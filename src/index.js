import { headerRender } from "./components/Header.js";
import { filterRestaurant, restaurantRender } from "./components/Restaurant.js";
import RestaurantList from "./domain/RestaurantList.js";

addEventListener("load", () => {
  headerRender('점심 뭐 먹지');
  const restaurantListInstance = new RestaurantList();
  restaurantRender(restaurantListInstance);
});


document.getElementById("category-filter").addEventListener("change", () => {
  filterRestaurant();
});

document.getElementById("sorting-filter").addEventListener("change", () => {
  filterRestaurant();
});