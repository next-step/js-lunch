import { createRestaurantList } from "../components/RestaurantList";
import { restaurantData } from "../data/restaurantData";
import { filterByCategory } from "./filter";
import { sortingBy } from "./sorting";

export const addEvent = () => {
  const categoryFilter = document.getElementById("category-filter");
  const sortingFilter = document.getElementById("sorting-filter");

  const updateRestaurantList = () => {
    const selectedCategory = categoryFilter.value;
    const filteredRestaurants = filterByCategory(
      selectedCategory,
      restaurantData,
    );

    const selectedSort = sortingFilter.value;
    const sortedRestaurants = sortingBy(selectedSort, filteredRestaurants);

    const restaurantList = createRestaurantList(sortedRestaurants);
    const listContainer = document.querySelector(".restaurant-list");
    listContainer.replaceWith(restaurantList);
  };

  categoryFilter.addEventListener("change", updateRestaurantList);
  sortingFilter.addEventListener("change", updateRestaurantList);
};
