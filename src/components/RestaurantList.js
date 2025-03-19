import { RestaurantItem } from "./RestaurantItem.js";
import { RestaurantFilter } from "./RestaurantFilter.js";
import { loadRestaurants, saveRestaurants } from "../utils/storage.js";
import DetailModal from "./DetailModal.js";

export function RestaurantList(restaurantsData) {
  let restaurants = loadRestaurants() || restaurantsData;

  const state = { category: "전체", sort: "name" };

  const $restaurantContainer = document.createElement("section");
  $restaurantContainer.classList.add("restaurant-list-container");

  const $filter = RestaurantFilter(state.category, state.sort);
  const $restaurantList = document.createElement("ul");
  $restaurantList.classList.add("restaurant-list");
  $restaurantContainer.append($filter, $restaurantList);

  const detailModal = new DetailModal();
  $restaurantContainer.appendChild(detailModal.container);

  const sortedData = () => {
    const filtered =
      state.category === "전체"
        ? restaurants
        : restaurants.filter((v) => v.category === state.category);
    return state.sort === "name"
      ? [...filtered].sort((a, b) => a.name.localeCompare(b.name))
      : [...filtered].sort((a, b) => a.distance - b.distance);
  };

  const updateRestaurantList = () => {
    const updatedRestaurantList = sortedData().map((restaurant) => {
      const $restaurantItem = RestaurantItem(restaurant);
      $restaurantItem.addEventListener("click", () => {
        detailModal.open(restaurant);
      });
      return $restaurantItem;
    });
    $restaurantList.replaceChildren(...updatedRestaurantList);
  };

  const addRestaurant = (restaurant) => {
    restaurants.push(restaurant);
    saveRestaurants(restaurants);
    updateRestaurantList();
  };

  detailModal.onDelete = (restaurant) => {
    restaurants = restaurants.filter((v) => v !== restaurant);
    saveRestaurants(restaurants);
    updateRestaurantList();
  };

  const categorySelect = $filter.querySelector("#category-filter");
  const sortSelect = $filter.querySelector("#sorting-filter");

  categorySelect.addEventListener("change", (e) => {
    state.category = e.target.value;
    updateRestaurantList();
  });
  sortSelect.addEventListener("change", (e) => {
    state.sort = e.target.value;
    updateRestaurantList();
  });

  updateRestaurantList();

  return {
    $restaurantContainer,
    addRestaurant,
  };
}
