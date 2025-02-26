import { sortingBy } from '../utils/sorting';
import { createRestaurantList } from "./RestaurantList";

export const createRestaurantListSection = (restaurants) => {
  const restaurantListSection = document.createElement("section");
  restaurantListSection.classList.add("restaurant-list-container");

  const restaurantList = renderRestaurantList(restaurants);
  restaurantListSection.appendChild(restaurantList);
  
  return restaurantListSection;
};

const renderRestaurantList = (restaurants) => {
  const sortingFilter = document.getElementById("sorting-filter");
  const selectedSort = sortingFilter.value; 

  const sortedRestaurantData = sortingBy(selectedSort, restaurants); 
  const restaurantList = createRestaurantList(sortedRestaurantData); 

  return restaurantList;
};
