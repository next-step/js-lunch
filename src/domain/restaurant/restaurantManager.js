import { createRestaurantList } from "../../components/restaurantList/RestaurantList";
import { restaurantData } from "../../data/restaurantData";
import { sortingBy } from "./sortingBy";

const restaurantManager = (() => {
  let instance;
  let restaurants = [...restaurantData];

  const addRestaurant = ({ category, name, distance, description, link }) => {
    restaurants.push({ category, name, distance, description, link });
  };

  const renderRestaurantList = () => {
    const sortingFilter = document.getElementById("sorting-filter");
    const selectedSort = sortingFilter.value;

    const sortedRestaurantData = sortingBy(selectedSort, restaurants);
    const restaurantList = createRestaurantList(sortedRestaurantData);

    const restaurantListSection = document.querySelector(
      ".restaurant-list-container",
    );
    restaurantListSection.appendChild(restaurantList);
  };

  const getRestaurantList = () =>{
    return [...restaurants];
  }

  const getInstance = () => {
    if (!instance) {
      instance = { addRestaurant, renderRestaurantList, getRestaurantList };
    }
    return instance;
  };

  return { getInstance };
})();

export const restaurantManagerInstance = restaurantManager.getInstance();
