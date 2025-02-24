import { createRestaurantList } from "./RestaurantList";

export const createRestaurantListSection = () => {
  const restaurantListSection = document.createElement("section");
  restaurantListSection.classList.add("restaurant-list-container");

  const restaurantList = createRestaurantList();
  restaurantListSection.appendChild(restaurantList);
  
  return restaurantListSection;
};
