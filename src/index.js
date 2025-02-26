import { headerRender } from "./components/Header.js";
import { filterRestaurant, restaurantRender } from "./components/Restaurant.js";
import RestaurantListModel from "./domain/RestaurantListModel.js";

addEventListener("load", () => {
  headerRender('점심 뭐 먹지');
  const restaurantListInstance = new RestaurantListModel();
  restaurantRender(restaurantListInstance);
});


document.getElementById("category-filter").addEventListener("change", () => {
  filterRestaurant();
});

document.getElementById("sorting-filter").addEventListener("change", () => {
  filterRestaurant();
});