import { createRestaurantList } from "../../components/restaurantList/RestaurantList";
import { restaurantData } from "../../data/restaurantData";
import { filterByCategory } from './filterByCategory';
import { sortingBy } from "./sortingBy";

export const restaurantManager = (() => {
  let restaurants = [...restaurantData];

  const addRestaurant = ({ category, name, distance, description, link }) => {
    restaurants.push({ category, name, distance, description, link });
  };

  const renderRestaurantList = () => {
    const categoryFilter = document.getElementById("category-filter");
    const selectedCategory = categoryFilter.value;
    const sortingFilter = document.getElementById("sorting-filter");
    const selectedSort = sortingFilter.value;

    const filteredRestaurants = filterByCategory(selectedCategory, restaurants);
    const sortedRestaurantData = sortingBy(selectedSort, filteredRestaurants);
    const restaurantList = createRestaurantList(sortedRestaurantData);

    const restaurantListSection = document.querySelector(
      ".restaurant-list-container",
    );
    
    restaurantListSection.innerHTML = '';
    restaurantListSection.appendChild(restaurantList);
  };

  const getRestaurantList = () => {
    return [...restaurants];
  };

  return { addRestaurant, renderRestaurantList, getRestaurantList };
})();

