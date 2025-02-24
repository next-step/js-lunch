import { headerRender } from "./components/Header";
import { filterRestaurant, restaurantRender } from "./components/Restaurant";
import RestaurantList from "./domain/RestaurantList";

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