import { filterByCategory } from ".";
import { createRestaurantList } from "../components/RestaurantList";

export const addEvent = () => {
  const categoryFilter = document.getElementById("category-filter");
  categoryFilter.addEventListener("change", (event) => {
    const selectedCategory = event.target.value;
    const filteredRestaurants = filterByCategory(
      selectedCategory === "전체" ? "" : selectedCategory,
    );

    const restaurantList = createRestaurantList(filteredRestaurants);
    const listContainer = document.querySelector(".restaurant-list");
    listContainer.replaceWith(restaurantList);
  });
};
