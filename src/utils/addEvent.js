import { createRestaurantList } from "../components/RestaurantList";
import { filterByCategory } from "./filter";
import { sortingBy } from "./select";

export const addEvent = () => {
  const categoryFilter = document.getElementById("category-filter");
  categoryFilter.addEventListener("change", (event) => {
    const selectedCategory = event.target.value;
    const filteredRestaurants = filterByCategory(selectedCategory);

    const restaurantList = createRestaurantList(filteredRestaurants);
    const listContainer = document.querySelector(".restaurant-list");
    listContainer.replaceWith(restaurantList);
  });

  const sortingFilter = document.getElementById("sorting-filter");
  sortingFilter.addEventListener("change", (event) => {
    const selectedSort = event.target.value;
    const filteredRestaurants = sortingBy(selectedSort);

    const restaurantList = createRestaurantList(filteredRestaurants);
    const listContainer = document.querySelector(".restaurant-list");
    listContainer.replaceWith(restaurantList);
  });
};
