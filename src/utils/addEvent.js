import Modal from "../components/modal/Modal";
import { createRestaurantList } from "../components/restaurantList/RestaurantList";
import { filterByCategory } from "../domain/restaurant/filterByCategory";
import { restaurantManagerInstance } from '../domain/restaurant/restaurantManager';
import { sortingBy } from "../domain/restaurant/sortingBy";

export const addEvent = () => {
  const categoryFilter = document.getElementById("category-filter");
  const sortingFilter = document.getElementById("sorting-filter");

  const updateRestaurantList = () => {
    const selectedCategory = categoryFilter.value;
    const restaurants = restaurantManagerInstance.getRestaurantList();
    const filteredRestaurants = filterByCategory(
      selectedCategory,
      restaurants,
    );

    const selectedSort = sortingFilter.value;
    const sortedRestaurants = sortingBy(selectedSort, filteredRestaurants);

    const restaurantList = createRestaurantList(sortedRestaurants);
    const listContainer = document.querySelector(".restaurant-list");
    listContainer.replaceWith(restaurantList);
  };

  categoryFilter.addEventListener("change", updateRestaurantList);
  sortingFilter.addEventListener("change", updateRestaurantList);

  const modal = new Modal();
  const restaurantGnbButton = document.querySelector(".gnb__button");
  restaurantGnbButton.addEventListener("click", () => modal.toggle());
};
